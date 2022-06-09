import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputGlobal {
  register: UseFormRegister<FieldValues>;
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  readonly?: boolean;
  value?: string;
}
