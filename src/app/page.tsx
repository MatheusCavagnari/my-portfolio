import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Information } from "./components/information";
import { ContactButton } from "./components/contactButton";
import { SocialButton } from "./components/socialButton";
import { ResumeButton } from "./components/resumeButton";

export default function Home() {
  return (
    <main className="md:grid grid-cols-none pt-10 px-8 pb-8 md:min-h-screen md:grid-cols-3 md:pt-20 md:px-16  mb:pb-0 ">
      <div className="col-span-2 md:justify-start">
        <Header />
        <Experience />
      </div>

      <div className="">
        <Information />
        <div className="mt-6 flex flex-col items-center">
          <SocialButton />
          <ContactButton />
          <ResumeButton />
        </div>
      </div>
    </main>
  );
}
