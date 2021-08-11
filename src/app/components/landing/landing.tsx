// External Modules
import React from "react";

// Internal Modules
import Card from '../personal-card/personal-card';
import Blurb from '../personal-blurb/personal-blurb';
import Repos from '../active-repos/active-repos';
import ComponentSwapper from '../component-swapper/component-swapper';

// Data

// Markup
export default () => {

    let layoutClassName = 'landing-container'
    let cardClassName = 'personal-card'

    return(
        <>
            <div className={layoutClassName}>
                <Card />
                <ComponentSwapper>
                    <Blurb />
                    <Repos />
                </ComponentSwapper>
            </div>
        </>
    )
}
