import layout from "@styles/modules/layout.module.css";
import Title from "@components/Title";
import {backgrounds} from "@components/ImageImports";
import BackgroundImage from "@components/BackgroundImage";
import {BungieIcons} from "@components/BungieIcons";

export default function VotingDisabled() {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={backgrounds.home}/>
            <div className={layout.page}>
                <Title title={"Voting is Currently Disabled"} icon_url={BungieIcons.social_icon} show_back_button={false}/>
                <p>Voting has been disabled until I fix the backend. Please bear with me!</p>
            </div>
        </div>
    )
}

// "use client";
//
// import layout from "@styles/modules/layout.module.css";
// import Voting from "@src/app/(website)/voting/voting";
// import VotingResults from "@src/app/(website)/voting/results";
// import BackgroundImage from "@components/BackgroundImage";
// import Background from "@backgrounds/home.jpg";
// import Title from "@components/Title";
// import {BungieIcons} from "@components/BungieIcons";
// import {useState} from "react";
//
// export const dynamic = true;
//
// export default function VotingPageWrapper() {
//     return (
//         <VotingPage/>
//     )
// }
//
// async function VotingPage() {
//     const [state, set_state] = useState(0);
//
//     return (
//         <div className={layout.page_wrapper}>
//             <BackgroundImage src={Background}/>
//             <div className={layout.page}>
//                 <Title title={(state === 1) ? "Current Votes" : "Voting"} icon_url={BungieIcons.social_icon} show_back_button={false}/>
//                 {(state === 0) ? <Voting add_vote={add_vote}/> : null}
//                 {(state === 1) ? <VotingResults/> : null}
//             </div>
//         </div>
//     )
//
//     async function add_vote(ql) {
//         set_state(1);
//         await fetch("/api/vote", {
//             method: "POST",
//             body: JSON.stringify({
//                 ql: ql
//             })
//         });
//     }
// }