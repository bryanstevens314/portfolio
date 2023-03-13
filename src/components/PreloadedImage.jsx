import React, { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import loading from "../../dist/assets/lottie/loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function PreloadedImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  if (!loaded)
    return (
      <div className={className}>
        <Lottie options={defaultOptions} />
      </div>
    );
  return <img className={className} src={src} alt={alt} />;
}
