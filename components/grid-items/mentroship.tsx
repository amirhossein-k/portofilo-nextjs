import {GridItemInterface} from "@/config/site-config";
import Icon from "../icon";
import Link from "next/link";

const MentroshipBox = ({item}: {item: GridItemInterface}) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-3"
    >
      {/* icon */}
      {item.icon && <Icon type={item.icon ?? ""} color={item.color} />}
      {/* title */}
      <div className="w-full text-base @md:text-lg  font-semibold">
        {item.title}
      </div>
      {/* container */}
      <div className="">
        {/* top container */}
        <div className="flex items-center justify-betweens">
          <div className="text-xs  text-neutral-500">PROMO</div>
          <div className="flex items-center gap-1">
            <span className="text-xs line-through text-neutral-500">
              {item.color}
            </span>
          </div>
        </div>
        {/* bottom container */}
        <div className="font-bold text-primary @lg:text-base text-sm">
          {item.description}
        </div>
      </div>
    </Link>
  );
};

export default MentroshipBox;
