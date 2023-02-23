import Image from "next/image";

export function About() {
  return (
    <div className="px-4">
      <h2 className="uppercase font-bold text-3xl mb-2 text-green-800">
        About
      </h2>

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 overflow-hidden">
        <Image
          src={`https://avatars.githubusercontent.com/u/96853842?v=4`}
          width={384}
          height={384}
          alt="me"
          className="w-24 h-24  md:h-auto md:rounded-none md:w-60 rounded-full mx-auto"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Estudante de programação, interesado em aprender sempre. Desejo
              ser um dev front-end e trabalhar na área No momento tenho
              habilidade em HTML,CSS e JS, estudando a fundo ReactJS. Interesado
              em tecnologia para o densevolvimento web (sou apaixonado), tanto
              front-end como back-end
            </p>
          </blockquote>

          <figcaption className="font-medium">
            <div className="text-green-500 dark:text-green-400">
              João Eduardo Panzo
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Programmer, Dine-code
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
