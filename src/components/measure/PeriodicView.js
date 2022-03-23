import React, { useState, useEffect } from "react";
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

const PeriodicView = ({ periodic }) => {
  const [y_balance, setY_balance] = useState([]);
  const [tuck_jump, setTuck_jump] = useState([]);
  const [isometric_test, setIsometric_test] = useState([]);
  const [three_pq_both_legs, setThree_pq_both_legs] = useState([]);
  const [stiffness_jump, setStiffness_jump] = useState([]);
  const [standing_reach, setStanding_reach] = useState([]);
  const [cmj, setCmj] = useState([]);
  const [maximal_jump, setMaximal_jump] = useState([]);
  const [pro_agility, setPro_agility] = useState([]);
  const [ten_yard_dash, setTen_yard_dash] = useState([]);
  const [reaction, setReaction] = useState([]);
  const [pattern_jump, setPattern_jump] = useState([]);
  const [push_up, setPush_up] = useState([]);
  const [medicine_ball_throwing, setMedicine_ball_throwing] = useState([]);

  const fms = periodic.map((item) => {
    return {
      date: item.date,
      overhead_deep_squat: item.injury_prevention.fms.overhead_deep_squat,
      hurdle_step_left: item.injury_prevention.fms.hurdle_step_left,
      hurdle_step_right: item.injury_prevention.fms.hurdle_step_right,
      hurdle_step_total: item.injury_prevention.fms.hurdle_step_total,
      inline_lunge_left: item.injury_prevention.fms.inline_lunge_left,
      inline_lunge_right: item.injury_prevention.fms.inline_lunge_right,
      inline_lunge_total: item.injury_prevention.fms.inline_lunge_total,
      shoulder_mobility_left: item.injury_prevention.fms.shoulder_mobility_left,
      shoulder_mobility_right: item.injury_prevention.fms.shoulder_mobility_right,
      shoulder_mobility_total: item.injury_prevention.fms.shoulder_mobility_total,
      active_straight_leg_raise_left:
        item.injury_prevention.fms.active_straight_leg_raise_left,
      active_straight_leg_raise_right:
        item.injury_prevention.fms.active_straight_leg_raise_right,
      active_straight_leg_raise_total:
        item.injury_prevention.fms.active_straight_leg_raise_total,
      trunk_stability_push_up: item.injury_prevention.fms.trunk_stability_push_up,
      rotary_core_stability_left: item.injury_prevention.fms.rotary_core_stability_left,
      rotary_core_stability_right: item.injury_prevention.fms.rotary_core_stability_right,
      rotary_core_stability_total: item.injury_prevention.fms.rotary_core_stability_total,
      total_score: item.injury_prevention.fms.total_score
    }
  });

  useEffect(() => {
    
    if (periodic.length > 0) {
      periodic.map((item) => {
        if (item.injury_prevention.hasOwnProperty('y_balance')) {
          setY_balance([
            ...y_balance,
            {
              date: item.date,
              limb_length: item.injury_prevention.y_balance.limb_length,
              anterior_left: item.injury_prevention.y_balance.anterior_left,
              anterior_right: item.injury_prevention.y_balance.anterior_right,
              anterior_difference: item.injury_prevention.y_balance.anterior_difference,
              postero_lateral_left: item.injury_prevention.y_balance.postero_lateral_left,
              postero_lateral_right: item.injury_prevention.y_balance.postero_lateral_right,
              postero_lateral_difference:
                item.injury_prevention.y_balance.postero_lateral_difference,
              postero_medial_left: item.injury_prevention.y_balance.postero_medial_left,
              postero_medial_right: item.injury_prevention.y_balance.postero_medial_right,
              postero_medial_difference: item.injury_prevention.y_balance.postero_medial_difference,
              composite_score_left: item.injury_prevention.y_balance.composite_score_left,
              composite_score_right: item.injury_prevention.y_balance.composite_score_right,
            },
          ]);
        }
        if (item.injury_prevention.hasOwnProperty('tuck_jump')) {
          setTuck_jump([
            ...tuck_jump,
            {
              date: item.date,
              score: item.injury_prevention.tuck_jump.score,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('isometric_test')) {
          setIsometric_test([
            ...isometric_test,
            {
              date: item.date,
              rail_point: item.performance_test.isometric_test.rail_point,
              max_force_left: item.performance_test.isometric_test.max_force_left,
              max_force_right: item.performance_test.isometric_test.max_force_right,
              max_force_difference: item.performance_test.isometric_test.max_force_difference,
              rfd_left: item.performance_test.isometric_test.rfd_left,
              rfd_right: item.performance_test.isometric_test.rfd_right,
              rfd_difference: item.performance_test.isometric_test.rfd_difference,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('three_pq_both_legs')) {
          setThree_pq_both_legs([
            ...three_pq_both_legs,
            {
              date: item.date,
              max_force: item.performance_test.three_pq_both_legs.max_force,
              max_power: item.performance_test.three_pq_both_legs.max_power,
              max_power_negative: item.performance_test.three_pq_both_legs.max_power_negative,
              average_peak_power: item.performance_test.three_pq_both_legs.average_peak_power,
              average_peak_power_negative:
                item.performance_test.three_pq_both_legs.average_peak_power_negative,
              decrement: item.performance_test.three_pq_both_legs.decrement,
              decrement_negative: item.performance_test.three_pq_both_legs.decrement_negative,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('stiffness_jump')) {
          setStiffness_jump([
            ...stiffness_jump,
            {
              date: item.date,
              jump_height_max: item.performance_test.stiffness_jump.jump_height_max,
              jump_height_average: item.performance_test.stiffness_jump.jump_height_average,
              rsi_max: item.performance_test.stiffness_jump.rsi_max,
              rsi_average: item.performance_test.stiffness_jump.rsi_average,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('standing_reach')) {
          setStanding_reach([
            ...standing_reach,
            {
              date: item.date,
              base: item.performance_test.standing_reach.base,
              touch: item.performance_test.standing_reach.touch,
              height: item.performance_test.standing_reach.height,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('cmj')) {
          setCmj([
            ...cmj,
            {
              date: item.date,
              base: item.performance_test.cmj.base,
              touch: item.performance_test.cmj.touch,
              reach_height: item.performance_test.cmj.reach_height,
              jump_height: item.performance_test.cmj.jump_height,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('maximal_jump')) {
          setMaximal_jump([
            ...maximal_jump,
            {
              date: item.date,
              base: item.performance_test.maximal_jump.base,
              touch: item.performance_test.maximal_jump.touch,
              reach_height: item.performance_test.maximal_jump.reach_height,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('pro_agility')) {
          setPro_agility([
            ...pro_agility,
            {
              date: item.date,
              planned_trial_1: item.performance_test.pro_agility.planned_trial_1,
              planned_trial_2: item.performance_test.pro_agility.planned_trial_2,
              reaction_trial_1: item.performance_test.pro_agility.reaction_trial_1,
              reaction_trial_2: item.performance_test.pro_agility.reaction_trial_2,
              planned_max: item.performance_test.pro_agility.planned_max,
              reaction_max: item.performance_test.pro_agility.reaction_max,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('ten_yard_dash')) {
          setTen_yard_dash([
            ...ten_yard_dash,
            {
              date: item.date,
              trial_1: item.performance_test.ten_yard_dash.trial_1,
              trial_2: item.performance_test.ten_yard_dash.trial_2,
              result_max: item.performance_test.ten_yard_dash.result_max,
              result_average: item.performance_test.ten_yard_dash.result_average,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('reaction')) {
          setReaction([
            ...reaction,
            {
              date: item.date,
              trial_1_max: item.performance_test.reaction.trial_1_max,
              trial_1_average: item.performance_test.reaction.trial_1_average,
              trial_2_max: item.performance_test.reaction.trial_2_max,
              trial_2_average: item.performance_test.reaction.trial_2_average,
              result_max: item.performance_test.reaction.result_max,
              result_average: item.performance_test.reaction.result_average,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('pattern_jump')) {
          setPattern_jump([
            ...pattern_jump,
            {
              date: item.date,
              sagittal_10s: item.performance_test.pattern_jump.sagittal_10s,
              frontal_10s: item.performance_test.pattern_jump.frontal_10s,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('push_up')) {
          setPush_up([
            ...push_up,
            {
              date: item.date,
              time: item.performance_test.push_up.time,
              repetiton: item.performance_test.push_up.repetiton,
            },
          ]);
        }
        if (item.performance_test.hasOwnProperty('medicine_ball_throwing')) {
          setMedicine_ball_throwing([
            ...medicine_ball_throwing,
            {
              date: item.date,
              trial_1: item.performance_test.medicine_ball_throwing.trial_1,
              trial_2: item.performance_test.medicine_ball_throwing.trial_2,
              result_max: item.performance_test.medicine_ball_throwing.result_max,
              result_average: item.performance_test.medicine_ball_throwing.result_average,
            },
          ]);
        }
      });
    }
  }, [periodic]);

  return (
    <div className="pb-10">
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Injury prevention - fms
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={fms}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="overhead_deep_squat"
              stroke="#E57373"
            />
            <Line type="monotone" dataKey="hurdle_step_left" stroke="#E57373" />
            <Line
              type="monotone"
              dataKey="hurdle_step_right"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="hurdle_step_total"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="inline_lunge_left"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="inline_lunge_right"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="inline_lunge_total"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="shoulder_mobility_left"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="shoulder_mobility_right"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="shoulder_mobility_total"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="active_straight_leg_raise_left"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="active_straight_leg_raise_right"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="active_straight_leg_raise_total"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="trunk_stability_push_up"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="rotary_core_stability_left"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="rotary_core_stability_right"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="rotary_core_stability_total"
              stroke="#E57373"
            />
            <Line type="monotone" dataKey="total_score" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Injury prevention - Y balance
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={y_balance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="limb_length" stroke="#E57373" />
            <Line type="monotone" dataKey="anterior_left" stroke="#E57373" />
            <Line type="monotone" dataKey="anterior_right" stroke="#E57373" />
            <Line
              type="monotone"
              dataKey="anterior_difference"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="postero_lateral_left"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="postero_lateral_right"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="postero_lateral_difference"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="postero_medial_left"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="postero_medial_right"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="postero_medial_difference"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="composite_score_left"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="composite_score_right"
              stroke="#E57373"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Injury prevention - Tuck jump
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={tuck_jump}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="score" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Isometric test
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={isometric_test}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="rail_point" stroke="#E57373" />
            <Line type="monotone" dataKey="max_force_left" stroke="#E57373" />
            <Line type="monotone" dataKey="max_force_right" stroke="#E57373" />
            <Line
              type="monotone"
              dataKey="max_force_difference"
              stroke="#E57373"
            />
            <Line type="monotone" dataKey="rfd_left" stroke="#E57373" />
            <Line type="monotone" dataKey="rfd_right" stroke="#E57373" />
            <Line type="monotone" dataKey="rfd_difference" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - 3pq both legs
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={three_pq_both_legs}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="max_force" stroke="#E57373" />
            <Line type="monotone" dataKey="max_power" stroke="#E57373" />
            <Line
              type="monotone"
              dataKey="max_power_negative"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="average_peak_power"
              stroke="#E57373"
            />
            <Line
              type="monotone"
              dataKey="average_peak_power_negative"
              stroke="#E57373"
            />
            <Line type="monotone" dataKey="decrement" stroke="#E57373" />
            <Line
              type="monotone"
              dataKey="decrement_negative"
              stroke="#E57373"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Stiffness jump
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={stiffness_jump}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="jump_height_max" stroke="#E57373" />
            <Line
              type="monotone"
              dataKey="jump_height_average"
              stroke="#E57373"
            />
            <Line type="monotone" dataKey="rsi_max" stroke="#E57373" />
            <Line type="monotone" dataKey="rsi_average" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Standing reach
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={standing_reach}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="base" stroke="#E57373" />
            <Line type="monotone" dataKey="touch" stroke="#E57373" />
            <Line type="monotone" dataKey="height" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">performance_test - cmj</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={cmj}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="base" stroke="#E57373" />
            <Line type="monotone" dataKey="touch" stroke="#E57373" />
            <Line type="monotone" dataKey="reach_height" stroke="#E57373" />
            <Line type="monotone" dataKey="jump_height" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Maximal jump
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={maximal_jump}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="base" stroke="#E57373" />
            <Line type="monotone" dataKey="touch" stroke="#E57373" />
            <Line type="monotone" dataKey="reach_height" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Pro agility
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={pro_agility}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="planned_trial_1" stroke="#E57373" />
            <Line type="monotone" dataKey="planned_trial_2" stroke="#E57373" />
            <Line type="monotone" dataKey="reaction_trial_1" stroke="#E57373" />
            <Line type="monotone" dataKey="reaction_trial_2" stroke="#E57373" />
            <Line type="monotone" dataKey="planned_max" stroke="#E57373" />
            <Line type="monotone" dataKey="reaction_max" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - 10yard dash
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={ten_yard_dash}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trial_1" stroke="#E57373" />
            <Line type="monotone" dataKey="trial_2" stroke="#E57373" />
            <Line type="monotone" dataKey="result_max" stroke="#E57373" />
            <Line type="monotone" dataKey="result_average" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Reaction
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={reaction}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trial_1_max" stroke="#E57373" />
            <Line type="monotone" dataKey="trial_1_average" stroke="#E57373" />
            <Line type="monotone" dataKey="trial_2_max" stroke="#E57373" />
            <Line type="monotone" dataKey="trial_2_average" stroke="#E57373" />
            <Line type="monotone" dataKey="result_max" stroke="#E57373" />
            <Line type="monotone" dataKey="result_average" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Pattern jump
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={pattern_jump}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sagittal_10s" stroke="#E57373" />
            <Line type="monotone" dataKey="frontal_10s" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Push up
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={push_up}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="time" stroke="#E57373" />
            <Line type="monotone" dataKey="repetiton" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-10 pl-4 pr-12 mt-12 bg-white shadow-3xl rounded-3xl">
        <h2 className="text-3xl font-bold pb-6 pl-8">
          Performance test - Medicine ball throwing
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={medicine_ball_throwing}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trial_1" stroke="#E57373" />
            <Line type="monotone" dataKey="trial_2" stroke="#E57373" />
            <Line type="monotone" dataKey="result_max" stroke="#E57373" />
            <Line type="monotone" dataKey="result_average" stroke="#E57373" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PeriodicView;
