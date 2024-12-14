"use client";
import { useEffect, useState } from "react";
import { PropertyListItem } from "@/app/components/import";
import { PropertyType } from "@/app/type/type";
import apiService from "@/app/services/apiService";

const PropertyList = () => {
     const [properties, setProperties] = useState<PropertyType[]>([])
     const getProperties = async () => {
          const tmpProperties = await apiService.get("api/properties-list/");
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