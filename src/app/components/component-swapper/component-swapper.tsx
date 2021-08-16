// External Modules
import React from "react";

// Internal Modules

// Data

// Interfaces
interface PropsType {
    children?: JSX.Element[];
    propsShownIndex?: number;
}
interface StateType {
    shownIndex: number
}


class ComponentSwapper extends React.Component<PropsType, StateType> {
    // Component Properties    
    public state: StateType = {        
        shownIndex: this.props.propsShownIndex ?? 0
    }

    // Constructor
    constructor(props: any) {
        super(props); 
    };   
   
    // Component Life Cycle
    componentWillReceiveProps(nextProps: PropsType) {
        if (nextProps.propsShownIndex && nextProps.propsShownIndex != this.state.shownIndex) {
            this.setState({shownIndex: nextProps.propsShownIndex})
        }
    }
    
    // Component Functions
    public cycleComponents = () => {
        if (this.state.shownIndex >= (this.props.children?.length ?? 0) - 1) {
            this.setState(() => {
                return {shownIndex: 0};
            })        
        } else { 
            this.setState((state) => {
                return {shownIndex: state.shownIndex + 1};
            })
        }     
    };

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
