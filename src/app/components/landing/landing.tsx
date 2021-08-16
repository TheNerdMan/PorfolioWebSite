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
    smallCardShownIndex: number;
    largeCardShownIndex: number;
}


class Landing extends React.Component<PropsType, StateType> {
    // Component Properties    
    public state: StateType = {
        smallCardShownIndex: 0,
        largeCardShownIndex: 0,
    }

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
        if (this.state.smallCardShownIndex >= (this.csSmall.current?.props.children?.length ?? 0) - 1) {
            this.setState(() => {
                return {smallCardShownIndex: 0};
            })        
        } else { 
            this.setState((state) => {
                return {smallCardShownIndex: state.smallCardShownIndex + 1};
            })
        }        
    }

    public swapLarge = () => {        
        if (this.state.largeCardShownIndex >= (this.csLarge.current?.props.children?.length ?? 0) - 1) {
            this.setState(() => {
                return {largeCardShownIndex: 0};
            })        
        } else { 
            this.setState((state) => {
                return {largeCardShownIndex: state.largeCardShownIndex + 1};
            })
        }
    }


    // Markup
    public render() {
        return(
            <>
                <button className="tempbutton small" onClick={this.swapSmall}>Swap Small</button>
                <button className="tempbutton large" onClick={this.swapLarge}>Swap Large</button>
                <div className="landing-container">
                    <ComponentSwapper ref={this.csSmall} shownIndex={this.state.smallCardShownIndex}>
                        <PersonalCard />
                        <LanguagesCard />
                    </ComponentSwapper>
                    <ComponentSwapper ref={this.csLarge} shownIndex={this.state.largeCardShownIndex}>
                        <Blurb />
                        <Repos />
                    </ComponentSwapper>
                </div>
            </>
        )
    };
}

export default Landing
