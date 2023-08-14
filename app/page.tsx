import Equipments_Box from "@/components/equipments_box";
import GridItem from "@/components/grid-item";
import MentroshipBox from "@/components/grid-items/mentroship";
import SocialBox from "@/components/grid-items/social-box";
import {ThemeToggle} from "@/components/theme-toggle";
import {siteConfig} from "@/config/site-config";
import Image from "next/image";
const GridItems = new Array(64).fill(0);

export default function Home() {
  return (
    <main className="flex gap-10 flex-1 w-full h-full ">
      {/* left side */}
      <div className="flex-1 h-full p-8 max-w-md">
        <div className="flex flex-col   rounded-md  h-full space-y-6">
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
          <div className="border-t pt-6 text-sx justify-between  flex items-center border-neutral-200 dark:border-neutral-800">
            <div className="text-neutral-500">All Rights Reserved</div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1 h-full">
        {/* grid container*/}
        <div className="w-full h-full overflow-y-auto p-6 grid grid-cols-4 auto-rows-[76px] gap-10">
          {/* grid items */}
          {siteConfig.items.map((item, index) => {
            return (
              <GridItem key={item.title + index} size={item.layout}>
                {item.type === "social" ? (
                  <SocialBox item={item} />
                ) : item.type === "mentor" ? (
                  <MentroshipBox item={item} />
                ) : item.type === "equipment" ? (
                  <Equipments_Box item={item} />
                ) : (
                  <div className="">Not inp</div>
                )}
              </GridItem>
            );
          })}
        </div>
      </div>
    </main>
  );
}
