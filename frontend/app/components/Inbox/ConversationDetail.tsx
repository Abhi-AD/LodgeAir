'use client';
import { CustomButton } from "../import";
const ConversationDetail = () => {
     return (
          <>
               <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                    <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                         <p className="font-bold text-gray-500">Abhishek Dangi</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ratione ipsum qui provident fugit consequatur a nemo, nisi recusandae excepturi, suscipit iusto obcaecati accusamus consequuntur. Perspiciatis unde quasi commodi facilis.</p>
                    </div>
                    <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                         <p className="font-bold text-gray-500">Abhishek Dangi</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ratione ipsum qui provident fugit consequatur a nemo, nisi recusandae excepturi, suscipit iusto obcaecati accusamus consequuntur. Perspiciatis unde quasi commodi facilis.</p>
                    </div>
               </div>
               <div className="mt-4 py-6 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                    <input type="text" placeholder="Type your message..." className="w-full p-2 bg-gray-200 rounded-xl" />
                    <CustomButton className="w-[100px]" label='Send' onClick={() => console.log("Clicked me")} />
               </div>
          </>
     )
}
export default ConversationDetail;