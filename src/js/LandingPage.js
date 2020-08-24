import React, {useState} from 'react';
import LandingPageHeader from "./LandingPage_header";
import LandingPageSection1 from "./LandingPage_section1";
import LandingPageSection2 from "./LandingPage_section2";
import LandingPageSection3 from "./LandingPage_section3";
import LandingPageSection4 from "./LandingPage_section4";
import LandingPageSection5 from "./LandingPage_section5";
import LandingPageFooter from "./LandingPagefooter";


function LandingPage() {
    return (
        <div className={"landing_Page"}>
            <LandingPageHeader/>
            <LandingPageSection1/>
            <LandingPageSection2/>
            <LandingPageSection3/>
            <LandingPageSection4/>
            <LandingPageSection5/>
            <LandingPageFooter/>
        </div>
    );
}

export default LandingPage;
