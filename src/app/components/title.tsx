interface TitlePros {
  text: string;
}

export function Title({ text }: TitlePros) {
  return (
    <h3 className="font-sans text-3xl font-medium text-center md:text-left md:text-2xl">
      {text}
    </h3>
  );
}
