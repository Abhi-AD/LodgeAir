"use client"
import { useAddPropertyModal, useLoginModal } from "@/app/hooks/import";
import { AddPropertyButtonProps } from "@/app/type/type";

const AddPropteryButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
     const loginModal = useLoginModal();
     const addPropertyModal = useAddPropertyModal();
     const lodgeairYourHome = () => {
          if (userId) {
               addPropertyModal.open()
          }
          else {
               loginModal.open()
          }
     }
     return (
          <div onClick={lodgeairYourHome} className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200">
               LodgeAir your home
          </div>
     )
}
export default AddPropteryButton;