import {GridItemInterface} from "@/config/site-config";
import React from "react";
import Button from "../button";
import Link from "next/link";

const SocialBox = ({item}: {item: GridItemInterface}) => {
  return (
    <Link href={item.buttonLink ?? ""}>
      {/* header */}
      <div className="flex flex-row items-center justify-between">
        {/* icon */}
        <div className="">Icon</div>
        {/* button */}
        {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        )}
      </div>
      {/* content container */}

      <div className="mt-2">
        {/* title */}
        <div className="text-lg font-semibold">{item.title}</div>
        {/* username */}
        <div className="text-sm text-neutral-500">{item.username}</div>
        {/* description */}
        {item.description && (
          <div className="text-sm text-neutral-500 mt-1 line-clamp-2">
            {item.description}
          </div>
        )}
      </div>
      {/* button */}
      {item.layout === "1x2" && (
        <div className="mt-2">
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        </div>
      )}
    </Link>
  );
};

export default SocialBox;
