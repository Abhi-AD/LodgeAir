"use client";
import { useEffect, useState } from "react";
import { PropertyListItem } from "@/app/components/import";
import { PropertyListProps, PropertyType } from "@/app/type/type";
import apiService from "@/app/services/apiService";



const PropertyList: React.FC<PropertyListProps> = ({ landlord_id }) => {
     const [properties, setProperties] = useState<PropertyType[]>([])
     const getProperties = async () => {
          let url = "api/properties-list/"
          if (landlord_id) {
               url += `?landlord_id=${landlord_id}`
          }
          const tmpProperties = await apiService.get(url);
          setProperties(tmpProperties.data);

     }
     useEffect(() => {
          getProperties();
     }, []);
     return (
          <>
               {properties.map((property) => {
                    return (
                         <PropertyListItem key={property.id} property={property} />

                    )
               })}
          </>
     )
}
export default PropertyList;