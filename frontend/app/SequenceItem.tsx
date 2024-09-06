import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

export type Props = {
  index: number;
  value: bigint;
};

export default function SequenceItem({ index, value }: Props) {
  const textSize = getTextSizeForValue(value);
  return (
    <div className="relative flex-none border border-sky-300 rounded-sm p-4 w-64 h-64 bg-sky-600 flex justify-center items-center overflow-clip">
      <span className="absolute left-2 top-2 rounded-full p-2 bg-sky-800 text-xs">
        #{index + 1}
      </span>
      <span className={`break-all ${textSize}`}>{value.toString()}</span>
    </div>
  );
}

const STOP_SMALL =
  500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n;

const STOP_XSMALL =
  100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n;

function getTextSizeForValue(value: bigint) {
  if (value > STOP_XSMALL) {
    return "text-xs";
  }
  if (value > STOP_SMALL) {
    return "text-sm";
  }
  return "text-base";
}
