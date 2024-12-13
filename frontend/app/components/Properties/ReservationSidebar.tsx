const ReservationSidebar = () => {
     return (
          <aside className="mt-4 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
               <h2 className="mb-5 text-2xl">$200 per night</h2>
               <div className="cursor-pointer mb-6 p-3 border border-gray-400  rounded-xl">
                    <label className="mb-2 block font-bold text-xs">Guests</label>
                    <select className="w-full -ml-1 text-xm bg-white">
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                    </select>
               </div>
               <div className="cursor-pointer w-full mb-6 py-6 text-center text-white bg-primary hover:bg-secondary rounded-xl">Book</div>
               <div className="mb-4 flex justify-between ">
                    <p>$200 * 4 night</p>
                    <p>$800</p>
               </div>
               <div className="mb-4 flex justify-between ">
                    <p>LodgeAir fee</p>
                    <p>$80</p>
               </div>
               <hr />
               <div className="mt-4 flex justify-between font-bold">
                    <p>Total</p>
                    <p>$880</p>
               </div>
          </aside>
     )
}
export default ReservationSidebar;