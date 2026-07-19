import React from "react";
import SketchyLine from "./SketchyLine";
// Assuming SketchyLine is available
// import SketchyLine from "./SketchyLine";

export default function Footer() {
  return (
    <footer className="footy w-full pb-8 px-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
            <span className="handwritten text-xl text-gray-800">
              Latest commit
            </span>
            <span className="code-font text-sm text-gray-500">&rarr;</span>
          </div>

          <div className="flex items-start gap-3 border border-1 p-10">
            <div className="bg-[#e0dcd1] px-2 py-1 rounded text-sm code-font text-gray-700 border border-[#d3cfc4]">
              a7f3b2e
            </div>

            <div className="flex flex-col">
              <span className="code-font text-sm text-gray-800">
                Update: portfolio design tweaks
              </span>

              <span className="code-font text-xs text-[#527d51] mt-1">
                2 days ago
              </span>
            </div>
          </div>
        </div>

        <div className="relative inline-block">
          <span className="handwritten text-2xl text-gray-800">
            "It worked on my PC"
            <br />
            Famous words by a student
          </span>

          <SketchyLine className="absolute -bottom-2 left-0 w-full h-[5px] text-gray-400" />
        </div>

        <div className="flex flex-col mt-2">
          <span className="code-font text-xs text-gray-900">
            © 2026 Masie Junior Seremu. All rights reserved.
          </span>
          <span className="code-font text-xs text-gray-900 mt-1">
            Built with ☕️ and lots of curiosity.
          </span>
        </div>
      </div>
    </footer>
  );
}
