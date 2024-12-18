"use client";
import { useState, useEffect } from 'react'
import { Range } from 'react-date-range'
import { differenceInDays, eachDayOfInterval, format } from 'date-fns'
import apiService from '@/app/services/apiService';
import { useLoginModal } from '@/app/hooks/import';
import { ReservationSidebarProps } from '@/app/type/type';
import { DatePicker } from '@/app/components/import';

const initialDateRange = {
     startDate: new Date(),
     endDate: new Date(),
     key: 'selection'
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({ property, userId }) => {
     const loginModal = useLoginModal();
     const [fee, setFee] = useState<number>(0);
     const [day, setDay] = useState<number>(1);
     const [totalPrice, setTotalPrice] = useState<number>(0);
     const [dateRange, setDateRange] = useState<Range>(initialDateRange);
     const [minDate, setMinDate] = useState<Date>(new Date());
     const [bookedDates, setBookedDates] = useState<Date[]>([]);
     const [guests, setGuests] = useState<string>('1');
     const guestsRange = Array.from({ length: property.guests }, (_, index) => index + 1)


     // booking property
     const performBooking = async () => {
          console.log('performBooking', userId);

          if (userId) {
               if (dateRange.startDate && dateRange.endDate) {
                    try {
                         const formData = new FormData();
                         formData.append('guests', guests);
                         formData.append('start_date', format(dateRange.startDate, 'yyyy-MM-dd'));
                         formData.append('end_date', format(dateRange.endDate, 'yyyy-MM-dd'));
                         formData.append('number_of_day', day.toString());
                         formData.append('total_price', totalPrice.toString());

                         console.log("Formdata", formData);

                         const response = await apiService.posttoken(`api/properties/${property.id}/book/`, formData);

                         console.log('Response12345t6ytrewqwertg:', response);

                         if (response.success) {
                              console.log('Booking successful');
                         } else {
                              console.log('Something went wrong...', response.message || 'Unknown error');
                         }
                    } catch (error) {
                         console.error('Error occurred while booking:', error);
                    }
               } else {
                    console.warn('Start date or end date is missing.');
               }
          } else {
               loginModal.open();
          }
     };

     // date rangering
     const _setDateRange = (selection: any) => {
          const newStartDate = new Date(selection.startDate);
          const newEndDate = new Date(selection.endDate);

          if (newEndDate <= newStartDate) {
               newEndDate.setDate(newStartDate.getDate() + 1);
          }

          setDateRange({
               ...dateRange,
               startDate: newStartDate,
               endDate: newEndDate
          })
     }

     // getReservations
     const getReservations = async () => {
          const reservations = await apiService.get(`api/properties/${property.id}/reservations/`)
          let dates: Date[] = [];
          reservations.forEach((reservation: any) => {
               const range = eachDayOfInterval({
                    start: new Date(reservation.start_date),
                    end: new Date(reservation.end_date)
               });
               dates = [...dates, ...range];
          })
          setBookedDates(dates);
     }

     useEffect(() => {
          getReservations();
          if (dateRange.startDate && dateRange.endDate) {
               const dayCount = differenceInDays(
                    dateRange.endDate,
                    dateRange.startDate
               );

               if (dayCount && property.price_per_day) {
                    const _fee = ((dayCount * property.price_per_day) / 100) * 5;
                    setFee(_fee);
                    setTotalPrice((dayCount * property.price_per_day) + _fee);
                    setDay(dayCount);
               } else {
                    const _fee = (property.price_per_day / 100) * 5;

                    setFee(_fee);
                    setTotalPrice(property.price_per_day + _fee);
                    setDay(1);
               }
          }
     }, [dateRange])

     return (
          <aside className="mt-4 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
               <h2 className="mb-5 text-2xl">${property.price_per_day} per day</h2>
               <DatePicker
                    value={dateRange}
                    bookedDates={bookedDates}
                    onChange={(value) => _setDateRange(value.selection)}
               />
               <div className="cursor-pointer mb-6 p-3 border border-gray-400  rounded-xl">
                    <label className="mb-2 block font-bold text-xs">Guests</label>
                    <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full -ml-1 text-xm bg-white">
                         {guestsRange.map(number => {
                              return <option key={number} value={number}>{number} guest{number > 1 ? 's' : ''}</option>
                         })}
                    </select>
               </div>
               <div onClick={performBooking} className="cursor-pointer w-full mb-6 py-6 text-center text-white bg-primary hover:bg-secondary rounded-xl">Book</div>
               <div className="mb-4 flex justify-between ">
                    <p>${property.price_per_day} * {day} day</p>
                    <p>${property.price_per_day * day}</p>
               </div>
               <div className="mb-4 flex justify-between ">
                    <p>LodgeAir fee</p>
                    <p>${fee}</p>
               </div>
               <hr />
               <div className="mt-4 flex justify-between font-bold">
                    <p>Total</p>
                    <p>${totalPrice}</p>
               </div>
          </aside>
     )
}
export default ReservationSidebar;