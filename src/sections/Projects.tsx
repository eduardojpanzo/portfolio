import Link from "next/link";

export function Projects() {
  return (
    <div className="py-3">
      <div className="w-40 h-40 rounded-lg shadow-lg">
        <p>Project Name</p>
        <Link href={"/same place"} />
      </div>

      <div className="w-40 h-40 rounded-lg shadow-lg">
        <p>Project Name</p>
        <Link href={"/same place"} />
      </div>

      <div className="w-40 h-40 rounded-lg shadow-lg">
        <p>Project Name</p>
        <Link href={"/same place"} />
      </div>
    </div>
  );
}
