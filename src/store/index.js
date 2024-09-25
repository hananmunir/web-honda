import { create } from "zustand";

const useMenuStore = create((set) => ({
  menuOpen: false,
  setMenuOpen: (value) => set({ menuOpen: value }),
  formOpen: false,
  setFormOpen: (value) => set({ formOpen: value }),
}));

export default useMenuStore;
