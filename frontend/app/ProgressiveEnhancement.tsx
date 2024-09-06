"use client";

import { ReactNode, useEffect, useState } from "react";

export type Props = {
  fallback: ReactNode;
  children: ReactNode;
};

export default function ProgressiveEnhancement({ fallback, children }: Props) {
  const [jsEnabled, setJsEnabled] = useState(false);
  useEffect(() => setJsEnabled(true), []);
  return (
    <>
      {!jsEnabled && fallback}
      {jsEnabled && children}
    </>
  );
}
