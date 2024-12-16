"use client"
import { useAddPropertyModal } from "@/app/hooks/import";
import { Category, CustomButton, Modal, SelectCountry } from "@/app/components/import";
import { ChangeEvent, useState } from "react";
import { SelectCountryValue } from "@/app/type/type";
import Image from "next/image";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

const AddPropertyModal = () => {
     const [currentStep, setCurrentStep] = useState(1);
     const [errors, setErrors] = useState<string[]>([]);
     const [dataCategory, setDataCategory] = useState('');
     const [dataTitle, setDataTitle] = useState('');
     const [dataDescription, setDataDescription] = useState('');
     const [dataPrice, setDataPrice] = useState('');
     const [dataBedRooms, setDataBedRooms] = useState('');
     const [dataBathrooms, setDataBathrooms] = useState('');
     const [dataGuests, setDataGuests] = useState('');
     const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
     const [dataImage, setDataImage] = useState<File | null>(null);
     const addPropertyModal = useAddPropertyModal();
     const router = useRouter();

     const setCategory = (category: string) => {
          setDataCategory(category)
     }

     const setImage = (event: ChangeEvent<HTMLInputElement>) => {
          if (event.target.files && event.target.files.length > 0) {
               const tmpImage = event.target.files[0];
               setDataImage(tmpImage);
          }
     }


     const submitForm = async () => {
          if (dataCategory && dataTitle && dataDescription && dataPrice && dataCountry && dataImage) {
               const formData = new FormData();
               formData.append("category", dataCategory);
               formData.append("title", dataTitle);
               formData.append("description", dataDescription);
               formData.append("price_per_day", dataPrice);
               formData.append("bedrooms", dataBedRooms);
               formData.append("bathrooms", dataBathrooms);
               formData.append("guests", dataGuests);
               formData.append("country", dataCountry.label);
               formData.append("country_code", dataCountry.value);
               formData.append("image", dataImage);
               console.log("submitForm", formData);

               const response = await apiService.posttoken("api/properties/create/", formData);
               if (response.sucess) {
                    console.log("Property added successfully");
                    router.push("/");
                    addPropertyModal.close();
               } else {
                    console.log("Failed to add property");
                    const tmpErrors: string[] = Object.values(response).map((error: any) => {
                         return error;
                    });
                    setErrors(tmpErrors);
               }
          }
     }

     const content = (
          <>
               {currentStep == 1 ? (
                    <>
                         <h2 className="mb-6 text-2xl">Choose category</h2>
                         <Category
                              dataCategory={dataCategory}
                              setCategory={(category) => setCategory(category)}
                         />
                         <CustomButton
                              label="Next"
                              onClick={() => setCurrentStep(2)}
                         />
                    </>
               ) : currentStep == 2 ? (
                    <>
                         <h2 className="mb-6 text-2xl">Choose category</h2>
                         <div className="pt-3 pb-6 space-y-4">
                              <div className="flex flex-col space-y-2">
                                   <label>Title</label>
                                   <input type="text" value={dataTitle} onChange={(e) => setDataTitle(e.target.value)} className="w-full p-4 border border-gray-600 rounded-xl" />
                              </div>
                              <div className="flex flex-col space-y-2">
                                   <label>Description</label>
                                   <textarea value={dataDescription} onChange={(e) => setDataDescription(e.target.value)} className="w-full p-4 border border-gray-600 rounded-xl" rows={5} />
                              </div>
                         </div>
                         <Category
                              dataCategory={dataCategory}
                              setCategory={(category) => setCategory(category)}
                         />
                         <CustomButton
                              label="Previous"
                              className="mb-2 bg-black hover:bg-gray-800"
                              onClick={() => setCurrentStep(1)}
                         />
                         <CustomButton
                              label="Next"
                              onClick={() => setCurrentStep(3)}
                         />
                    </>
               ) : currentStep == 3 ? (
                    <>
                         <h2 className="mb-6 text-2xl">Details</h2>
                         <div className="pt-3 pb-6 space-y-4">
                              <div className="flex flex-col space-y-2">
                                   <label>Price per Day</label>
                                   <input type="number" value={dataPrice} onChange={(e) => setDataPrice(e.target.value)} className="w-full p-4 border border-gray-600 rounded-xl" />
                              </div>
                              <div className="flex flex-col space-y-2">
                                   <label>Bed Rooms</label>
                                   <input type="number" value={dataBedRooms} onChange={(e) => setDataBedRooms(e.target.value)} className="w-full p-4 border border-gray-600 rounded-xl" />
                              </div>
                              <div className="flex flex-col space-y-2">
                                   <label>Bathrooms</label>
                                   <input type="number" value={dataBathrooms} onChange={(e) => setDataBathrooms(e.target.value)} className="w-full p-4 border border-gray-600 rounded-xl" />
                              </div>
                              <div className="flex flex-col space-y-2">
                                   <label>Guests</label>
                                   <input type="number" value={dataGuests} onChange={(e) => setDataGuests(e.target.value)} className="w-full p-4 border border-gray-600 rounded-xl" />
                              </div>
                         </div>
                         <CustomButton
                              label="Previous"
                              className="mb-2 bg-black hover:bg-gray-800"
                              onClick={() => setCurrentStep(2)}
                         />
                         <CustomButton
                              label="Next"
                              onClick={() => setCurrentStep(4)}
                         />
                    </>
               ) : currentStep == 4 ? (
                    <>
                         <h2 className="mb-6 text-2xl">Location</h2>
                         <div className="pt-3 pb-6 space-y-4">
                              <SelectCountry value={dataCountry} onChange={(value) => setDataCountry(value as SelectCountryValue)} />
                         </div>
                         <CustomButton
                              label="Previous"
                              className="mb-2 bg-black hover:bg-gray-800"
                              onClick={() => setCurrentStep(3)}
                         />
                         <CustomButton
                              label="Next"
                              onClick={() => setCurrentStep(5)}
                         />
                    </>
               ) : (
                    <>
                         <h2 className="mb-6 text-2xl">Image</h2>
                         <div className="pt-3 pb-6 space-y-4">
                              <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                                   <input type="file" accept="image/*" onChange={setImage} />
                              </div>
                              {dataImage && (
                                   <div className="w-[200px] h-[150px] relative m">
                                        <Image fill
                                             alt="Upload Image"
                                             src={URL.createObjectURL(dataImage)}
                                             className="w-full h-full object-cover rounded-xl"
                                        />
                                   </div>
                              )}
                         </div>
                         {errors.map((error, index) => {
                              <div key={index} className="p-5 mb-4 bg-red-500 text-white rounded-xl opacity-80">
                                   {error}
                              </div>
                         })}
                         <CustomButton
                              label="Previous"
                              className="mb-2 bg-black hover:bg-gray-800"
                              onClick={() => setCurrentStep(4)}
                         />
                         <CustomButton
                              label="Submit"
                              onClick={submitForm}
                         />

                    </>
               )
               }

          </>
     )
     return (
          <>
               <Modal
                    isOpen={addPropertyModal.isOpen}
                    close={addPropertyModal.close}
                    label="Add property"
                    content={content}
               />
          </>
     )
}
export default AddPropertyModal;