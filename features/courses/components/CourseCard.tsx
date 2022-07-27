/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Course } from "@features/courses/models/Course.ts"

interface CourseCardProps {
    course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {

    const colors = {
        "math": "red",
        "science": "green",
        "letters": "blue",
    }

    const color = colors[course.type];

    return (
        <a
            href={`/roadmap/${course.id}`}
            class={
                tw`w-full flex items-center border-2 border-transparent hover:text-${color}-500 border-solid hover:border-${color}-600 cursor-pointer px-4 py-2 rounded-xl transition-all`
            }
        >
            <div
                class={
                    tw`shadow-md shadow-${color}-500 rounded-full w-12 p-2 border-2 border-solid border-${color}-600`
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={tw`text(${color}-500)`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                </svg>
            </div>
            <div class={tw`w-3 h-full`} />
            <h1 class={tw`text(${color}-100 lg) font-semibold transition-all`}>
                Algebra
            </h1>
        </a>
    );
};

export default CourseCard;
