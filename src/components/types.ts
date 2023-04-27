import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: ReactNode;
} & ButtonTypes;

export type SKillProps = {
  value: string;
} & ButtonProps;

export type NetworkingProps = {
  float?: boolean;
};

export type SectionContainerProps = {
  children: ReactNode;
};

export type MenuProps = {
  className?: string;
};

export type TitleProps = {
  name: string;
};
