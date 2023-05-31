import { FC } from "react";

import { IInputProps } from "./input.types";

import './input.scss'

const Input: FC<IInputProps> = ({
  htmlFor,
  error,
  type,
  onChange,
  value,
  classInput,
  classLabel,
  placeholder,
}) => {
  return (
    <div className="input-conteiner">
      <label className={classLabel} htmlFor={htmlFor}>
        {htmlFor}
      </label>
      <input
        type={type}
        className={classInput}
        id={htmlFor}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <small className="input-error">{error}</small>
    </div>
  );
};

export default Input;
