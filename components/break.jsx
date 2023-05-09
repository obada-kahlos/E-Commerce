import React from "react";
const Divider = ({
  className,
  width,
  bg,
  color,
  height,
  wAfter,
  hAfter,
  tAfter,
  lAfter,
  borderRadius,
  margin,
  bgAfter,
  borderAfter
}) => {
  return (
    <>
      <div className={className}></div>
      <style>
        {` div.${className} {
                width:${width};
                background-color:${bg};
                height:${height};
                position:relative;
                margin:${margin};
            }
            div.${className}::after {
                position:absolute;
                content:"OR";
                top:${tAfter};
                left:${lAfter};
                width:${wAfter};
                height:${hAfter};
                border-radius:${borderRadius};
                color:${color};
                background-color:${bgAfter};
                border:${borderAfter};
                display:flex;
                justify-content:center;
                align-items:center;
                transform: translateX(-50%);
            }
            `}
      </style>
    </>
  );
};

export default Divider;
