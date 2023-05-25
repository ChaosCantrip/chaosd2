import { db } from "@vercel/postgres";

export async function get_votes() {
    const client = await db.connect();
    const result = await client.query("SELECT * FROM Voting");
    const votes = {};
    for (const row of result.rows) {
        votes[row.ql] = row.votes;
    }
    return votes;
}