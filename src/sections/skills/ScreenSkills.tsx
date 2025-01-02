import { CSSLogo } from "../../icons/CSSLogo";
import { GitHubLogo } from "../../icons/GitHubLogo";
import { GitLogo } from "../../icons/GitLogo";
import { HTMLLogo } from "../../icons/HTMLLogo";
import { JSLogo } from "../../icons/JSLogo";
import { REACTLogo } from "../../icons/REACTLogo";
import { TypeSLogo } from "../../icons/TypeSLogo";
import { TailwindLogo } from "../../icons/Tailwinds";

import "./ScreenSkills.css";
import { VueLogo } from "../../icons/VueLogo";

export const ScreenSkills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="p-8 font-semibold bg-gradient-to-r from-violet-50 to-pink-500 bg-clip-text text-transparent uppercase">
        Skills
      </h1>
      <div className="icon-container">
        <div className="icon-box">
          <GitHubLogo size={100} color="#ff5586" />
          <h3 className="logo-title"> GitHub </h3>
        </div>
        <div className="icon-box">
          <JSLogo size={100} color="#ff5586" />
          <h3 className="logo-title">JavaScript</h3>
        </div>
        <div className="icon-box">
          <HTMLLogo size={100} color="#ff5586" />
          <h3 className="logo-title">HTML</h3>
        </div>
        <div className="icon-box">
          <CSSLogo size={100} color="#ff5586" />
          <h3 className="logo-title">CSS</h3>
        </div>
        <div className="icon-box">
          <REACTLogo size={100} color="#ff5586" />
          <h3 className="logo-title">React</h3>
        </div>
        <div className="icon-box">
          <VueLogo size={100} color="#ff5586" />
          <h3 className="logo-title">Vue.js</h3>
        </div>
        <div className="icon-box">
          <GitLogo size={100} color="#ff5586" />
          <h3 className="logo-title">Git</h3>
        </div>
        <div className="icon-box">
          <TypeSLogo size={100} color="#ff5586" />
          <h3 className="logo-title">TypeScript</h3>
        </div>
        <div className="icon-box">
          <TailwindLogo size={100} color="#ff5586" />
          <h3 className="logo-title">Tailwindcss</h3>
        </div>
      </div>
    </div>
  );
};
