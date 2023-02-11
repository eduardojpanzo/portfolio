import Image from "next/image";

export function Banner() {
  return (
    <div className="h-96 bg-slate-300">
      <div className="max-w-5xl mx-auto h-full border-red-700 border-x-2 flex items-center justify-around">
        <div>
          <span className="text-xl font-medium">Hello! I'm </span>

          <h2 className="text-4xl text-sky-600">
            João <br />
            Eduardo Panzo
          </h2>

          <h3 className="leading-9">FullStack Devloper</h3>

          <div className="flex gap-4 mt-4">
            <p className="text-green-700 uppercase flex gap-2 items-center">
              <em className="text-6xl">2</em> years of <br />
              experience
            </p>

            <p className="text-green-700 uppercase flex gap-2 items-center">
              <em className="text-6xl">4</em> Projects <br />
              Completed
            </p>
          </div>
        </div>

        <div className="w-52 h-52 rounded-full shadow-lg overflow-hidden">
          <Image width={200} height={200} src={"/profil.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
