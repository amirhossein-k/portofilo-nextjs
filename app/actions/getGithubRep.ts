import axios from "axios";
import {GetRepo, Repo} from "@/types";
import {GridItemInterface} from "@/config/site-config";

export default async function GetGithubRep() {
  try {
    const repo = await fetch(
      "https://api.github.com/users/amirhossein-k/repos",
      // {
      //   method: "GET",
      //   cache: "no-cache",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     GITHUB_TOKEN: "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",
      //   }),
      // }
      {
        cache: "no-store",
      }
    );
    const jso: GetRepo[] = await repo.json();
    console.log(jso);

    if (jso) {
      return jso;
    }
  } catch (error: any) {
    console.log(error, "err");
    return {error: "check your internet"};
  }
}

export const GEttaost = async () => {
  const r: any = await GetGithubRep();
  try {
    if (r.error) {
      throw r.error;
    } else {
      return r;
    }
  } catch (error: any) {
    throw error;
  }
};
