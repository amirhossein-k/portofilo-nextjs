"use client";
import {GridItemInterface, siteConfig} from "@/config/site-config";
import React, {useEffect} from "react";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import MentroshipBox from "./grid-items/mentroship";
import Equipments_Box from "./equipments_box";
import {stagger, useAnimate} from "framer-motion";
import {GetRepo} from "@/types";
import GetGithubRep from "@/app/actions/getGithubRep";
import {useState} from "react";
const staggerDelay = stagger(0.02);
import {Repo} from "@/types";

const RightSide = ({item}: {item: GridItemInterface[]}) => {
  const [scope, animate] = useAnimate();
  console.log("right");
  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          duration: 0.15,
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerDelay,
        }
      );
    }
  }, []);
  return (
    <div className="flex-1 md:h-full">
      {/* grid container*/}
      <div
        ref={scope}
        className="w-full md:h-full xl:overflow-y-auto p-6 grid gird-cols-2  md:grid-cols-4 auto-rows-[70px] gap-10 "
      >
        {/* grid items */}

        {item.map((item, index) => {
          return (
            <GridItem key={item.title + index} size={item.layout}>
              {item.type === "social" ? (
                <SocialBox item={item} />
              ) : item.type === "equipment" ? (
                <Equipments_Box item={item} />
              ) : item.type === "mentor" ? (
                <MentroshipBox item={item} />
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
