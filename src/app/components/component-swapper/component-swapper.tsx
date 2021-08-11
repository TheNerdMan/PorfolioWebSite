// External Modules
import React from "react";

// Internal Modules

// Data

// Interfaces
interface PropsType {
    children: JSX.Element[]
}
interface StateType {
    shownIndex: number
}


class ComponentSwapper extends React.Component<PropsType, StateType> {
    // Component Properties    
    public state: StateType = {
        shownIndex: 0
    }

    constructor(props: any) {
        super(props); 
    };   
   
    componentDidMount() {
        this.cycleComponents();
    }

    // Component Functions
    public cycleComponents(): void {
        setInterval(() => {
            if (this.state.shownIndex === this.props.children.length  - 1) {
                this.setState(() => {
                    return {shownIndex: 0};
                })        
            } else { 
                this.setState((state) => {
                    return {shownIndex: state.shownIndex + 1};
                })
            }
        }, 2000)        
    };

    // Markup
    public render() {
        return(
            <>
                {this.props.children[this.state.shownIndex]}                
            </>
        )
    };
}

export default ComponentSwapper
