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

export type PropertyProps = {
  property: PropertyType;
};
