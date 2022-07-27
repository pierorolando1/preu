/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";

import {tw} from "@twind"

export default function NotFoundPage({ url }: UnknownPageProps) {
  return <div class={tw`min-h-screen bg-black flex items-center justify-center`}>
  <h1 class={tw`text(gray-200 2xl)`}>404 not found: {url.pathname}</h1>
  </div> 
}