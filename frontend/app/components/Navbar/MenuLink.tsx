import { MenuLinkProps } from "@/app/type/type";

const MenuLink: React.FC<MenuLinkProps> = ({ label, onClick }) => {
     return (
          <div className="px-5 py-5 cursor-pointer hover:bg-gray-100 transition" onClick={onClick}>
               {label}
          </div>
     )
}
export default MenuLink;