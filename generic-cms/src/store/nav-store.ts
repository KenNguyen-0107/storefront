import { create } from 'zustand';

interface NavMenuStore {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const useNavMenuStore = create<NavMenuStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));