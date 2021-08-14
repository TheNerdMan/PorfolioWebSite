// External Modules
import React from "react";

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
    public layoutClassName = 'landing-container'
    public cardClassName = 'personal-card'

    // Constructor
    constructor(props: any) {
        super(props); 
    };   
   
    // Component Life Cycle

    // Component Functions
    

    // Markup
    public render() {
        return(
            <>
                <div className={this.layoutClassName}>
                    <ComponentSwapper>
                        <PersonalCard />
                        <LanguagesCard />
                    </ComponentSwapper>
                    <ComponentSwapper>
                        <Blurb />
                        <Repos />
                    </ComponentSwapper>
                </div>
            </>
        )
    };
}

export default Landing
