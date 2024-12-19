"use client";
import { useEffect, useState } from "react";
import { PropertyListItem } from "@/app/components/import";
import { PropertyListProps, PropertyType } from "@/app/type/type";
import apiService from "@/app/services/apiService";



const PropertyList: React.FC<PropertyListProps> = ({ landlord_id }) => {
     const [properties, setProperties] = useState<PropertyType[]>([])

     const markFavorite = (id: string, is_favorite: boolean) => {
          const tmpProperties = properties.map((property: PropertyType) => {
               if (property.id == id) {
                    property.is_favorite = is_favorite
                    if (is_favorite) {
                         console.log('added to list of favorited propreties')
                    } else {
                         console.log('removed from list')
                    }
               }
               return property;
          })

          setProperties(tmpProperties);
     }

     const getProperties = async () => {
          let url = "api/properties-list/"
          if (landlord_id) {
               url += `?landlord_id=${landlord_id}`
          }
          const tmpProperties = await apiService.get(url);
          setProperties(tmpProperties.data.map((property: PropertyType) => {
               if (tmpProperties.favorites.includes(property.id)) {
                    property.is_favorite = true
               } else {
                    property.is_favorite = false
               }

               return property
          }));

     }
     useEffect(() => {
          getProperties();
     }, []);
     return (
          <>
               {properties.map((property) => {
                    return (
                         <PropertyListItem key={property.id} property={property} markFavorite={(is_favorite: any) => markFavorite(property.id, is_favorite)}
                         />

                    )
               })}
          </>
     )
}
export default PropertyList;