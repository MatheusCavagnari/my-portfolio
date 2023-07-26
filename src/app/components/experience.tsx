import { Title } from "./title";

export function Experience() {
  return (
    <div className="flex flex-col mt-6">
      <Title text="Experiencia" />
      <p className="text-lg font-light text-center text-gray-400 mt-4 md:text-left md:text-2xl">
        👨‍💻 Desenvolvedor Web apaixonado por tecnologia 👨‍💻
      </p>

      <div className="flex items-center text-center mt-6">
        <p>Node.js | Nest.js | Next.js | TypeScript | JavaScript | Oracle</p>
      </div>
    </div>
  );
}
