'use client';
import { useSearchModal } from "@/app/hooks/import";
import { SearchQuery } from "@/app/type/type";
import Image from "next/image";
import { useState } from "react";
import { CgBorderAll } from "react-icons/cg";

const Categories = () => {
     const searchModal = useSearchModal();
     const [category, setCategory] = useState('');

     const _setCategory = (_category: string) => {
          setCategory(_category);

          const query: SearchQuery = {
               country: searchModal.query.country,
               checkIn: searchModal.query.checkIn,
               checkOut: searchModal.query.checkOut,
               guests: searchModal.query.guests,
               bedrooms: searchModal.query.bedrooms,
               bathrooms: searchModal.query.bathrooms,
               category: _category
          }

          searchModal.setQuery(query);
     }
     return (
          <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
               <div onClick={() => _setCategory('')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image src="/all.png" alt="ICON" width={30} height={30} />
               </div>
               <div onClick={() => _setCategory('Amazing View')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Amazing View' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image src="/amazing_view.jpg" alt="ICON" width={20} height={20} />
                    <p className="text-xs">Amazing View</p>
               </div>
               <div onClick={() => _setCategory('Bed & Breakfast')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Bed & Breakfast' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image src="/bed & breakfast.jpg" alt="ICON" width={20} height={20} />
                    <p className="text-xs">Bed & Breakfast</p>
               </div>
               <div onClick={() => _setCategory('Cabins')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image src="/cabins.jpg" alt="ICON" width={20} height={20} />
                    <p className="text-xs">Cabins</p>
               </div>
               <div onClick={() => _setCategory('City')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'City' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image src="/city.jpg" alt="ICON" width={20} height={20} />
                    <p className="text-xs">City</p>
               </div>
               <div onClick={() => _setCategory('Room')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Room' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image src="/room.jpg" alt="ICON" width={20} height={20} />
                    <p className="text-xs">Room</p>
               </div>
               <div onClick={() => _setCategory('Ryokans')} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Ryokans' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image src="/ryokans.jpg" alt="ICON" width={20} height={20} />
                    <p className="text-xs">Ryokans</p>
               </div>
          </div>
     )
}
export default Categories;