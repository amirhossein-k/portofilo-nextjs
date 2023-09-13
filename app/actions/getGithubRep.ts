import axios from "axios";
import {GetRepo, Repo} from "@/types";
import {GridItemInterface} from "@/config/site-config";

export default async function GetGithubRep() {
  try {
    const repo = await fetch(
      "https://api.github.com/users/amirhossein-k/repos"
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
