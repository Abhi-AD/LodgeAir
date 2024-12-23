import { ReservationSidebar } from "@/app/components/import";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Image from "next/image";
import Link from "next/link";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
     const property = await apiService.gettoken(`api/properties/${params.id}/`)
     const userId = await getUserId();
     return (
          <div className="max-w-[1500px] mx-auto px-6 pb-6">
               <div className="w-full h-[64vh] overflow-hidden rounded-xl relative ">
                    <Image
                         src={property.image_url}
                         width={50}
                         height={50}
                         sizes="(max-width:768px) 768px, (max-width:1200px) 768px,768px"
                         className="object-cover transition h-full w-full"
                         alt={property.title}
                    />
               </div>
               <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="py-6 pr-6 col-span-3">
                         <h1 className="mb-4 text-4xl">{property.title}</h1>
                         <span className="mb-6 block text-lg text-gray-600">{property.guests} guests - {property.bedrooms} bedrooms - {property.bathrooms} bathroom</span>
                         <hr />
                         <Link href={`/landlords/${property.landlord.id}`} className="py-6 flex items-center space-x-4">
                              {property.landlord.avatar_url && (
                                   <Image
                                        src={property.landlord.avatar_url}
                                        width={50}
                                        height={50}
                                        className="w-12 h-12 rounded-full"
                                        alt="Username"
                                   />

                              )}
                              <p><strong>{property.landlord.name}</strong> is your host.</p>
                         </Link>
                         <hr />
                         <p className="mt-6 text-lg">{property.description}</p>
                    </div>
                    <ReservationSidebar property={property} userId={userId} />
               </div>
          </div>
     )
}
export default PropertyDetailPage;