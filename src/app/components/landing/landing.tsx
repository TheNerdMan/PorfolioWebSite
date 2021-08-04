// External Modules
import React from "react";

// Internal Modules
import Card from '../personal-card/personal-card';
import Blurb from '../personal-blurb/personal-blurb';
import Repos from '../active-repos/active-repos';
import ComponentSwapper from '../component-swapper/component-swapper';

// Data

// Styles

// Markup
export default () => {
    return(
        <>
           <Card />
           <ComponentSwapper />
           <Blurb />
           <Repos />
        </>
    )
}
