import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

export type Props = {
  value: number;
};

export default function SequenceItem({ value }: Props) {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="flex-none border border-sky-300 rounded-sm w-64 h-64 bg-sky-600 flex justify-center items-center"
    >
      <span>{value}</span>
    </Transition>
  );
}
