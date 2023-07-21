import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Image alt="photo" src="/profile.png" width={200} height={200}></Image>
      </div>
      <div>
        <h1>Hey, I`m Matheus Cavagnari</h1>
        <h2>Software Developer</h2>
      </div>
      <div>
        <h3>Experiencia</h3>
        <p> 👨‍💻 Desenvolvedor Web apaixonado por tecnologia 👨‍💻</p>
        <p>
          💡 Minha expertise está centrada no desenvolvimento web, utilizando
          tecnologias como Node.js e JavaScript para criar aplicações eficientes
          e escaláveis. Ao longo da minha carreira, tive a oportunidade de
          trabalhar em projetos desafiadores, nos quais pude aprimorar minhas
          habilidades e aprender com as melhores práticas do mercado.
        </p>
        <div>
          <p>Node.js | Nest.js | Next.js | TypeScript | JavaScript | Oracle</p>
        </div>
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
