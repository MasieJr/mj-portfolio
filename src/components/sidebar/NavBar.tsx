"use client";
import React, { useEffect, useState } from "react";
import SketchyLine from "../SketchyLine";
import { CodeIcon, HomeIcon, ToolCaseIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import StickyNote from "../StickyNote";

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
    id: "#projects",
    label: "Things I've built",
    subLabel: "Projects & case studies",
    icon: <CodeIcon />,
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
    id: "#about",
    label: "A little about me",
    subLabel: "My story & values",
    icon: <UserIcon />,
    active: false,
  },
];
export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = tabs
        .map((tab) => document.querySelector(tab.id))
        .filter((el) => el !== null);

      let currentActiveId = activeTab;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150) {
          currentActiveId = tabs[i].id;
          break;
        }
      }

      if (currentActiveId !== activeTab) {
        setActiveTab(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);
  return (
    <div className=" w-[300px] h-screen sticky top-0 hidden md:flex flex-col pt-10  shadow-[10px_0_15px_-5px_rgba(0,0,0,0.3)]">
      {/* Header Section */}
      <div className="px-10">
        <h1 className="handwritten text-7xl text-gray-900 leading-none">
          MJ <span className="text-[#e9420b]">.</span>{" "}
        </h1>
        <p className="code-font mt-4 text-xs uppercase tracking-[0.2em] text-gray-600">
          Software Engineer
        </p>
      </div>

      <div className="my-8 px-10">
        <SketchyLine className="w-full h-[4px] text-[#e9420b] opacity-50" />
      </div>

      <nav className="flex flex-col gap-8 px-10 mt-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <a
              key={tab.id}
              href={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-start gap-4 group cursor-pointer"
            >
              <div
                className={`mt-1 transition-colors ${
                  isActive
                    ? "text-[#e9420b]"
                    : "text-gray-800 group-hover:text-[#e9420b]"
                }`}
              >
                {tab.icon}
              </div>

              <div className="flex flex-col">
                <div className="relative inline-block w-max">
                  <span
                    className={`heading-font text-xl transition-colors ${
                      isActive
                        ? "text-[#e9420b]"
                        : "text-gray-900 group-hover:text-gray-600"
                    }`}
                  >
                    {tab.label}
                  </span>

                  {isActive && (
                    <SketchyLine className="absolute -bottom-1 left-0 w-full h-[6px] text-[#e9420b] -z-10" />
                  )}
                </div>

                <span className="code-font text-xs text-gray-500 mt-1">
                  {tab.subLabel}
                </span>
              </div>
            </a>
          );
        })}

        <div className="space-y-3">
          <div className="flex flex-row items-center space-x-3">
            <div className="bg-green-500 w-3 h-3  rounded-full"></div>
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
