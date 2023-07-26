import { Title } from "./title";

export function Information() {
  return (
    <div className="mt-6 flex flex-col items-center text-center md:items-start md:text-left">
      <Title text="Idiomas" />
      <div className="flex flex-col gap-3 mt-3 font-light text-gray-400">
        <p>EN - Intermediário</p>
        <p>PT-BR - Fluente </p>
      </div>

      <div className="mt-6">
        <Title text="Formação" />
        <p className="font-light text-gray-400 mt-3">
          Bacharel em Engenharia de Software na UEPG (Universidade Estadual de
          PontaGrossa) de Janeiro 2017 - Abril 2022
        </p>
      </div>
    </div>
  );
}
