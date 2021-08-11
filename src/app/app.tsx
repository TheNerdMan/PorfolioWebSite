// External Modules
import React from "react";

// Internal Modules
import Landing from './components/landing/landing';

// Data

// Styles

class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);        
    }

    // Markup
    public render() {
        return(
            <>
                <Landing />
            </>
        )
    }
}

export default App
