import ProjectContent from "@/components/organisms/ProjectGrid/ProjectContent";

export default function ProjectTemplate() {
  return (
    <div
      className={
        "w-screen bg-primary-3 text-primary-2 p-20 border-t-[1px] border-t-primary-4 px-[20rem] py-[10rem] font-sans"
      }
    >
      <ProjectContent />
    </div>
  );
}
