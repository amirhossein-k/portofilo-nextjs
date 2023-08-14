export type GridItemLayout = "1x1" | "1x2" | "2x1" | "2x2" | "2x4"; /// width x height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EquipmentsItem = {
  title: string;
  // link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EquipmentsItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x1",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@amirhossein-k",

    buttonSecondaryText: "36",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/amirhossein-k",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "skills",
    image: "/images/eupment.jpg",
    equipments: [
      {
        title: "Html",
      },
      {
        title: "Css",
      },
      {
        title: "JavaScript",
      },
      {
        title: "TypeScrript",
      },
      {
        title: "React js",
      },
      {
        title: "Next js",
      },
      {
        title: "Sass , Bootstrap , Tailwind ",
      },
    ],
  },
  {
    layout: "1x2",
    type: "social",
    title: "WhatsApp",
    icon: "whatsApp",
    username: "989391470427",
    buttonTitle: "ارتباط در واتس اپ",
    buttonLink: "https://wa.me/989391470427",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
    description: "برای ارتباط به واتس اپ پیام دهید",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Telegram",
    icon: "telegram",
    username: "@amirhossein_kkk",
    buttonTitle: "ارتباط در تلگرام",
    buttonLink: "https://t.me/amirhossein_kkk",
    buttonSecondaryText: "44",
    color: "#5865F2",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "product 1",
    icon: "youtube",
    color: "red",
    // promotion: "MAKRDEVFELLOWS",
    description: "describe product 1",
    buttonTitle: "product one",
    buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
  },
];

export const siteConfig = {
  creator: "Amir Hossein Karimi",
  title: "Develepor",
  bio: "فول استک کار",
  location: "Tehran, Iran",
  location_link:
    "https://www.google.com/maps/place/Tehran,+Tehran+Province,+Iran/@35.706891,50.6882744,9z/data=!3m1!4b1!4m6!3m5!1s0x3f8e00491ff3dcd9:0xf0b3697c567024bc!8m2!3d35.7218583!4d51.3346954!16zL20vMGZ0bHg?entry=ttu",
  email: "haamir3030@gmail.com",
  phone_link: "tel:+989391470427",
  phone: "+989391470427",

  items: GridItems,
} as const;

// const GridItems2 = [
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-2",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-1 row-span-2",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-1 row-span-2",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-4",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-2",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-1",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-1",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-1",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-2",
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-1",
//   },
// ];
