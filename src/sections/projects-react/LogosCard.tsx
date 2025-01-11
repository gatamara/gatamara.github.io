import { CSSLogo } from "../../icons/CSSLogo";
import { GitHubLogo } from "../../icons/GitHubLogo";
import { GitLogo } from "../../icons/GitLogo";
import { HTMLLogo } from "../../icons/HTMLLogo";
import { JSLogo } from "../../icons/JSLogo";
import { REACTLogo } from "../../icons/REACTLogo";
import { TypeSLogo } from "../../icons/TypeSLogo";

export const LogosCard = () => {
  return (
    <>
      <HTMLLogo size={24} color="#DBDDDF" />
      <CSSLogo size={24} color="#DBDDDF" />
      <JSLogo size={24} color="#DBDDDF" />
      <REACTLogo size={24} color="#DBDDDF" />
      <TypeSLogo size={24} color="#DBDDDF" />
      <GitLogo size={24} color="#DBDDDF" />
      <GitHubLogo size={24} color="#DBDDDF" />
    </>
  );
};
