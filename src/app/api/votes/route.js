import {NextResponse} from "next/server";

export async function GET(request) {
    return NextResponse.json({message: "Voting is currently disabled"}, {status: 400});
}

// import {get_votes} from "@lib/db/voting";
// import {NextResponse} from "next/server";
//
// export async function GET(request) {
//     const votes = await get_votes();
//     return NextResponse.json(votes);
// }