import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-none  md:grid-cols-2">
      <div>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="">
            <h1 className="font-sans text-3xl md:text-4xl">
              I`m Matheus Cavagnari
            </h1>
            <h2 className="font-sans text-2xl md:text-3xl">
              Software Developer
            </h2>
          </div>
          <div>
            <Image
              className="rounded-3xl md:rounded-full md:border-2 md:border-white"
              alt="photo"
              src="/profile.png"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>

        <div>
          <h3>Experiencia</h3>
          <p> 👨‍💻 Desenvolvedor Web apaixonado por tecnologia 👨‍💻</p>
          <p>
            💡 Minha expertise está centrada no desenvolvimento web, utilizando
            tecnologias como Node.js e JavaScript para criar aplicações
            eficientes e escaláveis. Ao longo da minha carreira, tive a
            oportunidade de trabalhar em projetos desafiadores, nos quais pude
            aprimorar minhas habilidades e aprender com as melhores práticas do
            mercado.
          </p>
          <div>
            <p>
              Node.js | Nest.js | Next.js | TypeScript | JavaScript | Oracle
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3>Languages</h3>
          <div>
            <span>EN - intermediario</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div>
            <span>UEPG</span>
          </div>
        </div>
        <div>
          <div></div>
          <button>contact me!</button>
        </div>
      </div>
    </main>
  );
}
