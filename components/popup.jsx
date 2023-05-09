import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Popup = ({
  isOpen,
  children,
  handleToogle,
  titlePopup,
  smWidth,
  height,
  headerColor,
  width,
  borderbottom,
  icon,
  marginTop,
  padding,
  center
}) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className={`sm:w-[${smWidth}]  h-[${height}] fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[9999999999] rounded-md bg-white shadow-md m-auto main text-${center} `}
          >
            {icon ? (
              <div
                className={`flex justify-between items-center font-bold py-[20px] px-3 text-[17px]  content `}
              >
                <h1>{titlePopup}</h1>
                <AiOutlineCloseCircle
                  onClick={handleToogle}
                  className="cursor-pointer text-[20px]"
                />
              </div>
            ) : (
              <h1 className="flex justify-center mt-[10px] mb-[5px] font-[600] text-[20px] text-center ">
                {titlePopup}
              </h1>
            )}

            <div className={`mt-[${marginTop}] `}>{children}</div>
          </div>
          <div className="overlay" onClick={handleToogle}></div>
          <style>
            {`  
            body {
              overflow : hidden
            }
            .overlay{
                position : fixed;
                top :0;
                left : 0;
                height : 100%;
                width : 100%;
                background-color : rgba(0,0,0,0.3);
                z-index: 998;
            }
            h1 {
              color:${headerColor}
            }
            .content {
              border-bottom:${borderbottom}
            }
            .main {
              padding:${padding}
            }
          `}
          </style>
        </>
      )}
    </>
  );
};

export default Popup;
