export function ResumeButton() {
  return (
    <a
      className="flex justify-center mt-6 items-center text-center gap-2 w-80 p-3 text-xl font-semibold uppercase rounded-full bg-gradient-to-r from-teal-400 to-blue-500 "
      href="/Curriculo.pdf"
      download="currículo.pdf"
    >
      Currículo
    </a>
  );
}
