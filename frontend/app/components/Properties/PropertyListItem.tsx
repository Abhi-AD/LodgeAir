"use client";
import { PropertyProps } from "@/app/type/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FavoriteButton } from "@/app/components/import";

const PropertyListItem: React.FC<PropertyProps> = ({ property, markFavorite }) => {
     const router = useRouter();
     return (
          <div className="cursor-pointer relative" onClick={() => router.push(`/properties/${property.id}`)}>
               <div className="overflow-hidden aspect-square rounded-xl">
                    <Image
                         src={property.image_url}
                         width={20}
                         height={20}
                         sizes="(max-width:768px) 768px, (max-width:1200px) 768px,768px"
                         className="hover:scale-110 object-cover transition h-full w-full"
                         alt="Beach house"
                    />
                    {markFavorite && (
                         <FavoriteButton
                              id={property.id}
                              is_favorite={property.is_favorite}
                              markFavorite={(is_favorite) => markFavorite(is_favorite)}
                         />
                    )}


               </div>
               <div className="mt-2">
                    <p className="text-lg font-bold">{property.title}</p>
               </div>
               <div className="mt-2">
                    <p className="text-sm text-gray-500"><strong>${property.price_per_day}</strong> per day</p>
               </div>
          </div >
     )
}
export default PropertyListItem;