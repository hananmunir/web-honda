import { create } from "zustand";

const useMenuStore = create((set) => ({
  menuOpen: false,
  setMenuOpen: (value) => set({ menuOpen: value }),
}));

export default useMenuStore;
