import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

export type Props = {
  index: number;
  value: number;
};

export default function SequenceItem({ index, value }: Props) {
  return (
    <div className="relative flex-none border border-sky-300 rounded-sm w-64 h-64 bg-sky-600 flex justify-center items-center">
      <span className="absolute left-2 top-2 rounded-full p-2 bg-sky-800 text-xs">
        #{index + 1}
      </span>
      <span>{value}</span>
    </div>
  );
}
