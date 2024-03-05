import { Header } from "./components/header";
import { Cards } from "./components/cards";
import GitHubSearch from "./assets/GitHubSearch.png";
import PokeDex from "./assets/PokeDex.png";
import NoteList from "./assets/NoteList.png";

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="proyectos">
          <div className="grid grid-cols-3 justify-items-center gap-10 max-w-7xl mx-auto my-10">
            <Cards
              linkWeb={"https://pokedex-allan.web.app"}
              linkGitHub={"https://github.com/Allan-SS/Pokemon-react"}
              nameProject={"PokeDex"}
              imgBg={PokeDex}
            />
            <Cards
              linkWeb={"https://pokedex-allan.web.app"}
              linkGitHub={"https://github.com/Allan-SS/NotesList"}
              nameProject={"Note List"}
              imgBg={NoteList}
            />
            <Cards
              linkWeb={"https://github-search-allan.web.app"}
              linkGitHub={"https://github.com/Allan-SS/GitHub-Search"}
              nameProject={"GitHub Search"}
              imgBg={GitHubSearch}
            />
            <Cards
              linkWeb={"https://pokedex-allan.web.app"}
              linkGitHub={"https://github.com/Allan-SS/NotesList"}
              nameProject={"Note List"}
              imgBg={NoteList}
            />
            <Cards
              linkWeb={"https://github-search-allan.web.app"}
              linkGitHub={"https://github.com/Allan-SS/GitHub-Search"}
              nameProject={"GitHub Search"}
              imgBg={GitHubSearch}
            />
            <Cards
              linkWeb={"https://pokedex-allan.web.app"}
              linkGitHub={"https://github.com/Allan-SS/Pokemon-react"}
              nameProject={"PokeDex"}
              imgBg={PokeDex}
            />
          </div>
        </section>
      </main>
      <div className="flex justify-center">
        © 2024 Created and Designed by Allan De Sousa Silva. All rights
        reserved.
      </div>
    </div>
  );
};
