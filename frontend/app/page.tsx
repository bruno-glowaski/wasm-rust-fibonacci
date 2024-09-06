"use client";

import FibonacciGenerator from "./FibonacciGenerator";
import ProgressiveEnhancement from "./ProgressiveEnhancement";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center">Fibonacci Generator</h1>
      <ProgressiveEnhancement
        fallback={
          <main className="border border-slate-700 rounded p-8 flex justify-center">
            <p className="text-red-300">
              This site requires JavaScript to work. Please, re-enable
              JavaScript for this site and{" "}
              <a className="text-cyan-500 underline" href=".">
                refresh this page
              </a>.
            </p>
          </main>
        }
      >
        <FibonacciGenerator />
      </ProgressiveEnhancement>
    </>
  );
}
