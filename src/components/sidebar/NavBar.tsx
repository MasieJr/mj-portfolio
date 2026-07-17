import React from "react";
import SketchyLine from "../SketchyLine";
import {
  BriefcaseIcon,
  CodeIcon,
  HomeIcon,
  SendIcon,
  ToolCaseIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import StickyNote from "../StickyNote";

export default function Sidebar() {
  const link = [
    {
      id: "linkedIn",
      file: "linkedIn.svg",
      ref: "https://linkedin.com/in/MasieJr",
    },
    {
      id: "github",
      file: "github.svg",
      ref: "https://github.com/MasieJr",
    },
    {
      id: "email",
      file: "email.svg",
      ref: "mailto:masie@masiseremu.co.za",
    },
  ];
  const tabs = [
    {
      id: "#home",
      label: "Home",
      subLabel: "Start here",
      icon: <HomeIcon />,
      active: true,
    },
    {
      id: "#about",
      label: "A little about me",
      subLabel: "My story & values",
      icon: <UserIcon />,
      active: false,
    },
    {
      id: "#projects",
      label: "Things I've built",
      subLabel: "Projects & case studies",
      icon: <CodeIcon />,
      active: false,
    },
    {
      id: "#experience",
      label: "Places I've worked",
      subLabel: "Experience & journey",
      icon: <BriefcaseIcon />,
      active: false,
    },
    {
      id: "#skills",
      label: "What I enjoy building with",
      subLabel: "Skills & tools",
      icon: <ToolCaseIcon />,
      active: false,
    },
    {
      id: "#connect",
      label: "Let's connect",
      subLabel: "Get in touch",
      icon: <SendIcon />,
      active: false,
    },
  ];

  return (
    <div className="w-[300px] flex flex-col pt-16 pb-10 shadow-[10px_0_15px_-5px_rgba(0,0,0,0.3)]">
      {/* Header Section */}
      <div className="px-10">
        <h1 className="handwritten text-7xl text-gray-900 leading-none">
          MJ <span className="text-[#e9420b]">.</span>{" "}
        </h1>
        <p className="code-font mt-4 text-xs uppercase tracking-[0.2em] text-gray-600">
          Software Engineer
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 px-10">
        <SketchyLine className="w-full h-[4px] text-[#e9420b] opacity-50" />
      </div>

      {/* Navigation Loop */}
      <nav className="flex flex-col gap-8 px-10 mt-4">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={tab.id}
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="mt-1 text-gray-800 group-hover:text-gray-500 transition-colors">
              {tab.icon}
            </div>

            <div className="flex flex-col">
              <div className="relative inline-block w-max">
                <span className="heading-font text-xl text-gray-900 group-hover:text-gray-600 transition-colors">
                  {tab.label}
                </span>

                {tab.active && (
                  <SketchyLine className=" -bottom-1 left-0 w-full h-[6px] text-[#e9420b] -z-10" />
                )}
              </div>

              <span className="code-font text-xs text-gray-500 mt-1">
                {tab.subLabel}
              </span>
            </div>
          </a>
        ))}

        <StickyNote />

        <div className="space-y-3">
          <div className="flex flex-row items-center space-x-3">
            <div className="bg-red-500 w-3 h-3  rounded-full"></div>
            <p className="handwritten text-2xl">
              Available for new Opportunies{" "}
            </p>
          </div>
          <p className="code-font">Lets buld something impectful</p>
        </div>

        <div className="flex flex-row justify-around w-[150]">
          {link.map((l) => (
            <a
              key={l.id}
              href={l.ref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={l.file} alt={l.id} width={30} height={30} priority />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
