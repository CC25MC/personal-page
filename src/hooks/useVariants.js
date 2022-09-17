import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";
import { persistState, getPersistedState } from "../utils";
const variantAtom = atom(getPersistedState(["default", "outer"]) ?? []);

export const useVariants = () => {
  const [cursorVariant, setCursorVariant] = useAtom(variantAtom);
  const textEnter = () => setCursorVariant(["hover", "hoverOuter"]);
  const textLeave = () => setCursorVariant(["default", "outer"]);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  useEffect(() => persistState("variant", cursorVariant), [cursorVariant]);
  const variants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
    },
    outer: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
    },
    hover: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#000",
      opacity: 0.3,
      // mixBlendMode: "difference"
    },
    hoverOuter: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      opacity: 0,
    },
  };

  return {
    cursorVariant,
    textEnter,
    textLeave,
    mousePosition,
    setMousePosition,
    variants,
  };
};
