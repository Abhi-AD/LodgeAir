import { Conversation } from "@/app/components/import";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import { ConversationType } from "@/app/type/type";

const InboxPage = async () => {
     const userId = await getUserId();
     if (!userId) {
          return (
               <main className="max-w-[1500px] max-auto px-6 py-12">
                    <p>You need to be authenticated...</p>
               </main>
          )
     }
     const conversations = await apiService.gettoken('api/chat/')
     return (
          <div className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
               <h1 className="my-6 text-2xl">Inbox</h1>
               {conversations.map((conversation: ConversationType) => (
                    <Conversation
                         userId={userId}
                         key={conversation.id}
                         conversation={conversation}
                    />
               )
               )}
          </div>
     )
}
export default InboxPage;