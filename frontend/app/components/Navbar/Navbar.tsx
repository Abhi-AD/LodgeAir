import Image from "next/image";
import Link from "next/link";
import { AddPropteryButton, SearchFilter, UserNav } from "../import";

const Navbar = () => {
     return (
          <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10 ">
               <div className="max-w-[1500px] mx-auto px-6">
                    <div className="flex justify-between items-center">
                         <Link href="/">
                              <Image src="/logo.png" alt="LodgeAir Logo" width={180} height={120} />
                         </Link>
                         <div className="flex space-x-6">
                              <SearchFilter />
                         </div>
                         <div className="flex items-center space-x-6">
                              <AddPropteryButton />
                              <UserNav />
                         </div>
                    </div>
               </div>
          </nav>
     )
}
export default Navbar;