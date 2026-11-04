"use client";
import React, { createContext, useContext } from "react";

export const SectionContext = createContext(null);

export function useCurrentSection() {
  return useContext(SectionContext);
}
