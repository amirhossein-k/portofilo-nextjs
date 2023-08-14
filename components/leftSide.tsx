import {siteConfig} from "@/config/site-config";
import Image from "next/image";
import React from "react";
import Footer from "./footer";

const LeftSide = () => {
  return (
    <div className=" xl:h-full w-full pt-8  xl:p-8  xl:max-w-md">
      <div className="flex flex-col w-full   rounded-md  h-full space-y-6">
        {/* avatar */}

        <Image
          src="/images/avatar.png"
          width={120}
          height={120}
          alt="Avatar"
          priority
          loading="eager"
        />

        <div className="">
          {/* title */}
          <div className="text-primary text-xl font-semibold">
            {siteConfig.title}
          </div>
          {/* full name */}
          <h1 className="text-xl font-bold mt-2 ">{siteConfig.creator}</h1>

          {/* bio */}
          <p className="text-xl text-neutral-500 font-light">
            {siteConfig.bio}
          </p>
        </div>
        {/* buttons */}
        <div className="flex items-center justify-between gap-6">
          <a
            className="flex items-center justify-center gap-2 border border-neutral-200 w-full px-2 py-1 rounded-md dark:border-neutral-800"
            href={siteConfig.location_link}
          >
            <Image
              src={"/images/location-128 (1).ico"}
              alt="telegram"
              width={16}
              height={16}
              className="dark:brightness-100 brightness-0   "
            />
            {siteConfig.location}
          </a>
          <a
            className="flex items-center justify-center border gap-2 border-neutral-200 w-full px-2 py-1 rounded-md dark:border-neutral-800"
            href={siteConfig.phone_link}
          >
            <Image
              src={"/images/phone-62-128.ico"}
              alt="whtasapp"
              width={16}
              height={16}
              className="dark:brightness-100 brightness-0   "
            />
            {siteConfig.phone}
          </a>
        </div>
        {/* footer */}
        <div className="hidden xl:flex ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
