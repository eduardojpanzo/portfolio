import Image from "next/image";

export function Banner() {
  return (
    <div className="shadow-inner h-screen">
      <div className="max-w-5xl mx-auto h-full flex flex-col items-center justify-around md:flex-row">
        <div className="mt-10 md:mt-0">
          <h1 className="text-7xl font-bold text-green-600 md:text-7xl dark:text-gray-50">
            Hi, There!
            <br />
            <span className="text-gray-900 text-4xl dark:text-green-600">
              I'm João Eduardo Panzo
            </span>
          </h1>
          <h2 className="leading-9 font-bold text-xl text-green-600 dark:text-gray-50">
            FullStack Devloper
          </h2>

          <div className="flex gap-4 mt-4">
            <p className="uppercase flex gap-2 items-center text-gray-700 dark:text-green-600">
              <span className="text-6xl font-bold">1</span> years of <br />
              experience
            </p>
          </div>
        </div>

        <div className="w-52 h-52 md:w-72 md:h-72 rounded-full shadow-lg overflow-hidden">
          <Image width={288} height={288} src={"/profil.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
