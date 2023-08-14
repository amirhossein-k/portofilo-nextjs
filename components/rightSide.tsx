import {siteConfig} from "@/config/site-config";
import React from "react";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import MentroshipBox from "./grid-items/mentroship";
import Equipments_Box from "./equipments_box";

const RightSide = () => {
  return (
    <div className="flex-1 md:h-full">
      {/* grid container*/}
      <div className="w-full h-full xl:overflow-y-auto p-6 grid gird-cols-2 md:grid-cols-4 auto-rows-[70px] gap-10">
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
  );
};

export default RightSide;
