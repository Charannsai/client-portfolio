"use client";

export default function Profile() {
  return (
    <div className="flex flex-col gap-4 text-sm md:text-[15px] text-portfolio-text/95 leading-relaxed font-normal max-w-xl">
      <p>
        I'm a <span className="font-semibold text-portfolio-text">MERN Stack Developer</span> and <span className="font-semibold text-portfolio-text">Software Engineer</span> building functional web applications, full-stack systems, and AI-powered platforms. Passionate about crafting minimal, high-utility tools that bring clarity and efficiency to users.
      </p>

      <p className="text-portfolio-muted leading-relaxed">
        I love minimal aesthetics, writing clean and modular code, exploring data analysis tools, and learning new frontend and backend architectures.
      </p>
    </div>
  );
}
