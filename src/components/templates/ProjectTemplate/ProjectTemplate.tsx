import ProjectContent from "@/components/organisms/ProjectGrid/ProjectContent";

export default function ProjectTemplate() {
  return (
    <div
      className={
        "w-full bg-primary-8 text-primary-2 p-20 border-t-[1px] border-t-primary-4 px-[20rem] py-[10rem] relative"
      }
    >
      <div className={`text-2xl text-black absolute top-20 left-20`}>PROJECTS</div>
      <ProjectContent />
    </div>
  );
}
