import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
});

store = devtools(store);
store = persist(store, { name: "user_setting" });

const useStore = create(store);

export default useStore;
