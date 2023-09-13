"use client";
import Footer from "@/components/footer";
import LeftSide from "@/components/leftSide";
import RightSide from "@/components/rightSide";
import GetGithubRep from "@/app/actions/getGithubRep";
import {GetRepo} from "@/types";
import {GridItemInterface, siteCon} from "@/config/site-config";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const fet = async () => {
  const site: GridItemInterface[] | null = await siteCon();
  if (fet !== undefined) return site;
};
export default function Home() {
  const [repo, setRepo] = useState<GridItemInterface[]>();
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const repo = siteCon();

        resolve(repo);
      }, 500);
    });
    myPromise

      .then((repo: any) => {
        setRepo(repo);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="relative flex flex-col items-center flex-1 w-full">
      <ToastContainer autoClose={2000} />
      <div className="absolute inset-0 z-0 bg-light-pattern dark:bg-dark-pattern bg-verySmall" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" />
      <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
        {/* Left Panel */}
        <LeftSide />
        {/* Right Panel */}
        {repo !== undefined && <RightSide item={repo} />}
        {/* Footer for Mobile */}
        <div className="flex pb-6 xl:hidden">
          <Footer />
        </div>
      </div>
    </main>
  );
}
