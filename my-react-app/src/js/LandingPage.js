import React, {useState} from 'react';
import LandingPageHeader from "./LandingPage_header";
import LandingPageSection1 from "./LandingPage_section1";


function LandingPage() {
    return (
        <div className={"landing_Page"}>
            <LandingPageHeader/>
            <LandingPageSection1/>
        </div>
    );
}

export default LandingPage;
