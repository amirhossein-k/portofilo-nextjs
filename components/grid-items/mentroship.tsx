import {GridItemInterface} from "@/config/site-config";
import Icon from "../icon";
import Link from "next/link";
import {GetRepo} from "@/types";

const MentroshipBox = ({item}: {item: GridItemInterface}) => {
  console.log("mentor");
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4 group"
    >
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className=" h-full w-full flex ">
        <div className="w-[50%] flex justify-center items-center text-xs @lg:text-md font-semibold line-clamp-2">
          {item.title}
        </div>
        {/* button */}
        <div className=" w-[100%] flex flex-col group/edit">
          {/* github */}
          <div
            className={`${
              item.site && !item.site.includes("backend")
                ? "group-hover/edit:bg-transparent group-hover/edit:hidden"
                : ""
            }  bg-yellow-300  group-hover:bg-red-300 text-base font-semibold p-1 text-center w-full h-fit rounded`}
          >
            <Link href={item.buttonLink ?? ""}>Github</Link>
          </div>
          {/* demo */}
          {item.site && !item.site.includes("backend") && (
            <div className="group-hover:bg-yellow-300 group-hover/edit:bg-red-300  group-hover:text-sky-600 hover:bg-white  group-hover:bg-transparent   text-sky-600 font-semibold p-1 text-center w-full h-fit rounded">
              <Link href={item.site ?? ""}>Live Demo</Link>
            </div>
          )}
        </div>
      </div>
      {/* Price & Promo Container */}
      <div className="w-[10%] h-full flex flex-col justify-center items-center text-xs text-neutral-500">
        {/* Top Container */}

        {/* <div className="text-xs text-neutral-500"> */}
        {item.topics?.map((item) => {
          switch (item) {
            case "nodeploy":
              return "";
            default:
              return <span>{item}</span>;
          }
        })}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default MentroshipBox;
