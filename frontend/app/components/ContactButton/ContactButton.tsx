'use client';
import { useLoginModal } from "@/app/hooks/import";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

interface ContactButtonProps {
     userId: string | null;
     landlordId: string;
}
const ContactButton: React.FC<ContactButtonProps> = ({
     userId,
     landlordId
}) => {
     const loginModal = useLoginModal();
     const router = useRouter();

     const startConversation = async () => {
          if (userId) {
               const conversation = await apiService.gettoken(`api/chat/start/${landlordId}/`)

               if (conversation.conversation_id) {
                    router.push(`/inbox/${conversation.conversation_id}`)
               }
          } else {
               loginModal.open();
          }
     }
     return (
          <div onClick={startConversation} className="mt-6 py-4 px-6 cursor-pointer bg-primary  text-white rounded-xl hover:bg-secondary transition">Contact</div>
     )
}
export default ContactButton;