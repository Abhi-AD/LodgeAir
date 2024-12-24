'use client';
import { useSearchModal } from "@/app/hooks/import";
import { BiSearch } from "react-icons/bi";

const SearchFilter = () => {
     const searchModal = useSearchModal();
     return (
          <div
               onClick={() => searchModal.open('location')}
               className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
               <div className="hidden lg:block">
                    <div className="flex flex-row items-center justify-between">
                         <div className="cursor-pointer  h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                              <p className="text-sm font-semibold">Where</p>
                              <p className="text-sm">Wanted location</p>
                         </div>
                         <div className="cursor-pointer  h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                              <p className="text-sm font-semibold">Check in</p>
                              <p className="text-sm">Add dates</p>
                         </div>
                         <div className="cursor-pointer  h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                              <p className="text-sm font-semibold">Check out</p>
                              <p className="text-sm">Add dates</p>
                         </div>
                         <div className="cursor-pointer  h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                              <p className="text-sm font-semibold">Who</p>
                              <p className="text-sm">Add guests</p>
                         </div>
                    </div>
               </div>
               <div className="p-2">
                    <div className="cursor-pointer p-2 lg:p-4 bg-primary hover:bg-secondary transition rounded-full text-white">
                         <BiSearch size={20} />
                    </div>
               </div>
          </div>
     )
}
export default SearchFilter;
