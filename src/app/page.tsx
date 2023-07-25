import { Experience } from "./components/experience";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="grid grid-cols-none pt-10 px-8 md:min-h-screen md:grid-cols-3 md:pt-20 md:px-16">
      <div className="col-span-2 md:justify-start">
        <Header />
        <Experience />
      </div>

      <div className="">
        <div className="mt-6">
          <h3>Languages</h3>
          <div>
            <span>EN - intermediario</span>
            <span>PT-BR - Native Speaker</span>
          </div>

          <div className="mt-6">
            <h3>Education</h3>
            <span>UEPG</span>
          </div>
        </div>
        <div className="mt-6">
          <div></div>
          <button>contact me!</button>
        </div>
      </div>
    </main>
  );
}
