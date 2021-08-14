// External Modules
import React from "react";

// Internal Modules

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
    

    // Markup
    public render() {
        return(
            <>
                 <div className="languages-card">
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
