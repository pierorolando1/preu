import {initializeApp} from "firebase/app";
import { getFirestore } from  "firebase/firestore";

import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const firebaseApp = initializeApp({
    apiKey: Deno.env.get("FIREBASE_APIKEY") || config().FIREBASE_APIKEY,
    authDomain: Deno.env.get("FIREBASE_AUTHDOMAIN") || config().FIREBASE_AUTHDOMAIN,
    projectId: Deno.env.get("FIREBASE_PROJECTID") || config().FIREBASE_PROJECTID,
    storageBucket: Deno.env.get("FIREBASE_STORAGEBUCKET") || config().FIREBASE_STORAGEBUCKET,
    messagingSenderId: Deno.env.get("FIREBASE_MESSAGINGSENDERID") || config().FIREBASE_MESSAGINGSENDERID,
    appId: Deno.env.get("FIREBASE_APPID") || config().FIREBASE_APPID,
    measurementId: Deno.env.get("FIREBASE_MEASUREMENTID") || config().FIREBASE_MEASUREMENTID 
});
export const db = getFirestore(firebaseApp);