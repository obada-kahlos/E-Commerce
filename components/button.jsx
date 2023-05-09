import Link from "next/link";
import React from "react";

const Button = ({
  text,
  className,
  color,
  bg,
  align,
  padding,
  margin,
  border,
  borderRadius,
  hoverBg,
  hoverText,
  type,
  width,
  fontSize,
  fontWeight,
  borderHover,
  onClick,
  dispaly,
  disabled,
}) => {
  return (
    <>
      {/* <Link href={"/products"}>
      </Link> */}

      <button
        className={className}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
      <style>{` button.${className} {
        color:${color};
        background-color:${bg};
        text-align:${align};
        padding:${padding};
        margin:${margin};
        border:${border};
        width:${width};
        border-radius:${borderRadius};
        transition:0.3s;
        font-size:${fontSize};
        font-weight:${fontWeight};
        display:${dispaly};
      }
      button.${className}:hover {
        background-color:${hoverBg};
        color:${hoverText};
        border:${borderHover}
      }
      `}</style>
    </>
  );
};

export default Button;
