// External Modules
import React, { RefObject } from "react";
import ComponentSwapper from "../component-swapper/component-swapper";

// Internal Modules

// Data

// Interfaces
interface PropsType {
    children?: JSX.Element[];
    parentCSReference?: RefObject<ComponentSwapper>;
}
interface StateType {
}


class ActiveRepos extends React.Component<PropsType, StateType> {
    // Component Properties    

    // Constructor
    constructor(props: any) {
        super(props); 
    };   
   
    // Component Life Cycle


    // Component Functions
    private swap = () => {
        this.props.parentCSReference?.current?.cycleComponents();
    }

    // Markup
    public render() {
        return(
            <>
            <div className="active-repos large-card">
                <p>Active Repos component works!</p>  
                    <button className="tempbutton small" onClick={this.swap}>Swap</button>
                </div>
            </>
        )
    };
}

export default ActiveRepos
