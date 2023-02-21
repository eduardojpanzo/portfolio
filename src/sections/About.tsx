import Image from "next/image";

export function About() {
  return (
    <div className="px-4">
      <h2 className="uppercase font-bold text-3xl mb-2">About </h2>
      <div className="flex justify-between items-center">
        <p>
          Estudante de programação, interesado em aprender sempre. <br />
          Desejo ser um dev front-end e trabalhar na área No momento tenho
          habilidade em HTML,CSS e JS, estudando a fundo ReactJS.
          <br /> Interesado em tecnologia para o densevolvimento web (sou
          apaixonado), tanto front-end como back-end
        </p>

        <div>
          <Image
            src={`https://avatars.githubusercontent.com/u/96853842?v=4`}
            width={200}
            height={200}
            alt="me"
          />
        </div>
      </div>
    </div>
  );
}
