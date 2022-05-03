import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Palette from "../../lib/styles/Palette";

const PeriodicView = ({ periodic }) => {
  const fms = periodic.map((item) => {
    return {
      date: item?.date,
      total_score: item?.injury_prevention?.fms?.total_score,
    };
  });

  const y_balance = periodic.map((item) => {
    return {
      date: item?.date,
      composite_score_left: item?.injury_prevention?.y_balance?.composite_score_left,
      composite_score_right: item?.injury_prevention?.y_balance?.composite_score_right,
    };
  });

  const tuck_jump = periodic.map((item) => {
    return {
      date: item?.date,
      score: item?.injury_prevention.tuck_jump?.score,
    };
  });

  const isometric_test = periodic.map((item) => {
    return {
      date: item?.date,
      max_force_left: item?.performance_test?.isometric_test?.max_force_left,
      max_force_right: item?.performance_test?.isometric_test?.max_force_right,
      max_force_difference: item?.performance_test?.isometric_test?.max_force_difference,
      rfd_left: item?.performance_test?.isometric_test?.rfd_left,
      rfd_right: item?.performance_test?.isometric_test?.rfd_right,
      rfd_difference: item?.performance_test?.isometric_test?.rfd_difference,
    };
  });

  const three_pq_both_legs = periodic.map((item) => {
    return {
      date: item?.date,
      max_force: item?.performance_test?.three_pq_both_legs?.max_force,
      max_power: item?.performance_test?.three_pq_both_legs?.max_power,
      average_peak_power: item?.performance_test?.three_pq_both_legs?.average_peak_power,
      decrement: item?.performance_test?.three_pq_both_legs?.decrement,
    };
  });

  const stiffness_jump = periodic.map((item) => {
    return {
      date: item?.date,
      jump_height_max: item?.performance_test?.stiffness_jump?.jump_height_max,
      jump_height_average: item?.performance_test?.stiffness_jump?.jump_height_average,
      rsi_max: item?.performance_test?.stiffness_jump?.rsi_max,
      rsi_average: item?.performance_test?.stiffness_jump?.rsi_average,
    };
  });

  const standing_reach = periodic.map((item) => {
    return {
      date: item?.date,
      base: item?.performance_test?.standing_reach?.base,
      touch: item?.performance_test?.standing_reach?.touch,
      height: item?.performance_test?.standing_reach?.height,
    };
  });

  const cmj = periodic.map((item) => {
    return {
      date: item?.date,
      base: item?.performance_test?.cmj?.base,
      touch: item?.performance_test?.cmj?.touch,
      reach_height: item?.performance_test?.cmj?.reach_height,
      jump_height: item?.performance_test?.cmj?.jump_height,
    };
  });

  const maximal_jump = periodic.map((item) => {
    return {
      date: item?.date,
      base: item?.performance_test?.maximal_jump?.base,
      touch: item?.performance_test?.maximal_jump?.touch,
      reach_height: item?.performance_test?.maximal_jump?.reach_height,
    };
  });

  const pro_agility = periodic.map((item) => {
    return {
      date: item?.date,
      planned_max: item?.performance_test?.pro_agility?.planned_max,
      reaction_max: item?.performance_test?.pro_agility?.reaction_max,
    };
  });

  const ten_yard_dash = periodic.map((item) => {
    return {
      date: item?.date,
      result_max: item?.performance_test?.ten_yard_dash?.result_max,
    };
  });

  const reaction = periodic.map((item) => {
    return {
      date: item?.date,
      result_max: item?.performance_test?.reaction?.result_max,
    };
  });

  const pattern_jump = periodic.map((item) => {
    return {
      date: item?.date,
      sagittal_10s: item?.performance_test?.pattern_jump?.sagittal_10s,
      frontal_10s: item?.performance_test?.pattern_jump?.frontal_10s,
    };
  });

  const push_up = periodic.map((item) => {
    return {
      date: item?.date,
      time: item?.performance_test?.push_up?.time,
      repetiton: item?.performance_test?.push_up?.repetiton,
    };
  });

  const medicine_ball_throwing = periodic.map((item) => {
    return {
      date: item?.date,
      result_max: item?.performance_test?.medicine_ball_throwing?.result_max,
    };
  });

  return (
    <div className="pb-10">
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Injury prevention - fms
        </h2>
        {fms && 
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={fms}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total_score"
                stroke={Palette.red[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Injury prevention - Y balance
        </h2>
        {y_balance &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={y_balance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="composite_score_left"
                stroke={Palette.light_green[3]}
              />
              <Line
                type="monotone"
                dataKey="composite_score_right"
                stroke={Palette.lime[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Injury prevention - Tuck jump
        </h2>
        {tuck_jump &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={tuck_jump}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke={Palette.red[3]} />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Isometric test
        </h2>
        {isometric_test &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={isometric_test}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="max_force_left"
                stroke={Palette.pink[3]}
              />
              <Line
                type="monotone"
                dataKey="max_force_right"
                stroke={Palette.purple[3]}
              />
              <Line
                type="monotone"
                dataKey="max_force_difference"
                stroke={Palette.deep_purple[3]}
              />
              <Line
                type="monotone"
                dataKey="rfd_left"
                stroke={Palette.indigo[3]}
              />
              <Line
                type="monotone"
                dataKey="rfd_right"
                stroke={Palette.blue[3]}
              />
              <Line
                type="monotone"
                dataKey="rfd_difference"
                stroke={Palette.light_blue[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - 3pq both legs
        </h2>
        {three_pq_both_legs &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={three_pq_both_legs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="max_force" stroke={Palette.red[3]} />
              <Line
                type="monotone"
                dataKey="max_power"
                stroke={Palette.pink[3]}
              />
              <Line
                type="monotone"
                dataKey="average_peak_power"
                stroke={Palette.deep_purple[3]}
              />
              <Line
                type="monotone"
                dataKey="decrement"
                stroke={Palette.blue[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Stiffness jump
        </h2>
        {stiffness_jump &&
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
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Standing reach
        </h2>
        {standing_reach &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={standing_reach}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="base" stroke={Palette.red[3]} />
              <Line type="monotone" dataKey="touch" stroke={Palette.pink[3]} />
              <Line type="monotone" dataKey="height" stroke={Palette.purple[3]} />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">performance_test - cmj</h2>
        {cmj &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={cmj}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="base" stroke={Palette.red[3]} />
              <Line type="monotone" dataKey="touch" stroke={Palette.pink[3]} />
              <Line
                type="monotone"
                dataKey="reach_height"
                stroke={Palette.purple[3]}
              />
              <Line
                type="monotone"
                dataKey="jump_height"
                stroke={Palette.deep_purple[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Maximal jump
        </h2>
        {maximal_jump &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={maximal_jump}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="base" stroke={Palette.red[3]} />
              <Line type="monotone" dataKey="touch" stroke={Palette.pink[3]} />
              <Line
                type="monotone"
                dataKey="reach_height"
                stroke={Palette.purple[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Pro agility
        </h2>
        {pro_agility &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={pro_agility}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="planned_max"
                stroke={Palette.indigo[3]}
              />
              <Line
                type="monotone"
                dataKey="reaction_max"
                stroke={Palette.blue[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - 10yard dash
        </h2>
        {ten_yard_dash &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={ten_yard_dash}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="result_max"
                stroke={Palette.purple[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Reaction
        </h2>
        {reaction &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={reaction}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="result_max"
                stroke={Palette.indigo[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Pattern jump
        </h2>
        {pattern_jump &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={pattern_jump}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sagittal_10s"
                stroke={Palette.red[3]}
              />
              <Line
                type="monotone"
                dataKey="frontal_10s"
                stroke={Palette.pink[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Push up
        </h2>
        {push_up &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={push_up}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="time" stroke={Palette.red[3]} />
              <Line
                type="monotone"
                dataKey="repetiton"
                stroke={Palette.pink[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Medicine ball throwing
        </h2>
        {medicine_ball_throwing &&
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={medicine_ball_throwing}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="result_max"
                stroke={Palette.purple[3]}
              />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
    </div>
  );
};

export default PeriodicView;
