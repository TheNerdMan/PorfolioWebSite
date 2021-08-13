// External Modules
import React from "react";

// Internal Modules

// Data

// Interfaces
interface PropsType {
}
interface StateType {
}


class NewComponent extends React.Component<PropsType, StateType> {
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
                <p>New component works!</p>                
            </>
        )
    };
}

export default NewComponent
