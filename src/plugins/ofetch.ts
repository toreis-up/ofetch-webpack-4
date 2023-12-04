import { Context } from "@nuxt/types";
import { Inject } from "@nuxt/types/app";
import { $fetch } from "ofetch";

export default function (_context : Context, inject: Inject) {
  const fetcher = $fetch.create({})
  inject('fetch', fetcher);
}
