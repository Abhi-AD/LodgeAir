"use client"
import { CustomButton, Modal } from "@/app/components/import"
import { useLoginModal } from "@/app/hooks/import"
const LoginModal = () => {
     const loginModal = useLoginModal()
     const content = (
          <>
               <form className="space-y-4">
                    <input type="email" placeholder="Your e-mail address..." className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                    <input type="password" placeholder="Your password..." className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                    <div className="p-5 bg-red-600 text-white rounded-xl opacity-80">
                         The  error message
                    </div>
                    <CustomButton label="Submit" onClick={() => console.log("Test")} />
               </form>
          </>
     )
     return (
          <Modal
               isOpen={loginModal.isOpen}
               close={loginModal.close}
               label="Log In"
               content={content}
          />
     )
}
export default LoginModal;