import React from "react";
import Image from "next/image";
const Loader = () => {
  return (
    <div className="loader text-black bg-black">
      <Image
        alt="loader"
        width={32}
        height={32}
        className="animate-spin"
        src="/assets/icons/loader.svg"
      />
      Loading...
    </div>
  );
};

export default Loader;
