// External Modules
import React, { RefObject } from "react";

// Internal Modules
import PersonalCard from '../personal-card/personal-card';
import LanguagesCard from '../languages-card/languages-card';
import Blurb from '../personal-blurb/personal-blurb';
import Repos from '../active-repos/active-repos';
import ComponentSwapper from '../component-swapper/component-swapper';

// Data

// Interfaces
interface PropsType {
}
interface StateType {
}


class Landing extends React.Component<PropsType, StateType> {
    // Component Properties    

    // Component References
    public csSmall: RefObject<ComponentSwapper>;
    public csLarge: RefObject<ComponentSwapper>;

    // Constructor
    constructor(props: any) {
        super(props); 
        this.csSmall = React.createRef();
        this.csLarge = React.createRef();
    };   
   
    // Component Life Cycle

    // Component Functions

    // Markup
    public render() {
        return(
            <>
                <div className="landing-container">
                    <ComponentSwapper ref={this.csSmall}>
                        <PersonalCard parentCSReference={this.csSmall} />
                        <LanguagesCard parentCSReference={this.csSmall} />
                    </ComponentSwapper>
                    <ComponentSwapper ref={this.csLarge}>
                        <Blurb parentCSReference={this.csLarge} />
                        <Repos parentCSReference={this.csLarge} />
                    </ComponentSwapper>
                </div>
            </>
        )
    };
}

export default Landing
