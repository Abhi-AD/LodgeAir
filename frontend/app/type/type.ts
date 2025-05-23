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
  is_favorite: boolean;
};

export interface PropertyListProps {
  landlord_id?: string | null;
  favorites?: boolean | null;
}
export type PropertyProps = {
  property: PropertyType;
  markFavorite?: (is_favorite: boolean) => void;
};
export interface FavoriteButtonProps {
  id: string;
  is_favorite: boolean;
  markFavorite: (is_favorite: boolean) => void;
}

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

// chat conversitions
export type UserType = {
  id: string;
  name: string;
  avatar_url: string;
};

export type ConversationType = {
  id: string;
  users: UserType[];
};

export interface ConversationProps {
  conversation: ConversationType;
  userId: string;
}

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;
  sent_to: UserType;
  created_by: UserType;
};

export interface ConversationDetailProps {
  token: string;
  userId: string;
  conversation: ConversationType;
  messages: MessageType[];
}

// filters

export type SearchQuery = {
  country: string | undefined;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  guests: Number;
  bathrooms: Number;
  bedrooms: Number;
  category: string;
};

export interface SearchModalStore {
  isOpen: boolean;
  step: string;
  open: (step: string) => void;
  close: () => void;
  query: SearchQuery;
  setQuery: (query: SearchQuery) => void;
}
