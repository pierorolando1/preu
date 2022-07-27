import type { Course } from "../models/Course.ts"
import { getDocs, collection, DocumentSnapshot } from "firebase/firestore"
import { db } from "@firebase"

const cache = new Map<string, Course[]>()

export const getAllCourses = async (): Promise<Course[]>  => {
    
    if(cache.has("courses")) {
        return cache.get("courses") as |Course[]
    }

    const courses: Course[] = [];
    (await getDocs(collection(db, "courses"))).forEach((doc: DocumentSnapshot) => {
        courses.push({
            id: doc.id,
            ...doc.data()
        }) 
    })

    cache.set("courses", courses)

    return courses
}