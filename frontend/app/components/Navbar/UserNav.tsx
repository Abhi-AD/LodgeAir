'use client'
import { useState } from "react";
import { BiMenu, BiUserCircle } from "react-icons/bi";
import { MenuLink } from "@/app/components/import";
import { useLoginModal, useSignUpModal } from "@/app/hooks/import";

const UserNav = () => {
     const loginModal = useLoginModal()
     const signupModal = useSignUpModal()
     const [isOpen, setIsOpen] = useState(false);
     return (
          <div className="p-2 relative inline-block border rounded-full">
               <button className="flex items-center gap-3" onClick={() => setIsOpen(!isOpen)}>
                    <BiMenu size={30} />
                    <BiUserCircle size={30} />
               </button>
               {isOpen && (
                    <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
                         <MenuLink
                              label='Log In'
                              onClick={() => {
                                   setIsOpen(false);
                                   loginModal.open();
                              }}
                         />
                         <MenuLink
                              label='Sign up'
                              onClick={() => {
                                   setIsOpen(false);
                                   signupModal.open();
                              }}
                         />
                    </div>
               )}
          </div>
     )
}
export default UserNav;