"use client";
import { createContext, useState } from "react";
import { LocaleEnum } from "./LocaleEnum";

interface LocaleContext {
  locale: LocaleEnum;
  setLocale: (formData: LocaleEnum) => void;
}

let LocaleDataContext = createContext<LocaleContext>({
  locale: LocaleEnum.ES,
  setLocale: (locale: LocaleEnum) => {},
});

export function ContextLocaleProvider({
  desiredLocale,
  children,
}: {
  desiredLocale: LocaleEnum;
  children: any;
}) {
  const [locale, setLocale] = useState<LocaleEnum>(desiredLocale);

  return (
    <LocaleDataContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleDataContext.Provider>
  );
}

export { LocaleDataContext };
