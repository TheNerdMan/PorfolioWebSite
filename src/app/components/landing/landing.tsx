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
    public swapSmall = () => {        
        this.csSmall.current?.cycleComponents();
    }

    public swapLarge = () => {        
        this.csLarge.current?.cycleComponents();
    }


    // Markup
    public render() {
        return(
            <>
                <button className="tempbutton small" onClick={this.swapSmall}>Swap Small</button>
                <button className="tempbutton large" onClick={this.swapLarge}>Swap Large</button>
                <div className="landing-container">
                    <ComponentSwapper ref={this.csSmall}>
                        <PersonalCard />
                        <LanguagesCard />
                    </ComponentSwapper>
                    <ComponentSwapper ref={this.csLarge}>
                        <Blurb />
                        <Repos />
                    </ComponentSwapper>
                </div>
            </>
        )
    };
}

export default Landing
