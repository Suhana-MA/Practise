export interface Country {
  country_id: string;
  name: string;
  url: string;
}

export interface DropdownItem {
  id: number;
  name: string;
  url: string;
}

export interface NavigationItem {
  id: number;
  name: string;
  url: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}


export interface FooterLink {
  id: number;
  name: string;
  url: string;
}

export interface AppDownload {
  id: number;
  url: string;
  icon: string;
  alt: string;
  supTitle: string;
  title: string;
}

export interface City {
  id: number;
  name: string;
  url: string;
  img: string;
  alt: string;
}


export interface Country {
  country_id: string;
  name: string;
  url: string;
}