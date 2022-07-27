/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import { Course } from "@features/courses/models/Course.ts";
import { getAllCourses } from "@features/courses/api/getAll.ts";
import CourseCard from "@features/courses/components/CourseCard.tsx";

type Courses = {
  courses: Course[];
};

export const handler: Handlers<Courses | null> = {
  async GET(_, ctx) {
    const courses = await getAllCourses();
    return ctx.render({ courses });
  },
};

export default function Home({ data }: PageProps<Courses | null>) {
  return (
    <Fragment>
      <style>{"html { scroll-behavior: smooth; }"}</style>
      <div
        class={
          tw`bg-black h-screen p-4 w-screen flex flex-col items-center justify-center`
        }
      >
        <h1
          class={tw`text(gray-100 7xl) font-bold max-w-4xl text-center mx-auto`}
        >
          Todo lo que necesitas para ingresar
        </h1>
        <div class={tw`w-full h-14`} />
        <p class={tw`text(gray-400 xl center) max-w-2xl mx-auto `}>
          Lista de recursos que te ayudarán a ingresar a la universidad (tambien puedes contribuir)
        </p>
        <div class={tw`w-full h-14`} />
        <div class={tw`relative p-5 w-52`}>
          <div
            style={{ filter: "blur(8px)" }}
            class={
              tw`absolute rounded top-0 left-0 bg-gradient-to-r from-pink-600 to-purple-600 blur-sm w-full h-full`
            }
          ></div>
          <a
            href="#courses"
            class={
              tw`flex items-center justify-center cursor-pointer absolute rounded-lg text-center w-full h-full bg-black hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 z-10 top-0 left-0 text(gray-100) transition-all`
            }
          >
            Start
          </a>
        </div>
      </div>
      <div
        id="courses"
        class={tw`bg-gradient-to-b from-black to-gray-900 min-h-screen py-20`}
      >
        <div class={tw`grid grid-cols-3 gap-5 max-w-4xl w-full mx-auto`}>
          {data?.courses.map((c, i) => <CourseCard course={c} key={i} />)}
          <div
            class={
              tw`w-full flex items-center border-2 border-transparent hover:text-green-500 border-solid hover:border-green-600 cursor-pointer px-4 py-2 rounded-xl transition-all`
            }
          >
            <div
              class={
                tw`shadow-md shadow-blue-500 rounded-full w-12 p-2 border-2 border-solid border-green-600`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class={tw`text(green-500)`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div class={tw`w-3 h-full`} />
            <h1 class={tw`text(green-100 lg) font-semibold transition-all`}>
              Física
            </h1>
          </div>
          <div class={tw`w-full bg-green-500`}>yo</div>
          <div class={tw`w-full bg-green-500`}>yo</div>
          <div class={tw`w-full bg-gradient-to-r`}>yo</div>
          <div class={tw`w-full relative h-11`}>
            <div
              style={{ filter: "blur(8px)" }}
              class={
                tw`absolute rounded top-0 left-0 bg-gradient-to-r from-pink-600 to-purple-600 blur-sm w-full h-full`
              }
            ></div>
            <button
              class={
                tw`absolute rounded-lg w-full h-full bg-black hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 z-10 top-0 left-0 text(gray-100) transition-all`
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
