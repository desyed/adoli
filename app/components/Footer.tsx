import Logo from "@/components/Logo";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const preFilledText =
    "Check out Adoli, an awesome project for building and managing popups with no-code editor. Project is created by @dev_syedshihab.";

  return (
    <footer className="flex items-center flex-wrap py-3 border-t border-secondary/10 justify-between mx-[5%]">
      <p>
        Built by{" "}
        <Link
          className=" underline text-brand"
          href={"https://github.com/desyed"}
        >
          Niaz Moshed
        </Link>
      </p>
      <h2>Proudly Open Source</h2>
      <div className="flex items-center gap-7">
        <p className="text-xs">Share:</p>
        <Link
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            preFilledText
          )}`}
          target="_blank"
        >
          <Twitter size={20} />
        </Link>
        <Link href="https://github.com/desyed/adoli" target="_blank">
          <Github size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
