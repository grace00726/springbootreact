import React from "react";
import Bun from "./Bun";

const BanScore = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i, idx) => (
        <div>
          <Bun no={i} key={idx} />
        </div>
      ))}
    </div>
  );
};

export default BanScore;
