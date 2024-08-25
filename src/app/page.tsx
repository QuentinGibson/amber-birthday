"use client";
import { M_PLUS_1 } from "next/font/google";
import clsx from "clsx";

const mplus = M_PLUS_1({ subsets: ["latin"], weight: "900" });

export default function HomePage() {
  return (
    <main className="">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="fixed bottom-0 left-0 right-0 top-0 -z-10 min-h-full min-w-full object-cover"
      >
        <source src="./clipchamp.mp4" type="video/mp4" />
      </video>
      <div className="flex h-screen flex-col items-center justify-center gap-16">
        <div
          className={clsx([
            "flex flex-col gap-12 text-center text-6xl font-extrabold uppercase text-white sm:text-7xl md:text-9xl",
            mplus.className,
          ])}
        >
          <h1>Happy Birthday!</h1>
          <h2>Amber!</h2>
        </div>
      </div>
    </main>
  );
}
