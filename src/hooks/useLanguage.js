import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { persistState, getPersistedState } from "../utils";

const languageAtom = atom(getPersistedState("en") ?? 0);
export const useLanguage = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  useEffect(() => persistState("language", language), [language]);
  return {
    language,
    setLanguage,
  };
};
