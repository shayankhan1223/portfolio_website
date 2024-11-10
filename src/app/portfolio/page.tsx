import React from "react";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-1 gap-10 lg:grid-cols-3 text-white h-screen bg-black p-6 lg:p-12">
        {/* First Section */}
        <section className="pt-8 md:pt-6 lg:pt-0">
          <h1 className="text-base md:text-lg lg:text-xl text-center mb-4 font-bold">
            WEB DEVELOPMENT SKILLS
          </h1>
          {[
            { skill: "HTML", width: "translate-x-[10.5rem]" },
            { skill: "CSS", width: "translate-x-[9rem]" },
            { skill: "TypeScript", width: "translate-x-28" },
            { skill: "Tailwind CSS", width: "translate-x-[8rem]" },
            { skill: "Next Js", width: "translate-x-16" },
          ].map(({ skill, width }, index) => (
            <div
              key={index}
              className="mb-4 flex items-center justify-between text-sm"
            >
              {skill}:
              <span className="relative flex items-center w-1/2">
                <span
                  className={`min-w-[10px] min-h-[10px] border-2 border-white rounded-full ${width}`}
                ></span>
                <hr className="border-[1.1px] w-full absolute left-0" />
              </span>
            </div>
          ))}
        </section>
        
        {/* Second Section */}
        <section>
          <h1 className="text-base md:text-lg lg:text-xl text-center mb-4 font-bold">
            LANGUAGES
          </h1>
          {[
            { language: "English", width: "translate-x-36" },
            { language: "Urdu", width: "translate-x-[10.5rem]" },
          ].map(({ language, width }, index) => (
            <div
              key={index}
              className="mb-4 flex items-center justify-between text-sm"
            >
              {language}:
              <span className="relative flex items-center w-1/2">
                <span
                  className={`min-w-[10px] min-h-[10px] border-2 border-white rounded-full ${width}`}
                ></span>
                <hr className="border-[1.1px] w-full absolute left-0" />
              </span>
            </div>
          ))}
        </section>

        {/* Third Section */}
        <section className="text-center">
          <h1 className="text-base md:text-lg lg:text-xl mb-4 font-bold">
            PERSONAL SKILLS
          </h1>
          <span className="block tracking-wide text-sm md:text-base">
            Creativity - Problem Solving
          </span>
          <span className="block tracking-wide text-sm md:text-base">
            Research - Adaptability
          </span>
        </section>
      </main>
    </div>
  );
};

export default Page;

