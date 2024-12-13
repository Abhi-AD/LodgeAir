import Image from "next/image";

const MyReservationsPage = () => {
     return (
          <div className="max-w-[1500px] mx-auto px-6 pb-6">
               <h1 className="my-6 text-2xl">My reservations</h1>
               <div className="space-y-2">
                    <div className="p-5 grid grid-cols-1  md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                         <div className="col-span-1">
                              <div className="relative overflow-hidden aspect-square rounded-xl">
                                   <Image
                                        src="/beach_house.jpeg"
                                        width={200}
                                        height={200}
                                        className="hover:scale-110 object-cover transition h-full w-full"
                                        alt="Username"
                                   />
                              </div>
                         </div>
                         <div className="col-span-1 md:col-span-3 space-y-2">
                              <h2 className="mb-4 text-xl">Property Name</h2>
                              <p className="mb-5"><strong>Check in date: </strong>12/12/2024</p>
                              <p className="mb-5"><strong>Check out date: </strong>16/12/2024</p>
                              <p className="mb-5"><strong>Number of nights: </strong>2</p>
                              <p className="mb-5"><strong>Total price: </strong>$200</p>
                              <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-primary text-white rounded-xl">Go to property</div>
                         </div>
                    </div>
                    <div className="p-5 grid grid-cols-1  md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                         <div className="col-span-1">
                              <div className="relative overflow-hidden aspect-square rounded-xl">
                                   <Image
                                        src="/beach_house.jpeg"
                                        width={200}
                                        height={200}
                                        className="hover:scale-110 object-cover transition h-full w-full"
                                        alt="Username"
                                   />
                              </div>
                         </div>
                         <div className="col-span-1 md:col-span-3 space-y-2">
                              <h2 className="mb-4 text-xl">Property Name</h2>
                              <p className="mb-5"><strong>Check in date: </strong>12/12/2024</p>
                              <p className="mb-5"><strong>Check out date: </strong>16/12/2024</p>
                              <p className="mb-5"><strong>Number of nights: </strong>2</p>
                              <p className="mb-5"><strong>Total price: </strong>$200</p>
                              <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-primary text-white rounded-xl">Go to property</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default MyReservationsPage;