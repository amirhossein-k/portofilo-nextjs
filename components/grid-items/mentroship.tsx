import {GridItemInterface} from "@/config/site-config";
import Icon from "../icon";
import Link from "next/link";
import {GetRepo} from "@/types";

const MentroshipBox = ({item}: {item: GridItemInterface}) => {
  console.log("mentor");
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-full @lg:text-lg font-semibold line-clamp-1">
        {item.title}
      </div>
      {/* Price & Promo Container */}
      <div className="">
        {/* Top Container */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-neutral-500">{item.buttonTitle}</div>
          {/* <div className="flex items-center gap-1">
            
            <div className="text-xs line-through text-neutral-500">
              {item.oldPrice}
            </div>
            <div>{item.price}</div>
          </div> */}
        </div>
        {/* Bottom Container */}
        <div className="font-bold text-primary @lg:text-base text-sm">
          {item.promotion}
        </div>
      </div>
    </Link>
  );
};

export default MentroshipBox;
