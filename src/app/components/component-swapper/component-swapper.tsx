// External Modules
import React from "react";

// Internal Modules

// Data

// Interfaces
interface PropsType {
    children?: JSX.Element[];
    shownIndex: number;
}
interface StateType {
    shownIndex: number
}


class ComponentSwapper extends React.Component<PropsType, StateType> {
    // Component Properties    
    public state: StateType = {
        shownIndex: this.props.shownIndex
    }

    // Constructor
    constructor(props: any) {
        super(props); 
    };   
   
    // Component Life Cycle

    componentWillReceiveProps(nextProps: PropsType) {
        this.setState({shownIndex: nextProps.shownIndex})
    }
    
    // Markup
    public render() {
        return(
            <>
                {
                    this.props.children ? 
                        this.props.children[this.state.shownIndex] : null                        
                }                
            </>
        )
    };
}

export default ComponentSwapper
