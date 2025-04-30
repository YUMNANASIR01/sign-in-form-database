"use server";

import { client } from "@/sanity/lib/client";



export async function sanityloginUploader(username: string, password: string) {
  const res = await client.create({
    _type: "login",
    username: username,
    password: password,
  });

  return res;
}
