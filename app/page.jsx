"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "flowbite-react";

import Question from "@/public/assets/images/home/question.svg";
import ArrowUp from "@/public/assets/icons/layout/arrow-up.svg";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primaryLighter section">
        <div className="container flex flex-col gap-[10rem] md:flex-row lg:gap-[5rem]">
          <div className="text-center md:text-left md:w-full">
          <br/><br/><br/><br/>
            <h1 className="heading-primary text-[4.2rem] mb-[3.2rem] leading-tight">
              Find Your Peace at Work: Nurturing Minds, Enhancing Productivity
            </h1>
            <br/><br/>
            <p className="hero-description">
              Fostering Mental Health and Well-being with CalmSpace. Delve into
              the critical connection between mental wellness and professional
              efficiency through our thoughtful exploration of contemporary
              workplace dynamics.
            </p>
            <br/><br/>
          </div>

          <div class="self-center md:w-full">
            <Image
              src="/assets/images/home/hero.svg"
              width={450}
              height={450}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem]">
        <div className="container">
          <h2 className="text-[24px] text-center font-semibold mb-20 md:mb-28">
            Our Clients
          </h2>

          <div className="flex justify-around gap-6 md:gap-12">
            <img
              src="/assets/images/home/techcrunch.webp"
              alt="Sedoxo logo"
              className="logo h-[3rem] lg:h-[5rem] "
              loading="lazy"
            />
            <img
              src="/assets/images/home/business-insider.webp"
              alt="TAQA logo"
              className="logo h-[3rem] lg:h-[5rem] "
              loading="lazy"
            />
            <img
              src="/assets/images/home/usa-today.webp"
              alt="JTI logo"
              className="logo h-[3rem] lg:h-[5rem] "
              loading="lazy"
            />
            <img
              src="/assets/images/home/forbes.webp"
              alt="Zalar logo"
              className="logo h-[3rem] lg:h-[5rem] "
              loading="lazy"
            />
            <img
              src="/assets/images/home/the-new-york-times.webp"
              alt="JESA logo"
              className="logo h-[3rem] lg:h-[5rem] "
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-[9.6rem] " id="pricing">
        <div className="max-w-[120rem] py-[3rem] lg:py-0 mx-auto px-[2rem] xl:px-0  ">
          <span className="subheading">PRICING</span>
          <h2 className="heading-secondary">
            Start Your Journey With Us Today
          </h2>
        </div>

        <div className="max-w-[120rem] mx-auto px-[2rem] xl:px-0 grid sm:grid-cols-2 md:grid-cols-3 md:gap-[2.4rem] gap-[4.8rem]">
          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              <p className="plan-name">CalmSpaceSession</p>
              <p className="plan-price">
                <span>$</span>60
              </p>
              <p className="plan-text mb-6">Every Week</p>

              <div className="space-y-4">
                <p className="plan-text">1 Session</p>
                <p className="plan-text">Valid until cancelled</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Get Started
              </a>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              <p className="plan-name">CalmSpaceWorkshop</p>
              <p className="plan-price">
                <span>$</span>2000
              </p>
              <p className="plan-text mb-6">Every Week</p>

              <div className="space-y-4">
                <p className="plan-text">Workshop/20 employees pack</p>
                <p className="plan-text">Valid until cancelled</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Get Started
              </a>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--starter md:w-full">
            <div className="plan-header">
              <p className="plan-name">CalmSpaceCare</p>
              <p className="plan-price">
                <span>$</span>2000
              </p>
              <p className="plan-text mb-6">Every Week</p>

              <div className="space-y-4">
                <p className="plan-text">Survey & Well-being</p>
                <p className="plan-text">Valid until cancelled</p>
              </div>
            </div>

            <div className="plan-sign-up">
              <a href="#" className="btn btn--primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
