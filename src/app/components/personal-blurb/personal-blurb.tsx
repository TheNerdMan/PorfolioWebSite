// External Modules
import React, { RefObject, MouseEvent } from "react";
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


class PersonalBlurb extends React.Component<PropsType, StateType> {
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

    
    private caluculateCardTilt = (e: MouseEvent<HTMLElement>) => {
        // e.nativeEvent = Mouse move event.
        const nativeEvent = e.nativeEvent; 
        const targetElement: HTMLElement = e.currentTarget as HTMLElement;

        // This gets us the mouse position relative to the element
        const rect = targetElement.getBoundingClientRect();
        const x = nativeEvent.clientX - rect.left;
        const y = nativeEvent.clientY - rect.top;

        // Trying to work out the percentage of how far the mouse
        // is along along the div

        // x 0 - 10 percent tilt left, 90-100 tilt right        
        // y 0 - 10 percent tilt up, 90-100 tilt down
        // Done with CSS
        let xPercent = (x / (targetElement.clientWidth + 1) * 100);
        let yPercent = (y / (targetElement.clientHeight + 1) * 100);
        xPercent = Math.max(0, Math.min(xPercent, 100));
        yPercent = Math.max(0, Math.min(yPercent, 100));
        console.log("Left% : " + xPercent.toFixed(0) + 
        " ; Top% : " + yPercent.toFixed(0) + ".");
    }

    // Markup
    public render() {
        return(
            <>
                <div
                    className="personal-blurb large-card"
                    onClick={this.swap}
                    onMouseMove={this.caluculateCardTilt}>
                    <p>Personal blurb component works!</p>      
                </div>
            </>
        )
    };
}

export default PersonalBlurb
