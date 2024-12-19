import Image from "next/image";
import apiService from "../services/apiService";
import Link from "next/link";

const MyReservationsPage = async () => {
     const reservations = await apiService.gettoken('api/auth/myreservations/')
     return (
          <div className="max-w-[1500px] mx-auto px-6 pb-6">
               <h1 className="my-6 text-2xl">My reservations</h1>
               <div className="space-y-2">
                    {reservations.map((reservation: any) => (
                         <div className="p-5 grid grid-cols-1  md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                              <div className="col-span-1">
                                   <div className="relative overflow-hidden aspect-square rounded-xl">
                                        <Image
                                             src={reservation.property.image_url}
                                             width={200}
                                             height={200}
                                             className="hover:scale-110 object-cover transition h-full w-full"
                                             alt="Username"
                                        />
                                   </div>
                              </div>
                              <div className="col-span-1 md:col-span-3 space-y-2">
                                   <h2 className="mb-4 text-xl">{reservation.property.title}</h2>
                                   <p className="mb-5"><strong>Check in date: </strong>{reservation.start_date}</p>
                                   <p className="mb-5"><strong>Check out date: </strong>{reservation.end_date}</p>
                                   <p className="mb-5"><strong>Number of Day: </strong>{reservation.number_of_day}</p>
                                   <p className="mb-5"><strong>Total price: </strong>${reservation.total_price}</p>
                                   <Link href={`/properties/${reservation.property.id}`}
                                        className="mt-6 inline-block cursor-pointer py-4 px-6 bg-primary text-white rounded-xl">Go to property</Link>
                              </div>
                         </div>
                    ))};
               </div>
          </div>
     )
}
export default MyReservationsPage;