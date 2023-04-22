import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: ReactNode;
} & ButtonTypes;

export type SKillProps = {
  value: string;
} & ButtonProps;

export type SectionContainerProps = {
  children: ReactNode;
};

export type MenuProps = {
  className?: string;
};
