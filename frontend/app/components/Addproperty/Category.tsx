import { CategoryProps } from "@/app/type/type";
import Image from "next/image";

const Category: React.FC<CategoryProps> = ({ dataCategory, setCategory }) => {
     return (
          <>
               <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                    <div onClick={() => setCategory("Amazing View")} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Amazing View' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                         <Image src="/amazing_view.jpg" alt="ICON" width={20} height={20} />
                         <p className="text-xs">Amazing View</p>
                    </div>
                    <div onClick={() => setCategory("Bed & Breakfast")} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Bed & Breakfast' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                         <Image src="/bed & breakfast.jpg" alt="ICON" width={20} height={20} />
                         <p className="text-xs">Bed & Breakfast</p>
                    </div >
                    <div onClick={() => setCategory("Cabins")} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                         < Image src="/cabins.jpg" alt="ICON" width={20} height={20} />
                         <p className="text-xs">Cabins</p>
                    </div >
                    <div onClick={() => setCategory("City")} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'City' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                         < Image src="/city.jpg" alt="ICON" width={20} height={20} />
                         <p className="text-xs">City</p>
                    </div >
                    <div onClick={() => setCategory("Room")} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Room' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                         < Image src="/room.jpg" alt="ICON" width={20} height={20} />
                         <p className="text-xs">Room</p>
                    </div >
                    <div onClick={() => setCategory("Ryokans")} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Ryokans' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                         < Image src="/ryokans.jpg" alt="ICON" width={20} height={20} />
                         <p className="text-xs">Ryokans</p>
                    </div >
               </div >
          </>
     )
}
export default Category;