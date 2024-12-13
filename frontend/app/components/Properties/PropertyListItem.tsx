import { PropertyProps } from "@/app/type/type";
import Image from "next/image";

const PropertyListItem: React.FC<PropertyProps> = ({ property }) => {
     return (
          <div className="cursor-pointer">
               <div className="overflow-hidden aspect-square rounded-xl">
                    <Image
                         src={property.image_url}
                         width={20}
                         height={20}
                         sizes="(max-width:768px) 768px, (max-width:1200px) 768px,768px"
                         className="hover:scale-110 object-cover transition h-full w-full"
                         alt="Beach house"
                    />
               </div>
               <div className="mt-2">
                    <p className="text-lg font-bold">{property.title}</p>
               </div>
               <div className="mt-2">
                    <p className="text-sm text-gray-500"><strong>${property.price_per_day}</strong> per day</p>
               </div>
          </div>
     )
}
export default PropertyListItem;