"use client";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState<number[]>([]);
  const [visibleItemCount, setVisibleItemCount] = useState(0);

  const generate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const item = Object.fromEntries(new FormData(e.currentTarget).entries());
    setItems([...items, parseInt(item.length as string ?? "0")]);
  };

  const showSequenceItem = (itemIndex: number) => itemIndex < visibleItemCount;

  useEffect(() => {
    setVisibleItemCount(items.length);
  }, [items]);

  return (
    <>
      <h1 className="text-4xl text-center">Fibonacci Generator</h1>
      <main className="flex flex-col items-stretch gap-8">
        <figure className="border border-slate-700 rounded p-8 flex flex-row flex-wrap gap-4">
          {items.length > 0
            ? items.map(
              (value, i) => (
                <Transition
                  key={i}
                  show={showSequenceItem(i)}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="flex-none border border-sky-300 rounded-sm w-16 h-16 bg-sky-600 flex justify-center items-center"
                >
                  <span>{value}</span>
                </Transition>
              ),
            )
            : (
              <span className="flex-1 text-white text-opacity-50 h-16 flex justify-center items-center">
                Generate a sequence first...
              </span>
            )}
        </figure>
        <form
          className="border border-slate-700 rounded p-8 flex flex-col gap-4"
          onSubmit={generate}
        >
          <label className="flex flex-col gap-1">
            <span className="text-xs">Sequence length:</span>
            <input
              className="border border-slate-800 rounded-md p-2 bg-slate-50 text-slate-900"
              name="length"
              type="number"
            />
          </label>
          <button className="border border-green-500 rounded p-2 bg-green-800 hover:bg-green-700 active:bg-green-600">
            Generate
          </button>
        </form>
      </main>
    </>
  );
}
