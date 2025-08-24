"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout299() {
  return (
    <section id="relume" className="bg-emerald-800 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <h2 className="text-center text-4xl leading-[1.2] font-bold text-white md:text-5xl lg:text-6xl">
              Long heading is what you see here in this feature section
            </h2>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full text-center">
              <div className="rb-5 mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-white md:mb-4 md:text-2xl">
                Medium length section heading goes here
              </h3>
              <p className="text-center text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="mt-6 flex justify-center md:mt-8">
                <Button
                  variant="link"
                  className="text-white hover:text-gray-200"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Explore
                </Button>
              </div>
            </div>
            <div className="w-full text-center">
              <div className="rb-5 mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-white md:mb-4 md:text-2xl">
                Medium length section heading goes here
              </h3>
              <p className="text-center text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="mt-6 flex justify-center md:mt-8">
                <Button
                  variant="link"
                  className="text-white hover:text-gray-200"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Contact
                </Button>
              </div>
            </div>
            <div className="w-full text-center">
              <div className="rb-5 mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-white md:mb-4 md:text-2xl">
                Medium length section heading goes here
              </h3>
              <p className="text-center text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="mt-6 flex justify-center md:mt-8">
                <Button
                  variant="link"
                  className="text-white hover:text-gray-200"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Button
                </Button>
              </div>
            </div>
            <div className="w-full text-center">
              <div className="rb-5 mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-white md:mb-4 md:text-2xl">
                Medium length section heading goes here
              </h3>
              <p className="text-center text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="mt-6 flex justify-center md:mt-8">
                <Button
                  variant="link"
                  className="text-white hover:text-gray-200"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
