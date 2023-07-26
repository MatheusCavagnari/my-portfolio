import { Title } from "./title";

export function Experience() {
  return (
    <div className="flex flex-col mt-6">
      <Title text="Experiencia" />
      <p className="text-lg font-light text-center text-gray-400 mt-4 md:text-left md:text-2xl">
        Desenvolvedor Web full stack a 3 anos, atualmente trabalhando com
        React.js, Nest.js, Oracle, RabbitMQ, Kubenav, Grafana.
      </p>
      <div className="mt-6">
        <Title text="Habilidades" />
      </div>

      <ul className="flex flex-col mt-6 list-disc">
        <li>
          TypeScript | JavaScript | C | Java | Node | Nest | Express |Next |
          React | Oracle | Postgres | Mysql | RabbitMQ | jQuery | Git
        </li>
        <li> Kubenav | Grafana | Azure | Jest | Unit Testing</li>
        <li> Microservices | Frontend | Backend | Full-Stack | Unit Testing</li>
      </ul>
    </div>
  );
}
