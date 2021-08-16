// External Modules
import React from "react";

// Internal Modules

// Data

// Interfaces
interface PropsType {
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
    

    // Markup
    public render() {
        return(
            <>
                <div className="active-repos large-card">
                    <p>Active Repos component works!</p>                
                </div>
            </>
        )
    };
}

export default ActiveRepos
