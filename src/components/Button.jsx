import React from "react";
import { useState } from "react";

export default function Button() {
  let [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button
        className="py-8 px-10 bg-yellow-400 text-yellow-950"
        onClick={incrementCount}
      >
        Tambah +1
      </button>
    </div>
  );
}
