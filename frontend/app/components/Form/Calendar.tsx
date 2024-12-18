'use client';

import { DatePickerProps } from '@/app/type/type';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const DatePicker: React.FC<DatePickerProps> = ({
     value,
     onChange,
     bookedDates
}) => {
     return (
          <DateRange
               className='w-full border border-gray-400 rounded-xl mb-4'
               rangeColors={['#786565']}
               ranges={[value]}
               date={new Date()}
               onChange={onChange}
               direction='vertical'
               showDateDisplay={false}
               minDate={new Date()}
               disabledDates={bookedDates}
          />
     )
}

export default DatePicker; 