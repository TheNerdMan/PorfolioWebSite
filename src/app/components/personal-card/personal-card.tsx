// External Modules
import React from "react";

// Internal Modules

// Data
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
                    <p className="little-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laborum id placeat non dicta veritatis distinctio. Modi, 
                        assumenda sint nobis architecto sit ab quae non expedita explicabo fugit, 
                        mollitia ipsum quam!
                    </p>
                </div> 
            </>
        )
    };
}

export default PersonalCard
