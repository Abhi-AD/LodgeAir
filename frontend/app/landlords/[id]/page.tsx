import { ContactButton, PropertyList } from "@/app/components/import";
import Image from "next/image";

const LandlordsDetailsPage = () => {
     return (
          <div className="max-w-[1500px] mx-auto px-6 pb-6">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <aside className="col-span-1 mb-4">
                         <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                              <Image
                                   src="/beach_house.jpeg"
                                   width={200}
                                   height={200}
                                   className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full"
                                   alt="Username"
                              />
                              <h1 className="mt-6 text-2xl">Landlords Name</h1>
                              <ContactButton />
                         </div>
                    </aside>
                    <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                         <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                              <PropertyList />
                         </div>

                    </div>
               </div>
          </div>
     )
}
export default LandlordsDetailsPage;