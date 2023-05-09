import React from "react";
import { Field } from "formik";
import Icon from "./icon";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({
  name,
  type,
  placeholder,
  color,
  width,
  className,
  margin,
  height,
  padding,
  borderRadius,
  border,
  label,
  iconLable,
  fontSize,
  bg,
  id,
  handleLock,
  lock,
}) => {
  return (
    <>
      <div className="relative">
        <label htmlFor={id}> {label}</label>
        <Field
          className={`${className} relative`}
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
        />
        {name === "password" && (
          <span
            className="absolute top-[55%]  right-[10px] cursor-pointer text-[20px]"
            onClick={handleLock}
          >
            {lock ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        )}
      </div>
      <style>
        {`
            input.${className} {
                position:relative;
                padding:  ${padding};
                font-size: ${fontSize};
                border: ${border};
                background-color: ${bg};
                color: ${color};
                width:${width};
                height:${height};
                border-radius: ${borderRadius};
                margin: ${margin};
            }
            input.${className}:focus {
              outline:none
            }
        `}
      </style>
    </>
  );
};

export default Input;
