import Image from "next/image";

const PropertyListItem = () => {
     return (
          <div className="cursor-pointer">
               <div className="overflow-hidden aspect-square rounded-xl">
                    <Image
                         src="/beach_house.jpeg"
                         width={20}
                         height={20}
                         sizes="(max-width:768px) 768px, (max-width:1200px) 768px,768px"
                         className="hover:scale-110 object-cover transition h-full w-full"
                         alt="Beach house"
                    />
               </div>
               <div className="mt-2">
                    <p className="text-lg font-bold">Property Name</p>
               </div>
               <div className="mt-2">
                    <p className="text-sm text-gray-500"><strong>$200</strong> per night</p>
               </div>
          </div>
     )
}
export default PropertyListItem;