import { ReservationSidebar } from "@/app/components/import";
import Image from "next/image";

const PropertyDetailPage = () => {
     return (
          <div className="max-w-[1500px] mx-auto px-6 pb-6">
               <div className="w-full h-[64vh] overflow-hidden rounded-xl relative ">
                    <Image
                         src="/beach_house.jpeg"
                         width={50}
                         height={50}
                         sizes="(max-width:768px) 768px, (max-width:1200px) 768px,768px"
                         className="object-cover transition h-full w-full"
                         alt="Beach house"
                    />
               </div>
               <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="py-6 pr-6 col-span-3">
                         <h1 className="mb-4 text-4xl">Protpery name</h1>
                         <span className="mb-6 block text-lg text-gray-600">4 guests - 2 bedrooms - 1 bathroom</span>
                         <hr />
                         <div className="py-6 flex items-center space-x-4">
                              <Image
                                   src="/beach_house.jpeg"
                                   width={50}
                                   height={50}
                                   className="w-12 h-12 rounded-full"
                                   alt="Username"
                              />
                              <p><strong>Abhishek Dangi</strong> is your host.</p>
                         </div>
                         <hr />
                         <p className="mt-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quis, nesciunt fugiat aliquam repudiandae vero tempora architecto amet obcaecati, possimus voluptatibus pariatur! Accusantium quo velit, officiis beatae quibusdam suscipit rem.</p>
                    </div>
                    <ReservationSidebar />
               </div>
          </div>
     )
}
export default PropertyDetailPage;