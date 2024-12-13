import { create } from "zustand";
import { SignUpModalStore } from "@/app/type/type";

const useSignUpModal = create<SignUpModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
export default useSignUpModal;
