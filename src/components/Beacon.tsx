"use client";

import { useEffect } from "react";

export function Beacon() {
  useEffect(() => {
    fetch("https://jpg.danipardo.co/api/beacon?src=portfolio").catch(() => {});
  }, []);
  return null;
}
