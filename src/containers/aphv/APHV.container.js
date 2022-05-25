import { useState } from "react"
import client from "../../lib/api/client";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const APHVContainer = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [testDate, setTestDate] = useState(new Date());
  const [height, setHeight] = useState('');
  const [sittingHeight, setSittingHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  const [err, setErr] = useState('');

  const onSumit = async (data) => {
    try {
      await client.post('/api/aphv', data);
    } catch (err) {
      console.log(err);
    }
  };

  const Calculate = () => {
    if (gender.length < 1) {
      setErr("성별을 선택해주세요.");
      return;
    }
    if (age.length < 1) {
      setErr("나이를 입력해주세요");
      return;
    }
    if (age > 19) {
      setErr("19세 이하만 입력해주세요.");
      return;
    }
    if (height.length < 1) {
      setErr("키를 입력해주세요");
      return;
    }
    if (sittingHeight.length < 1) {
      setErr("앉은키를 입력해주세요");
      return;
    }
    if (weight.length < 1) {
      setErr("체중을 입력해주세요");
      return;
    }

    setErr('');

    let calc = null;;

    const ratio = weight / height;

    const leg = height - sittingHeight;

    if (gender === "남자") {
      calc = 
        age - (-9.236
        + (0.0002708 * ((height - sittingHeight) * sittingHeight)
        + (-0.001663 * (age * (height - sittingHeight)))
        + (0.007216 * (age * sittingHeight))
        + (0.02292 * (ratio * 100))));

    } else if (gender === "여자") {
      calc = 
        age - 
        (-9.376 + (0.0001882 * (leg * sittingHeight) + (0.0022 * (age * leg)) + (0.005841 * (age * sittingHeight)) + (-0.002658 * (age * weight)) + (0.07693 * (ratio * 100))));
    }
    calc = calc?.toFixed(1);
    setResult(calc);

    const newData = {
      gender,
      age,
      date: testDate,
      height,
      sittingHeight,
      weight,
      data: calc
    }
    onSumit(newData);
  }

  const Clear = () => {
    setAge('');
    setTestDate('');
    setHeight('');
    setSittingHeight('');
    setWeight('');
    setResult('');
  }

  return (
    <div className="w-full px-4 pb-12 md:max-w-lg ml-auto mr-auto">
      <div className="flex items-center py-3">
        <label className="w-20 mr-8 text-right">성별</label>
        <div>
          <input type="radio" name="gender" id="male" value="남자" onChange={(e) => setGender(e.target.value)} />
          <label htmlFor="male" className="ml-1 mr-4 cursor-pointer">남자</label>
          <input type="radio" name="gender" id="female" value="여자" onChange={(e) => setGender(e.target.value)} />
          <label htmlFor="female" className="ml-1 cursor-pointer">여자</label>
        </div>
      </div>
      <div className="flex items-center py-3">
        <label className="w-20 mr-8 text-right shrink-0">나이</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="border w-full px-2 py-2 rounded-md outline-none" />
      </div>
      <div className="flex items-center py-3">
        <label className="w-20 mr-8 text-right shrink-0">측정 날짜</label>
        <DatePicker dateFormat="yyyy-MM-dd" onChange={date => setTestDate(date)} selected={testDate} className="border w-full px-2 py-2 rounded-md outline-none" />
      </div>
      <div className="flex items-center py-3">
        <label className="w-20 mr-8 text-right shrink-0">키</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} className="border w-full px-2 py-2 rounded-md outline-none placeholder:text-gray-300" placeholder="cm" />
      </div>
      <div className="flex items-center py-3">
        <label className="w-20 mr-8 text-right shrink-0">앉은 키</label>
        <input type="text" value={sittingHeight} onChange={(e) => setSittingHeight(e.target.value)} className="border w-full px-2 py-2 rounded-md outline-none placeholder:text-gray-300" placeholder="cm" />
      </div>
      <div className="flex items-center py-3">
        <label className="w-20 mr-8 text-right shrink-0">체중</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} className="border w-full px-2 py-2 rounded-md outline-none placeholder:text-gray-300" placeholder="kg" />
      </div>
      <div className="mt-4 text-center text-red-400">{err}</div>
      <div className="flex justify-center mt-6">
        <button type="button" onClick={Calculate} className="bg-gray-50 rounded-md border px-4 py-2 mr-2 outline-none">성장이 급격히 일어나는 시기 계산하기</button>
        <button type="button" onClick={Clear} className="bg-gray-50 rounded-md border px-4 py-2 outline-none">Clear</button>
      </div>
      {result &&
        <div className="flex mt-10 text-3xl w-full justify-center">
          <label>APHV : </label>
          <div>{result}</div>
        </div>
      }
      <div className="mt-16 pt-10 border-t">
        <h3 className="text-lg">*APHV란?</h3>
        <p className="mt-1 text-sm">Age at Peak Height Velocity의 약자로써 급격한 성장이 시작되는 시기를 의미합니다. 이 시기엔 근골격계의 빠른 변화가 일어남으로 스포츠 활동 시 부상의 위험이 증가되는 시기이니 안전하고 효율적인 스포츠 활동을 위해 적절한 트레이닝이 필요합니다. </p>
      </div>
    </div>
  )
}

export default APHVContainer