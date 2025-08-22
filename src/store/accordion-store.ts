import { create } from "zustand";

type AccordionStore = {
    openItem: string | null;
    setOpenItem: (value: string | null) => void;
};

const useAccordionStore = create<AccordionStore>((set) => ({
    openItem: null,
    setOpenItem: (value) => set({ openItem: value }),
}));

export default useAccordionStore;
