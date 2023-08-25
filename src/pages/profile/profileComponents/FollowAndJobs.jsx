import React from "react";
import RecommendedFollowCard from "./RecommendedFollowCard";
import ProfileFooter from '../../../components/ProfileFooter';
import Jobs from '../../../components/Jobs';

function FollowAndJobs() {
    return (
        <div className="followandjobs">
            <RecommendedFollowCard />
            <div className="job--box">
                <Jobs amount={4} />
            </div>
            <ProfileFooter />
        </div>
    )
}

export default FollowAndJobs;