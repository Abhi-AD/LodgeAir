import { Range, RangeKeyDict } from "react-date-range";
export interface DatePickerProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  bookedDates?: Date[];
}

export type Property = {
  id: string;
  guests: number;
  price_per_day: number;
};

export interface ReservationSidebarProps {
  userId: string | null;
  property: Property;
}

export interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}
export interface MenuLinkProps {
  label: string;
  onClick: () => void;
}

export interface ModalProps {
  label: string;
  content: React.ReactElement;
  isOpen: boolean;
  close: () => void;
}

export interface LoginModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export interface AddPropertyModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export interface AddPropertyButtonProps {
  userId?: string | null;
}

export interface SignUpModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_day: number;
};

export interface PropertyListProps {
  landlord_id?: string | null;
}
export type PropertyProps = {
  property: PropertyType;
};

export interface UserNavProps {
  userId?: string | null;
}

export interface CategoryProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

export type SelectCountryValue = {
  label: string;
  value: string;
};

export interface SelectCountryProps {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}
