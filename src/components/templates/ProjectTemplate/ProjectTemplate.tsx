import ProjectContent from "@/components/organisms/ProjectGrid/ProjectContent";

export default function ProjectTemplate() {
  return (
    <div
      className={
        "w-screen bg-primary-6 text-primary-2 p-20 border-b-[1px] border-b-primary-4 px-[20rem] py-[10rem]"
      }
    >
      <ProjectContent />
    </div>
  );
}
