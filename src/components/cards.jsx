import { Github } from "lucide-react";

export const Cards = ({ imgBg, nameProject, linkWeb, linkGitHub }) => {
  return (
    <div className="rounded-md duration-500 flex flex-col gap-3 text-left overflow-hidden outline-none relative hover:ring-2 hover:ring-indigo-500/60 focus-visible:ring-2 group focus-visible:ring-indigo-400">
      <a href={linkWeb} target="_blank">
        <img className="w-full overflow-hidden" src={imgBg} alt="Aplication" />
        <div className="absolute bottom-0 right-0 left-0 h-2/3 bg-gradient-to-t from-black/90 to-black/0 pointer-events-none invisible group-hover:visible" />
        <p className="text-slate-50 absolute right-0 bottom-0 m-5 text-lg font-semibold invisible group-hover:visible leading-6 hover:text-indigo-500">
          {nameProject}
        </p>
      </a>
      <a
        className="p-2 rounded-full duration-100 invisible group-hover:visible transform hover:bg-slate-700/50 hover:ring-indigo-500 hover:ring-2 absolute bottom-0 mx-5 my-3"
        href={linkGitHub}
        target="_blank"
      >
        <Github />
      </a>
    </div>
  );
};
