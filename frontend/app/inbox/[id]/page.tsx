import { ConversationDetail } from "@/app/components/import";
import React, { useState, useEffect } from 'react';
import { getAccessToken, getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

const ConversationPage = async ({ params }: { params: { id: string } }) => {
     const userId = await getUserId();
     const token = await getAccessToken();
     if (!userId || !token) {
          return (
               <main className="max-w-[1500px] max-auto px-6 py-12">
                    <p>You need to be authenticated...!</p>
               </main>
          )
     }
     const conversation = await apiService.gettoken(`api/chat/${params.id}/`)
     return (
          <div className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
               <ConversationDetail
                    token={token}
                    userId={userId}
                    messages={conversation.messages}
                    conversation={conversation.conversation}
               />
          </div>
     )
}
export default ConversationPage;