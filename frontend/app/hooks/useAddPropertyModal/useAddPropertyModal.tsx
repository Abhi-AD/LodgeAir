import { create } from "zustand";
import { AddPropertyModalStore } from "@/app/type/type";

const useAddPropertyModal = create<AddPropertyModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
export default useAddPropertyModal;
