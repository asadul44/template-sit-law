import React, { FC } from "react";

type Props = {
  value: number;
};

const CustomRating: FC<Props> = ({ value }) => {
  const yellowStars = Math.floor(value); // Number of yellow stars
  const grayStars = 5 - yellowStars; // Number of gray stars

  return (
    <div className="text-2xl">
      {/* Yellow stars */}
      {[...Array(yellowStars)].map((_, index) => (
        <span key={index} className="text-sandybrown mx-2">
          &#9733;
        </span>
      ))}

      {/* Gray stars */}
      {[...Array(grayStars)].map((_, index) => (
        <span key={index} className="text-gray-500 mx-2">
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default CustomRating;
