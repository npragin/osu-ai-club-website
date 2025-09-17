import Hamburger from "hamburger-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="z-50">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
      {open && (
        <div className="absolute top-24 right-4 w-[60vw] bg-slate-800 flex flex-col p-10 space-y-2 z-40 rounded-md border-2">
          <a
            href={"/about/"}
            className="hover:bg-white hover:bg-opacity-10 px-2 py-2 rounded-md"
          >
            about
          </a>
          <a
            href={"/resources/"}
            className="hover:bg-white hover:bg-opacity-10 px-2 py-2 rounded-md"
          >
            project workshop
          </a>
          <a
            href="https://discord.gg/cCtv2RgAJ8"
            className="border-2 px-4 py-1 rounded-md truncate hover:bg-white hover:bg-opacity-10"
          >
            join us!
          </a>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
