import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PeriodicgWrite = () => {
  const [date, setDate] = useState();

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      date: date,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="absolute top-8 right-0">
        <input type="date" onChange={onChangeDate} />
      </div>
      <div className="grid grid-cols-3 gap-6 pb-14">
        <div className="col-start-1 col-end-4">
          <h2 className="text-3xl font-bold mt-10">Injury Prevention</h2>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">FMS</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Overhead deep squat</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.overhead_deep_squat")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Hurdle step left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.hurdle_step_left")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Hurdle step right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.hurdle_step_right")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Hurdle step total</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.hurdle_step_total")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Inline lunge left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.inline_lunge_left")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Inline lunge right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.inline_lunge_right")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Inline lunge total</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.inline_lunge_total")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Shoulder mobility left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.shoulder_mobility_left")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Shoulder mobility right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.shoulder_mobility_right")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Shoulder mobility total</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.shoulder_mobility_total")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Active straight leg raise left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.active_straight_leg_raise_left"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Active straight leg raise right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.active_straight_leg_raise_right"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Active straight leg raise total</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.active_straight_leg_raise_total"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trunk stability push up</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.trunk_stability_push_up")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Rotary core stability left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.rotary_core_stability_left"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Rotary core stability right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.rotary_core_stability_right"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Rotary core stability total</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.rotary_core_stability_total"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Total score</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.total_score")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Y Balance</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Limb length</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.y_balance.limb_length")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Anterior left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.y_balance.anterior_left")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Anterior right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.y_balance.anterior_right")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Anterior difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.y_balance.anterior_difference")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero lateral left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_lateral_left"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero lateral right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_lateral_right"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero lateral difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_lateral_difference"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero medial right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_medial_right"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero medial difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_medial_difference"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Composite score left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.composite_score_left"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Composite score right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.composite_score_right"
                )}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Tuck Jump</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Knee valgus landing</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.tuck_jump.knee_valgus_landing")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Thights do not paralle peak jump</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.tuck_jump.thights_do_not_paralle_peak_jump"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Thight not equal during flight</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.tuck_jump.thight_not_equal_during_flight"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Foot placement not shoulder width apart</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.tuck_jump.foot_placement_not_shoulder_width_apart"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Foot placement not parallel</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.tuck_jump.foot_placement_not_parallel"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Foot contact timing not equal</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.tuck_jump.foot_contact_timing_not_equal"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Excessive landing noise</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.tuck_jump.excessive_landing_noise"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Pause between jumps</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.tuck_jump.pause_between_jumps")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Technique declines prior to 10s</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.tuck_jump.technique_declines_prior_to_10s"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Dose not landIng same footprint</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.tuck_jump.dose_not_landIng_same_footprint"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Score</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.tuck_jump.score")}
              />
            </li>
          </ul>
        </div>
        <div className="col-start-1 col-end-4">
          <h2 className="text-3xl font-bold mt-12">Performance Test</h2>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Isometric Test</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Rail point</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.rail_point")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Max force left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.max_force_left")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Max force right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.max_force_right")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Max force difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.isometric_test.max_force_difference"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RFD left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.rfd_left")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RFD right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.rfd_right")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RFD difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.rfd_difference")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">3PQ Both Legs</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Max force</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.three_pq_both_legs.max_force")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Max power</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.three_pq_both_legs.max_power")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>max power negative</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.three_pq_both_legs.max_power_negative"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Average peak power</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.three_pq_both_legs.average_peak_power"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Average peak power negative</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.three_pq_both_legs.average_peak_power_negative"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Decrement</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.three_pq_both_legs.decrement")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Decrement negative</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.three_pq_both_legs.decrement_negative"
                )}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Stiffness Jump</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Jump height max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.stiffness_jump.jump_height_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Jump height average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.stiffness_jump.jump_height_average"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RSI max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.stiffness_jump.rsi_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RSI average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.stiffness_jump.rsi_average")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label></label>
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Standing Reach</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Base</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.standing_reach.base")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Touch</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.standing_reach.touch")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Height</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.standing_reach.height")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">CMJ</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Base</label>
              <input
                type="text"
                autoComplete="off"
                name="base"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.cmj.base")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Touch</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.cmj.touch")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reach height</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.cmj.reach_height")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Jump height</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.cmj.jump_height")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Maximal Jump</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Base</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.maximal_jump.base")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Touch</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.maximal_jump.touch")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reach Height</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.maximal_jump.reach_height")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Pro Agility</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Planned trial 1</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.planned_trial_1")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Planned trial 2</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.planned_trial_2")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reaction trial 1</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.reaction_trial_1")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reaction trial 2</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.reaction_trial_2")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Planned max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.planned_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reaction max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.reaction_max")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">10Yard Dash</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>trial 1</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.ten_yard_dash.trial_1")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>trial 2</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.ten_yard_dash.trial_2")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.ten_yard_dash.result_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.ten_yard_dash.result_average")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Reaction</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Trial 1 max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.trial_1_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trial 1 average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.trial_1_average")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trial 2 max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.trial_2_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trial 2 average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.trial_2_average")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.result_max")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.result_average")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Pattern Jump</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Sagittal 10s</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pattern_jump.sagittal_10s")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Frontal 10s</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pattern_jump.frontal_10s")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Push Up</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Time</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.push_up.time")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Repetiton</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.push_up.repetiton")}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Medicine Ball Throwing</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Trial 1</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.medicine_ball_throwing.trial_1")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trial 2</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.medicine_ball_throwing.trial_2")}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.medicine_ball_throwing.result_max"
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.medicine_ball_throwing.result_average"
                )}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-16 col-start-1 col-end-4 text-center">
        <button
          type="submit"
          className="bg py-4 px-14 bg-yellow-400 rounded-3xl text-xl"
        >
          등록하기
        </button>
      </div>
    </form>
  );
};

export default PeriodicgWrite;
