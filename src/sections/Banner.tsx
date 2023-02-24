import Image from "next/image";

export function Banner() {
  return (
    <div className="shadow-inner" style={{ height: "calc(100vh - 65px)" }}>
      <div className="max-w-5xl mx-auto h-full flex items-center justify-around">
        <div>
          <h1 className="text-7xl font-bold text-green-600 dark:text-gray-50">
            Hi, I'm Dev
            <br />{" "}
            <span className="text-gray-900 text-4xl dark:text-green-600">
              João Eduardo Panzo
            </span>
          </h1>
          <h2 className="leading-9 font-bold text-green-600 dark:text-gray-50">
            FullStack Devloper
          </h2>

          <div className="flex gap-4 mt-4">
            <p className="uppercase flex gap-2 items-center text-gray-700 dark:text-green-600">
              <span className="text-6xl font-bold">2</span> years of <br />
              experience
            </p>
          </div>
        </div>

        <div className="w-52 h-52 rounded-full shadow-lg overflow-hidden">
          <Image width={208} height={208} src={"/profil.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
