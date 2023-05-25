import {db} from "@vercel/postgres";

export async function get_votes() {
    const client = await db.connect();
    const result = await client.query("SELECT * FROM Voting");
    const votes = {};
    for (const row of result.rows) {
        votes[row.ql] = row.votes;
    }
    return votes;
}

export async function add_vote(ql) {
    const client = await db.connect();
    return await client.query("UPDATE Voting SET votes = votes + 1 WHERE ql = $1", [ql]);
}