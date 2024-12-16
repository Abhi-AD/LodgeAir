"use client"
import { useCountries } from '@/app/hooks/import';
import { SelectCountryProps, SelectCountryValue } from '@/app/type/type';
import Select from 'react-select';

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
     const { getAll } = useCountries();
     return (
          <>
               <Select
                    isClearable
                    placeholder="Anywhere"
                    options={getAll()}
                    value={value}
                    onChange={(value) => onChange(value as SelectCountryValue)}
               />
          </>
     )
}
export default SelectCountry;