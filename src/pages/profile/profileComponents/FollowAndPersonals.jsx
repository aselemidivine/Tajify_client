import React from "react";
import PersonalAndBlogs from './PersonalAndBlogs';

import FollowAndJobs from './FollowAndJobs'


function FollowAndPersonal () {
    return (
        <section className="section followAndPersonal__section">
            <div className="section__container followAndPersonal">
                <FollowAndJobs />
                <PersonalAndBlogs />
                <div className="ads__box--xl">&nbsp;</div>
            </div>
        </section>
    );
}

export default FollowAndPersonal;