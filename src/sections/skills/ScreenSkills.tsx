import { CSSLogo } from "../../icons/CSSLogo"
import { GitHubLogo } from "../../icons/GitHubLogo"
import { GitLogo } from "../../icons/GitLogo"
import { HTMLLogo } from "../../icons/HTMLLogo"
import { JSLogo } from "../../icons/JSLogo"
import { REACTLogo } from "../../icons/REACTLogo"
import { TypeSLogo } from "../../icons/TypeSLogo"

import "./ScreenSkills.css"


export const ScreenSkills = () => {
    return (
        <div className="skills" id="skills">
            <h1 className="title-skills">Skills</h1>
            <div className="icon-container">
                <div className="icon-box">
                    < GitHubLogo size={100} color="#ff5586" />
                    <h3 className="logo-title"> GitHub </h3>
                </div>
                <div className="icon-box">
                    <JSLogo size={100} color="#ff5586" />
                    <h3 className="logo-title">JavaScript</h3>
                </div>
                <div className="icon-box">
                    < HTMLLogo size={100} color="#ff5586" />
                    <h3 className="logo-title">HTML</h3>
                </div>
                <div className="icon-box">
                    < CSSLogo size={100} color="#ff5586" />
                    <h3 className="logo-title">CSS</h3>
                </div>
                <div className="icon-box">
                    <  REACTLogo size={100} color="#ff5586" />
                    <h3 className="logo-title">React</h3>

                </div>
                <div className="icon-box">
                    <  GitLogo size={100} color="#ff5586" />
                    <h3 className="logo-title">Git</h3>
                </div>
                <div className="icon-box">
                    < TypeSLogo size={100} color="#ff5586" />
                    <h3 className="logo-title">TypeScript</h3>
                </div>
            </div>
        </div>
    )
}
