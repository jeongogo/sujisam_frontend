import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Palette from "../../lib/styles/Palette";

const MonitoringView = ({ monitoring }) => {
  const vas = monitoring.map((item) => {
    let data = null;
    if (item.hasOwnProperty("vas")) {
      data = {
        date: item.date,
        sleep_time: item.vas.sleep_time,
        sleep_quality: item.vas.sleep_quality,
        fatigue: item.vas.fatigue,
        muscle_soreness: item.vas.muscle_soreness,
        stress_level: item.vas.stress_level,
        mood: item.vas.mood,
        pain: item.vas.pain,
      };
    }
    return data;
  });

  const cmj = monitoring.map((item) => {
    let data = null;
    if (item.hasOwnProperty("cmj")) {
      data = {
        date: item.date,
        jump_height_max: item.performance.cmj.jump_height_max,
        jump_height_average: item.performance.cmj.jump_height_average,
      };
    }
    return data;
  });

  const stiffness_jump = monitoring.map((item) => {
    let data = null;
    if (item.hasOwnProperty("stiffness_jump")) {
      data = {
        date: item.date,
        jump_height_max: item.performance.stiffness_jump.jump_height_max,
        jump_height_average:
          item.performance.stiffness_jump.jump_height_average,
        rsi_max: item.performance.stiffness_jump.rsi_max,
        rsi_average: item.performance.stiffness_jump.rsi_average,
      };
    }
    return data;
  });

  return (
    <div className="pb-10">
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">vas</h2>
        {vas && (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={vas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sleep_time"
                stroke={Palette.red[3]}
              />
              <Line
                type="monotone"
                dataKey="sleep_quality"
                stroke={Palette.pink[3]}
              />
              <Line
                type="monotone"
                dataKey="fatigue"
                stroke={Palette.purple[3]}
              />
              <Line
                type="monotone"
                dataKey="muscle_soreness"
                stroke={Palette.deep_purple[3]}
              />
              <Line
                type="monotone"
                dataKey="stress_level"
                stroke={Palette.indigo[3]}
              />
              <Line type="monotone" dataKey="mood" stroke={Palette.blue[3]} />
              <Line
                type="monotone"
                dataKey="pain"
                stroke={Palette.light_blue[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">performance - cmj</h2>
        {cmj && (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={cmj}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="jump_height_max"
                stroke={Palette.red[3]}
              />
              <Line
                type="monotone"
                dataKey="jump_height_average"
                stroke={Palette.pink[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          performance - stiffness_jump
        </h2>
        {stiffness_jump && (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={stiffness_jump}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="jump_height_max"
                stroke={Palette.red[3]}
              />
              <Line
                type="monotone"
                dataKey="jump_height_average"
                stroke={Palette.pink[3]}
              />
              <Line
                type="monotone"
                dataKey="rsi_max"
                stroke={Palette.purple[3]}
              />
              <Line
                type="monotone"
                dataKey="rsi_average"
                stroke={Palette.deep_purple[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default MonitoringView;
