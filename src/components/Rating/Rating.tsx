"use client";

import { useState } from "react";

export default function Rating({ review }: { review: number }) {
  const [rating, setRating] = useState(review);
  const [hover, setHover] = useState(0);

  const getFillColor = (index: number) => {
    if (index <= (hover || rating)) {
      return "#1C1C1C";
    } else {
      return "transparent";
    }
  };

  return (
    <div className="flex gap-1 items-center">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`bg-transparent ${
              index <= (hover || rating) ? "color-black" : "color-red"
            }`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99935 1.6665L12.5743 6.88317L18.3327 7.72484L14.166 11.7832L15.1493 17.5165L9.99935 14.8082L4.84935 17.5165L5.83268 11.7832L1.66602 7.72484L7.42435 6.88317L9.99935 1.6665Z"
                  fill={getFillColor(index)}
                  stroke="#1C1C1C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        );
      })}
      <p className="text-[12px] leading-5 font-light uppercase">40 reviews</p>
    </div>
  );
}
