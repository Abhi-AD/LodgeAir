'use client';
import { ConversationDetailProps, MessageType, UserType } from "@/app/type/type";
import { CustomButton } from "../import";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect, useState, useRef } from "react";

const ConversationDetail: React.FC<ConversationDetailProps> = ({ conversation, userId, token }) => {
     const messagesDiv = useRef<HTMLDivElement>(null);
     const [newMessage, setNewMessage] = useState('');
     const myUser = conversation.users?.find((user) => user.id == userId)
     const otherUser = conversation.users?.find((user) => user.id != userId)
     const [realtimeMessages, setRealtimeMessages] = useState<MessageType[]>([]);

     const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`${process.env.NEXT_PUBLIC_WS_HOST}/ws/${conversation.id}/?token=${token}`, {
          share: false,
          shouldReconnect: () => true,
     },
     )

     useEffect(() => {
          console.log("Connection state changed", readyState);
     }, [readyState]);

     useEffect(() => {
          if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'name' in lastJsonMessage && 'body' in lastJsonMessage) {
               const message: MessageType = {
                    id: '',
                    name: lastJsonMessage.name as string,
                    body: lastJsonMessage.body as string,
                    sent_to: otherUser as UserType,
                    created_by: myUser as UserType,
                    conversationId: conversation.id
               }

               setRealtimeMessages((realtimeMessages) => [...realtimeMessages, message]);
          }

          scrollToBottom();
     }, [lastJsonMessage]);

     const sendMessage = async () => {
          console.log('sendMessage'),
               sendJsonMessage({
                    event: 'chat_message',
                    data: {
                         body: newMessage,
                         name: myUser?.name,
                         sent_to_id: otherUser?.id,
                         conversation_id: conversation.id
                    }
               });
          setNewMessage('');
          setTimeout(() => {
               scrollToBottom()
          }, 50);
     }
     const scrollToBottom = () => {
          if (messagesDiv.current) {
               messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
          }
     }

     return (
          <>
               <div ref={messagesDiv} className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                    {realtimeMessages.map((message, index) => (
                         <div
                              key={index}
                              className={`w-[80%] py-4 px-6 rounded-xl ${message.name == myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}
                         >
                              <p className="font-bold text-gray-500">{message.name}</p>
                              <p>{message.body}</p>
                         </div>
                    ))}
               </div>
               <div className="mt-4 py-6 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                    <input
                         type="text"
                         placeholder="Type your message..."
                         className="w-full p-2 bg-gray-200 rounded-xl"
                         value={newMessage}
                         onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <CustomButton className="w-[100px]" label='Send' onClick={sendMessage} />
               </div>
          </>
     )
}
export default ConversationDetail;