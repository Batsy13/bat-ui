import { create } from "zustand";

type AlertDialogState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useAlertDialogStore = create<AlertDialogState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));