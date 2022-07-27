import { collection, addDoc } from "firebase/firestore";
import type { Course } from "../models/Course.ts";

export const createCourseProposal = async (
    course: Course,
): Promise<boolean> => {
    try {
        await addDoc(collection("proposal"), {
            proposalType: "course",
            ...course,
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
