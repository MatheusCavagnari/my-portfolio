import { Title } from "./title";

export function Information() {
  return (
    <div className="mt-6 flex flex-col items-center text-center md:items-start md:text-left">
      <Title text="Languages" />
      <div className="flex flex-col gap-3 mt-3 font-light text-gray-400">
        <p>EN - Intermediary</p>
        <p>PT-BR - Native Speaker</p>
      </div>

      <div className="mt-6">
        <Title text="Education" />
        <p className="font-light text-gray-400 mt-3">UEPG</p>
      </div>
    </div>
  );
}
