import axios from "axios";
import {GetRepo, Repo} from "@/types";
import {GridItemInterface} from "@/config/site-config";
export default async function GetGithubRep() {
  try {
    const repo = await fetch(
      "https://api.github.com/users/amirhossein-k/repos"
    );
    const jso: GetRepo[] = await repo.json();

    if (jso) {
      return jso;
    }
  } catch (error) {
    console.log(error, "err");
    throw new Error(error + " GetGithubRep faild");
  }
}
