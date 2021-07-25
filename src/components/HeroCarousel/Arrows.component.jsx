import React from "react";


export const NextArrow = (props) => {
  // console.log(props.style);
  return (
    <>
      <div>
        {/* <GrNext
          
          
        />  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
          className="slick-arrow slick-next"
          style={{ ...props.style }}
          onClick={props.onClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={6}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
          className="slick-arrow slick-prev"
          style={{ ...props.style }}
          onClick={props.onClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={6}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      
      
      </div>
    </>
  );
};
