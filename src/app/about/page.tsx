import React from "react";
import Header from "@/components/Header";

const page = () => {
  return (
    <div>
      <Header />
      <main className="text-white h-screen xs:bg-black ">
    

        <div className="xs:text-center lg:absolute lg:left-32 lg:text-left">
          <h1 className="border-b inline-block font-bold xs:text-3xl xs:text-center xs:pt-20 mb-3 lg:text-5xl">ABOUT</h1>
          <span className="xs:block xs:text-xs xs:tracking-tighter ">
            shayankhan760000@gmail.com
          </span>
        </div>
        <div className="lg:absolute lg:left-12 lg:top-48 lg:max-w-[27rem]">
          <p className="xs:mx-10 xs:text-center xs:mt-14 text-sm xs:leading-snug lg:relative lg:left-5 lg:text-base lg:leading-tight">
            I am a skilled front-end developer with expertise in{" "}
            <strong className="">HTML, CSS, Tailwind CSS and Typescript</strong>
            . My passion lies in creating responsive and visually appealing web
            interfaces. I have hands-on experience with Next.js, building fast
            and modern web applications. With a deep understanding of web
            development principles, I focus on optimizing user experience and
            performance. I continuously seek to learn new technologies and
            enhance my skills in the evolving world of front-end development. My
            goal is to stay at the forefront of web development trends and
            deliver high-quality digital solutions.
          </p>
        </div>
      
      </main>
    </div>
  );
};

export default page;
