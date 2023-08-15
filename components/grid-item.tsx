import {cn} from "@/utils/cn";
import {cva, type VariantProps} from "class-variance-authority";
import {motion} from "framer-motion";
import {css} from "glamor";
const variants = cva(
  " rounded-3xl   bg-white dark:bg-neutral-900 flex flex-col justify-center   @container",
  {
    variants: {
      size: {
        "1x1": "col-span-2 row-span-1 p-8 ",
        "1x2":
          "col-span-2  row-span-2 p-8 dark:hover:bg-[#252a32]  dark:hover:shadow-[inset rgba(50, 50, 93, 0.55) 0px 2px 14px 0px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px]",
        "2x1": "col-span-2  row-span-1 px-8 py-4  dark:hover:bg-[#252a32]",
        "2x2": "col-span-1  row-span-2 p-8",
        "2x4": "col-span-2  row-span-4 relative overflow-hidden ",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

type GridItemProps = {children: React.ReactNode} & VariantProps<
  typeof variants
>;

const GridItem = ({size, children}: GridItemProps) => {
  let rule = css({
    // backgroundColor: ,
    ":hover": {
      // backgroundColor: "red",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    },
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.8,
      }}
      className={cn(variants({size, className: `bg-slate-100 ${rule}`}))}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
