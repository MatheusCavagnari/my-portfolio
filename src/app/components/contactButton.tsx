import { EmailIcon } from "./icons/email-icon";

export function ContactButton() {
  return (
    <button className="flex justify-center items-center text-center gap-2 w-80 p-3 text-xl font-semibold uppercase rounded-full bg-gradient-to-r from-teal-400 to-blue-500 ">
      contact me
      <EmailIcon />
    </button>
  );
}
