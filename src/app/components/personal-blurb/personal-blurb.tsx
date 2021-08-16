// External Modules
import React from "react";

// Internal Modules

// Data

// Interfaces
interface PropsType {
}
interface StateType {
}


class PersonalBlurb extends React.Component<PropsType, StateType> {
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
                <div className="personal-blurb large-card">
                    <p>Personal blurb component works!</p>      
                </div>
            </>
        )
    };
}

export default PersonalBlurb
