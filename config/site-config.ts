import GetGithubRep, {GEttaost} from "@/app/actions/getGithubRep";
import {GetRepo, Repo} from "@/types";
import {toast} from "react-toastify";
import {BiSolidError} from "react-icons/bi";
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
  created_at?: string;
  site?: string;
  topics?: [];
}

let GridItems: GridItemInterface[] = [
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@amirhossein-k",

    // buttonSecondaryText: "36",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/amirhossein-k",
    color: "#070707",
  },

  {
    layout: "1x2",
    type: "social",
    title: "WhatsApp",
    icon: "whatsApp",
    username: "989391470427",
    buttonTitle: "Send a Message",
    buttonLink: "https://wa.me/989391470427",
    // buttonSecondaryText: "279",
    color: "#0EC00C",
    description: "برای ارتباط به واتس اپ پیام دهید",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Telegram",
    icon: "telegram",
    username: "@amirhossein_kkk",
    buttonTitle: "Send a Message",
    buttonLink: "https://t.me/amirhossein_kkk",
    // buttonSecondaryText: "44",
    color: "#0369A1",
  },

  {
    layout: "2x4",
    type: "equipment",
    title: "skills",
    image: "/images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
    equipments: [
      {
        title: "FrontEnd",
      },
      {
        title: "BackEnd",
      },
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
        title: "TypeScript",
      },
      {
        title: "React js",
      },
      {
        title: "Next js",
      },
      {
        title: "Node js",
      },
      {
        title: "Express js",
      },
      {
        title: "MongoDB",
      },
      {
        title: "Sass , Bootstrap , Tailwind ",
      },
    ],
  },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "product 1",
  //   icon: "youtube",
  //   color: "#FF0000",
  //   // promotion: "MAKRDEVFELLOWS",
  //   description: "describe product 1",
  //   buttonTitle: "product one",
  //   buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
  // },
];
interface itt {
  stack?: string;
  message?: string;
}
export const siteCon = async () => {
  let repo: any = await GetGithubRep();

  toast.promise(GEttaost(), {
    pending: {
      render() {
        return "please wait";
      },
    },
    success: {
      render({data}: any) {
        return "site load finish";
      },
    },

    error: {
      render({data}: any) {
        console.log(data);
        return data;
      },
    },
  });

  if (repo) {
    repo?.map((item: GetRepo, index: number) => {
      var color;
      if (index % 2 == 0) {
        color = "#0F86D4";
      } else if (index % 3 == 0) {
        color = "#27D70A";
      } else if (index % 5 == 0) {
        color = "#D5D70A";
      } else if (index % 3 == 1) {
        color = "#710fd4";
      } else {
        color = "#FF0000";
      }
      let r: GridItemInterface = {
        layout: "2x1",
        type: "mentor",
        title: item.name,
        icon: "youtube",
        username: item.full_name,
        buttonTitle: item.language,
        buttonLink: item.html_url,
        // buttonSecondaryText: "44",
        color,
        created_at: item.created_at,
        site: item.homepage,
        topics: item.topics,
      };
      GridItems.push(r);
    });
    return GridItems;
  }
  return null;
};

export const siteConfig = {
  creator: "Amir Hossein Karimi",
  title: "Develepor",
  bio: "امیرحسین کریمی هستم نزدیک به 3 سال در حوزه برنامه نویسی تحت وب فعالیت دارم",
  bioEn:
    "My name is Amir Hossein Karimi and I have been working in web programming for almost 3 years",
  location: "Tehran, Iran",
  location_link:
    "https://www.google.com/maps/place/Tehran,+Tehran+Province,+Iran/@35.706891,50.6882744,9z/data=!3m1!4b1!4m6!3m5!1s0x3f8e00491ff3dcd9:0xf0b3697c567024bc!8m2!3d35.7218583!4d51.3346954!16zL20vMGZ0bHg?entry=ttu",
  email: "haamir3030@gmail.com",
  phone_link: "tel:+989391470427",
  phone: "+989391470427",

  items: GridItems,
} as const;
