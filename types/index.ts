import { MouseEventHandler } from "react";

export interface CarProps {
  title: string;
  img: string;
  img2: string;
  img3: string;
  perday: number;
  mpg: number;
  drivetrain: string;
}

export interface FilterProps {
  title: string;
  img: string;
  img2: string;
  img3: string;
  perday: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
