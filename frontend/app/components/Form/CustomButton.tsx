import { CustomButtonProps } from "@/app/type/type"

const CustomButton: React.FC<CustomButtonProps> = ({ label, className, onClick }) => {
     return (
          <div className={`w-full py-4 bg-primary hover:bg-secondary text-white rounded-xl transition text-center cursor-pointer ${className}`} onClick={onClick}>
               {label}
          </div>
     )
}

export default CustomButton