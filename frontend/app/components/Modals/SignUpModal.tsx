"use client"
import { CustomButton, Modal } from "@/app/components/import"
import { useSignUpModal } from "@/app/hooks/import"
import { handleLogin } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
import { useState } from "react";
const SignUpModal = () => {
     const router = useRouter();
     const signupModal = useSignUpModal();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [errors, setErrors] = useState<string[]>([]);

     const submitSignup = async () => {
          const formData = {
               email: email,
               password1: password,
               password2: confirmPassword,
          }
          const response = await apiService.post('api/auth/register/', JSON.stringify(formData))
          if (response.access) {
               handleLogin(response.user.pk, response.access, response.refresh);
               signupModal.close();
               router.push('/');
          }
          else {
               const errors: string[] = Object.values(response).map((error: any) => {
                    return error;
               })
               setErrors(errors);
          }
     }

     const content = (
          <>
               <form action={submitSignup} className="space-y-4">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your e-mail address..." className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password..." className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Your Confirm password..." className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                    {errors.map((error, index) => {
                         return (
                              <div key={`error_${index}`} className="p-5 bg-red-600 text-white rounded-xl opacity-80">
                                   {error}
                              </div>

                         )
                    })}
                    <CustomButton label="Submit" onClick={submitSignup} />
               </form>
          </>
     )
     return (
          <Modal
               isOpen={signupModal.isOpen}
               close={signupModal.close}
               label="Sign Up"
               content={content}
          />
     )
}
export default SignUpModal;