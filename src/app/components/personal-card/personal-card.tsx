// External Modules
import React from "react";

// Internal Modules

// SVGs
import Logo from "../../../assets/images/logo.svg";
// Interfaces
interface PropsType {
}
interface StateType {
}


class PersonalCard extends React.Component<PropsType, StateType> {
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
                <div className="personal-card">
                    <img className="logo" src={Logo}/>
                    <h1 className="hello-text">Hi! I'm Alex</h1>
                    <p>
                        I'm a full stack web developer who loves games.
                        One day I'd like to build my own game.
                        For now, check out the sites I've created, worked on,
                        or helped out with.
                    </p>
                    <p>
                        Overall I'm a bit of nerd and I'd love to hear about your project!
                    </p>
                </div> 
            </>
        )
    };
}

export default PersonalCard
