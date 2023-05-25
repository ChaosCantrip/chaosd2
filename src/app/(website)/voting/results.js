import {PathConfig} from "@components/PathConfig";
import styles from "./voting.module.css";

export default async function VotingResults() {
    const votes = await fetch("/api/votes").then(response => response.json());
    const voting_elements = [];
    for (const [rad, activities] of Object.entries(PathConfig)) {
        for (const [activity, activity_data] of Object.entries(activities)) {
            for (const [id, encounter] of Object.entries(activity_data.encounters)) {
                if (encounter.done) continue;
                voting_elements.push({
                    element: <VotingRow activity={activity_data.name} name={encounter.name} ql={encounter.ql} votes={votes[encounter.ql]} key={encounter.ql}/>,
                    votes: votes[encounter.ql]
                });
            }
        }
    }
    voting_elements.sort((a, b) => b.votes - a.votes);
    return (
        <div>
            {voting_elements.map(element => element.element)}
        </div>
    )
}

function VotingRow({ activity, name, ql, votes }) {
    return (
        <div className={styles.result_row}>
            <p>{activity}</p>
            <p>{name}</p>
            <p>{ql}</p>
            <p>{votes} Votes</p>
        </div>
    )
}