// External Modules
import React, { RefObject, MouseEvent } from "react";

// Internal Modules
import ComponentSwapper from "../component-swapper/component-swapper";

// SVGs
import AngularLogo from "../../../assets/images/language-logos/angular-logo.svg";
import CSharpLogo from "../../../assets/images/language-logos/c#-logo.svg";
import CSSLogo from "../../../assets/images/language-logos/css-logo.svg";
import DotNetCoreLogo from "../../../assets/images/language-logos/dotnetcore-logo.svg";
import GatsbyLogo from "../../../assets/images/language-logos/gatsby-logo.svg";
import GitLogo from "../../../assets/images/language-logos/git-logo.svg";
import HTML5Logo from "../../../assets/images/language-logos/html5-logo.svg";
import JSLogo from "../../../assets/images/language-logos/js-logo.svg";
import ReactLogo from "../../../assets/images/language-logos/react-logo.svg";
import SASSLogo from "../../../assets/images/language-logos/sass-logo.svg";
import TSLogo from "../../../assets/images/language-logos/ts-logo.svg";


// Interfaces
interface PropsType {
    children?: JSX.Element[];
    parentCSReference?: RefObject<ComponentSwapper>;
}
interface StateType {
}


class LanguagesCard extends React.Component<PropsType, StateType> {
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
                    className="languages-card card"
                    onClick={this.swap}
                    onMouseMove={this.caluculateCardTilt}>
                    <h4>JS Frameworks</h4>                        
                    <div className="language-icons">
                        <img className="language-icon" src={AngularLogo}/>
                        <img className="language-icon" src={GatsbyLogo}/>
                        <img className="language-icon" src={ReactLogo}/>
                    </div>

                    <h4>Front end</h4>                        
                    <div className="language-icons">
                        <img className="language-icon" src={HTML5Logo}/>
                        <img className="language-icon" src={CSSLogo}/>
                        <img className="language-icon" src={SASSLogo}/>
                        <img className="language-icon" src={JSLogo}/>
                        <img className="language-icon" src={TSLogo}/>
                    </div>

                    <h4>Back end</h4>
                    <div className="language-icons">
                        <img className="language-icon" src={CSharpLogo}/>
                        <img className="language-icon" src={DotNetCoreLogo}/>
                    </div>

                    <h4>Tools</h4>
                    <div className="language-icons">
                        <img className="language-icon" src={GitLogo}/>
                    </div>

                    <p>
                        Thanks to <a className="" href="https://devicon.dev/">Devicon</a>
                    </p>
                </div>                
            </>
        )
    };
}

export default LanguagesCard
