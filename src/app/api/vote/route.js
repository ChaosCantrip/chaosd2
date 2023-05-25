import {add_vote} from "@lib/db/voting";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {ql} = await request.json();
    if (ql) {
        const db_response = await add_vote(ql);
        if (db_response.rowCount === 1) {
            return NextResponse.json({success: true});
        } else {
            return NextResponse.json({error: "Failed to add vote"}, {status: 500})
        }
    } else {
        return NextResponse.json({error: "No ql provided"}, {status: 400})
    }
}