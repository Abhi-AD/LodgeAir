import { SearchModalStore, SearchQuery } from "@/app/type/type";
import { create } from "zustand";

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  step: "",
  open: (step) => set({ isOpen: true, step: step }),
  close: () => set({ isOpen: false }),
  setQuery: (query: SearchQuery) => set({ query: query }),
  query: {
    country: "",
    checkIn: undefined,
    checkOut: undefined,
    guests: 1,
    bedrooms: 0,
    bathrooms: 0,
    category: "",
  },
}));

export default useSearchModal;
