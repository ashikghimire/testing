import React from "react";
import PageLayout from "../components/PageLayout";
import { userData } from "../constants/userData";

export default function experience() {
  return (
    <PageLayout>
      <section className="bg-white dark:bg-gray-800 ">
        <div className="max-w-6xl mx-auto h-48 dark:text-gray-200">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Experience
          </h1>
        </div>
        <div className="dark:bg-gray-900 -mt-4 bg-[#F1F1F1]">
          <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
            {userData.experience.map((exp, idx) => (
              <>
                <ExperienceCard
                  title={exp.title}
                  desc={exp.desc}
                  year={exp.year}
                  company={exp.company}
                  companyLink={exp.companyLink}
                />
                {idx === userData.experience.length - 1 ? null : (
                  <div className="divided-container flex flex-col items-center -mt-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                      <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ExperienceCard({ title, desc, year, company, companyLink }) {
  return (
    <div className="relative border p-4 rounded-md shadow-xl bg-white dark:bg-gray:800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-700 font-bold dark:text-gray-400">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      {companyLink && (
        <a href={companyLink} className="text-gray-500">
          {company}
        </a>
      )}
      <p className="text-gray-600 my-2">{desc}</p>
    </div>
  );
}
