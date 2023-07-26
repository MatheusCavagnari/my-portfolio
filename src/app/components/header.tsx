import Image from "next/image";

export function Header() {
  return (
    <div className="flex flex-col gap-7 md:flex-row-reverse md:justify-end md:items-center ">
      <div className="flex flex-col md:justify-start md:items-start ">
        <h1 className="font-sans text-3xl md:text-4xl">Matheus Cavagnari!</h1>
        <h2 className="font-sans text-2xl md:text-3xl text-gray-400 italic md:not-italic">
          Software Developer
        </h2>
      </div>
      <div className="flex justify-center md:flex md:justify-start md:items-center">
        <Image
          className="rounded-3xl md:rounded-full md:border-2 md:border-white"
          alt="photo"
          src="/profile.png"
          width={200}
          height={200}
        ></Image>
      </div>
    </div>
  );
}
