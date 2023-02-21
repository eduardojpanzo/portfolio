export function Skills() {
  const skillsItems = [
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "ReactJS" },
    { name: "NodeJS" },
    { name: "Express" },
    { name: "NextJs" },
    { name: "TypeScript" },
  ];

  return (
    <div className="px-4 mb-2">
      <h2 className="uppercase font-bold text-3xl mb-2">Skill </h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {skillsItems.map((item) => (
          <div className="h-14 flex justify-center items-center text-center hover:border cursor-pointer">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
