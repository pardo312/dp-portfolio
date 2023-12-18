"use client";
import { redirect } from "next/navigation";
import getUserLocale from "get-user-locale";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let userLocale = getUserLocale().substring(0, 2);
    console.log("User-locale: " + getUserLocale());

    if (userLocale == "es") redirect("/es");
    else redirect("/en");
  }, []);
}
