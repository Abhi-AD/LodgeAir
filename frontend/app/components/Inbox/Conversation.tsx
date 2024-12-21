'use client';
import { ConversationProps } from "@/app/type/type";
import { useRouter } from "next/navigation";

const Conversation: React.FC<ConversationProps> = ({ userId, conversation }) => {
     const router = useRouter();
     const otherUser = conversation.users.find((user) => user.id != userId)
     return (
          <div className="px-6 py-4 cursor-pointer border border-gray-300 rounded-xl">
               <p className="mb-b text-xl">{otherUser?.name}</p>
               <p onClick={() => router.push(`/inbox/${conversation.id}`)} className="text-tertiary">Go to conversation</p>
          </div>
     )
}
export default Conversation;