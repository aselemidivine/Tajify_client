import React from "react";
import RecommendedFollowCard from "./RecommendedFollowCard";
import Jobs from '../../../components/Jobs';

function FollowAndJobs() {
    return (
        <div className="followandjobs">
            <RecommendedFollowCard />
            <Jobs />
        </div>
    )
}

export default FollowAndJobs;