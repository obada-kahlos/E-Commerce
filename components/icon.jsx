import React from "react";
const Icon = ({
  className,
  icon,
  borderRadius,
  border,
  color,
  margin,
  padding,
  bg,
  width,
  height,
  size,
  bgHover,
  colorHover
}) => {
  return (
    <>
      <span className={className}> {icon} </span>

      <style>
        {` span.${className}{
            color:${color};
            border-radius:${borderRadius};
            border:${border};
            margin:${margin};
            padding:${padding};
            background-color:${bg};
            width:${width};
            height:${height};
            font-size:${size};
            display:flex;
            justify-content:center;
            align-items:center;     
            transition:0.3s;       
            cursor:pointer;
            
        }
        span.${className}:hover {
          color:${colorHover};
          background-color:${bgHover}

        }
         `}
      </style>
    </>
  );
};

export default Icon;
