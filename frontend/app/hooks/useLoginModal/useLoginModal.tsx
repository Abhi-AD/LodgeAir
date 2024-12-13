import { create } from "zustand";
import { LoginModalStore } from "@/app/type/type";

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
export default useLoginModal;
