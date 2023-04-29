"use client";

import {useRouter} from "next/navigation";

export default function Error({ error, reset }) {
    const router = useRouter();
    console.error(error);
    return (
        <div>
            <h1>Something went wrong!</h1>
            <button onClick={reset}>Try again</button>
            <button onClick={() => router.back()}>Go Back</button>
        </div>
    )
}