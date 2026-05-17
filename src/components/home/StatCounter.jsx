import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

const StatCounter = ({ targetValue }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(targetValue.replace(/[^0-9]/g, ""));
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetValue]);

  const suffix = targetValue.replace(/[0-9]/g, "");

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default StatCounter;
