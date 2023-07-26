import { EmailIcon } from "./icons/email-icon";
import { GithubIcon } from "./icons/gitHub-icon";
import { InstaIcon } from "./icons/insta-icon";
import { LinkedinIcon } from "./icons/linkedin-icon";

export function SocialButton() {
  return (
    <div className="flex flex-row gap-8 mb-4">
      <a
        className="rounded-full border-2 border-white p-2"
        href="https://www.linkedin.com/in/matheus-cavagnari/"
      >
        <LinkedinIcon />
      </a>
      <a
        className="rounded-full border-2 border-white p-2"
        href="https://www.instagram.com/matheus_cavagnari/"
      >
        <InstaIcon />
      </a>
      <a
        className="rounded-full border-2 border-white p-2"
        href="https://github.com/MatheusCavagnari"
      >
        <GithubIcon />
      </a>
    </div>
  );
}
