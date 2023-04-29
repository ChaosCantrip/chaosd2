import { NextResponse } from "next/server";

export async function GET(request) {
    console.log(request.headers);
    return NextResponse.json({
        "message": "pong"
    })
}