import { useEffect, useState, useRef } from "react";
import pageBg from "../assets/page-bg.png";

/**
 * PageBanner
 * Props:
 *  - title {string}  — The heading text to type-animate (e.g. "Contact")
 *  - alt   {string}  — Alt text for the background image (optional)
 */
export default function PageBanner({ title = "", alt = "Page Header" }) {
  const [typedText, setTypedText] = useState("");
  const typingRef = useRef(null);

  useEffect(() => {
    const fullText = title;
    let index = 0;
    let deleting = false;
    let paused = false;

    const tick = () => {
      if (paused) {
        paused = false;
        typingRef.current = setTimeout(tick, 1200);
        return;
      }
      if (!deleting) {
        index++;
        setTypedText(fullText.slice(0, index));
        if (index === fullText.length) {
          paused = true;
          deleting = true;
          typingRef.current = setTimeout(tick, 1200);
          return;
        }
        typingRef.current = setTimeout(tick, 130);
      } else {
        index--;
        setTypedText(fullText.slice(0, index));
        if (index === 0) {
          deleting = false;
          typingRef.current = setTimeout(tick, 500);
          return;
        }
        typingRef.current = setTimeout(tick, 75);
      }
    };

    // Reset when title changes
    setTypedText("");
    index = 0;
    deleting = false;
    paused = false;
    typingRef.current = setTimeout(tick, 600);

    return () => clearTimeout(typingRef.current);
  }, [title]);

  return (
    <div className="relative h-[200px] md:h-[350px] overflow-hidden group">
      <img
        src={pageBg}
        alt={alt}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-1 w-20 bg-[#005dad] mx-auto" />
          <h2 className="text-white/30 text-6xl md:text-8xl font-black uppercase tracking-widest select-none">
            {typedText}
            <span className="inline-block w-[4px] h-[0.85em] bg-[#005dad] ml-1 align-middle animate-pulse" />
          </h2>
        </div>
      </div>
    </div>
  );
}
