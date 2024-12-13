'use client'
import { ModalProps } from "@/app/type/type";
import { useCallback, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

const Modal: React.FC<ModalProps> = ({ label, content, isOpen, close }) => {
     const [showModel, setShowModel] = useState(isOpen)

     useEffect(() => {
          setShowModel(isOpen)
     }, [isOpen])

     const handleClose = useCallback(() => {
          setShowModel(false)
          setTimeout(() => {
               close();
          }, 300)
     }, [close])

     if (!isOpen) {
          return null;
     }

     return (
          <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60 ">
               <div className="relative w-[90%] md:w-[80%] lg:[700px] my-6 h-auto mx-auto">
                    <div className={`translate duration-600 h-full ${showModel ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}`}>
                         <div className="w-full h-full rounded-xl relative flex flex-col bg-white">
                              <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b ">
                                   <div className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                        <CgClose size={20} onClick={handleClose} />
                                   </div>
                                   <h2 className="text-lg font-bold">{label}</h2>
                              </header>
                              <section className="p-6">{content}</section>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default Modal;