"use client";

import styles from "./voting.module.css";
import {PathConfig} from "@components/PathConfig";
import {BungieIcons} from "@components/BungieIcons";
import { useState } from "react";

export default async function Voting({ add_vote }) {
    const [selected_activity, set_selected_activity] = useState(["raids", "root_of_nightmares"]);
    return (
        <div>
            <Selectors selected_activity={selected_activity} set_selected_activity={set_selected_activity}/>
            <VotingActivity add_vote={add_vote} name={PathConfig[selected_activity[0]][selected_activity[1]].name} encounters={PathConfig[selected_activity[0]][selected_activity[1]].encounters}/>
        </div>
    )
}

async function Selectors({ selected_activity, set_selected_activity }) {
    const row_elements = [];
    for (const [rad, activities] of Object.entries(PathConfig)) {
        const rad_elements = [];
        for (const [activity, activity_data] of Object.entries(activities)) {
            rad_elements.push(
                <div className={`${styles.selector_item} ${(selected_activity[1] === activity) ? styles.selected : null}`} key={activity} onClick={() => set_selected_activity([rad, activity])}>
                    <img src={BungieIcons[rad][activity]} alt={activity_data.name} className={styles.selector_icon}/>
                </div>
            )
        }
        row_elements.push(
            <div className={styles.selector_row} key={rad}>
                <div className={styles.selector_title}>
                    <h2>{rad}</h2>
                </div>
                <div className={styles.selector_items}>
                    {rad_elements}
                </div>
            </div>
        )
    }
    return (
        <div className={styles.selectors}>
            {row_elements}
        </div>
    )
}

async function VotingActivity({ name, encounters, add_vote }) {
    const encounters_elements = [];
    for (const [id, encounter] of Object.entries(encounters)) {
        encounters_elements.push(<VotingEncounter name={encounter.name} ql={encounter.ql} key={encounter.ql} add_vote={add_vote} done={encounter.done}/>);
    }
    return (
        <div className={styles.activity}>
            <h2 className={styles.activity_name}>{name}</h2>
            <div className={styles.encounters}>
                {encounters_elements}
            </div>
        </div>
    )
}

async function VotingEncounter({ name, ql, add_vote, done }) {
    return (
        <div className={styles.encounter}>
            <p>{name}</p>
            <p>{ql}</p>
            <div className={styles.button_wrapper}>
                {done ? <p className={styles.done}>Already Done!</p> : <div onClick={() => add_vote(ql)} className={styles.vote_button}>Vote</div>}
            </div>
        </div>
    )
}