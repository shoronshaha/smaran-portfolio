"use client";

import UniqueGapAnimation from "@/components/project/UniqueGapAnimation";
import DeveloperAtWork from "@/components/project/DeveloperAtWork";
import UnanimatedProjects from "@/components/project/UnanimatedProjects";
import WorkDone from "@/components/WorkDone";
import { PROJECTS, ProjectType } from "@/context/ProjectData";
import { useCallback, useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState<ProjectType[]>(PROJECTS);

  const handleImage = useCallback(({ project_id, index }: { project_id: string, index: number }) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === project_id && project.default_image_index !== index
          ? { ...project, default_image_index: index }
          : project
      )
    )
  }, [setProjects]);

  return (
    <section className="padding-container project max-container my-12 md:my-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <UniqueGapAnimation />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <WorkDone />
        </div>
      </div>

      <UnanimatedProjects projects={projects} handleImage={handleImage} />
      
      <div className="mt-20 md:mt-32">
        <DeveloperAtWork />
      </div>
    </section>
  );
};

export default Page;
