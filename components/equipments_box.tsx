import {GridItemInterface} from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Equipments_Box = ({item}: {item: GridItemInterface}) => {
  return (
    <div
      className="flex flex-col items-end jusify-end w-full h-full rounded-3xl overflow-hidden"
      key={item.title}
    >
      {/* overlay */}
      <div className="absolute h-full flex items-end">
        {/* Background image */}
        <Image
          className="object-cover object-center"
          fill
          src={item.image ?? ""}
          alt=""
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* content container */}
        <div className="relative z-20 p-8">
          {/* title */}
          <div className="text-lg  font-medium text-white mb-3">
            {item.title}
          </div>
          {/* items */}
          <div className="flex flex-wrap items-center gap-3">
            {item.equipments?.map((eq, index) => (
              <span
                key={eq.title + index}
                className="dark:bg-neutral-800 rounded-lg text-sm bg-white px-2 py-1 font-medium"
              >
                {eq.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments_Box;
