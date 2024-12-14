'use client';

import { useRouter } from "next/navigation";
import { MenuLink } from "@/app/components/import";
import { resetAuthCookies } from "@/app/lib/actions";

const LogoutButton: React.FC = () => {
     const router = useRouter();
     const submitLogout = async () => {
          resetAuthCookies();
          router.push('/');
     }
     return (
          <MenuLink label="Log out" onClick={submitLogout} />
     )
}
export default LogoutButton;