'use client'
import { useState } from "react";
import { BiMenu, BiUserCircle } from "react-icons/bi";
import { LogoutButton, MenuLink } from "@/app/components/import";
import { useLoginModal, useSignUpModal } from "@/app/hooks/import";
import { UserNavProps } from "@/app/type/type";
import { useRouter } from "next/navigation";

const UserNav: React.FC<UserNavProps> = ({ userId }) => {
     const router = useRouter();
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
                         {userId ? (
                              <>
                                   <MenuLink
                                        label='My properties'
                                        onClick={() => {
                                             setIsOpen(false);
                                             router.push(`/myproperties`)
                                        }}
                                   />

                                   <LogoutButton />
                              </>

                         ) : (
                              <>
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
                              </>

                         )}
                    </div>
               )}
          </div>
     )
}
export default UserNav;