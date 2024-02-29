import * as Separator from "@radix-ui/react-separator";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Perfil_Icon from "../assets/Perfil_Icon.jpg";
import { ChevronDown } from "lucide-react";

export const Header = () => {

const ListItem = ({ children, title, reference}) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className='focus:shadow-[0_0_0_2px] focus:shadow-indigo-400 hover:bg-indigo-200 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'
        href={reference}
        target="_blank"
      >
        <div className=" mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className=" leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
);

  return (
    <div className="flex items-center text-lg justify-between my-7 mx-auto max-w-full px-14 py-4 rounded-xl w-10/12 ">
      {/* bg-zinc-800 shadow-xl */}
      <div className="flex items-center  h-5 gap-5">
        <button className="leading-5 hover:text-indigo-500">Home</button>
        <Separator.Root
          className="bg-zinc-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px rotate-12"
          decorative
          orientation="vertical"
        />
        <button className="leading-5 hover:text-indigo-500">Habilits</button>
        <Separator.Root
          className="bg-zinc-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px rotate-12"
          decorative
          orientation="vertical"
        />
        <button className="leading-5 hover:text-indigo-500">About</button>
        <Separator.Root
          className="bg-zinc-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px rotate-12"
          decorative
          orientation="vertical"
        />
        <button className="leading-5 hover:text-indigo-500">Contact</button>
      </div>
      <NavigationMenu.Root className="flex items-center justify-center relative z-10">
        <NavigationMenu.List className="flex">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex hover:text-indigo-500 duration-300 group leading-none outline-none select-none items-center justify-center">
              <div className="flex items-center gap-5">
                {/* <img
                  src={Perfil_Icon}
                  alt="Perfil_Icon"
                  className="h-14 w-14 outline shadow-lg rounded-full"
                /> */}
                <p className="leading-5 text-lg">Allan Silva</p>
              </div>
              <ChevronDown
                className="size-3 mx-1 mr-2 relative top-px transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className=" absolute w-full sm:w-auto text-zinc-600">
              <ul className="  gap-x-2.5 p-5 sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                <ListItem
                  reference="https://github.com/Allan-SS"
                  title="GitHub"
                >
                  Hello World
                </ListItem>
                <ListItem
                  reference="https://www.linkedin.com/in/allan-sousa-silva/?locale=es_ES"
                  title="Linkedin"
                >
                  Hello World
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-2.5 w-2.5 rotate-[45deg] rounded-tl-[2px] bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};
