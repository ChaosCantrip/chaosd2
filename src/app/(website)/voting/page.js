"use client";

import layout from "@styles/modules/layout.module.css";
import Voting from "@src/app/(website)/voting/voting";
import VotingSending from "@src/app/(website)/voting/sending";
import VotingResults from "@src/app/(website)/voting/results";
import BackgroundImage from "@components/BackgroundImage";
import Background from "@backgrounds/home.jpg";
import Title from "@components/Title";
import {BungieIcons} from "@components/BungieIcons";
import {useState} from "react";

export const dynamic = true;

export default function VotingPageWrapper() {
    return (
        <VotingPage/>
    )
}

async function VotingPage() {
    const [state, set_state] = useState(0);

    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <div className={layout.page}>
                <Title title={(state === 2) ? "Current Votes" : "Voting"} icon_url={BungieIcons.social_icon} show_back_button={false}/>
                {(state === 0) ? <Voting add_vote={add_vote}/> : null}
                {(state === 1) ? <VotingSending/> : null}
                {(state === 2) ? <VotingResults/> : null}
            </div>
        </div>
    )

    async function add_vote(ql) {
        set_state(1);
        const response = await fetch("/api/vote", {
            method: "POST",
            body: JSON.stringify({
                ql: ql
            })
        });
        if (response.ok) {
            set_state(2);
        } else {
            set_state(0);
        }
    }
}