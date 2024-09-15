import ContactContent from "@/components/organisms/ContactGrid/ContactContent";

export default function ContactTemplate() {
  return (
    <div
      className={
        "w-screen h-screen bg-primary-6 border-t-[1px] border-t-primary-4 px-[20rem] py-[10rem]"
      }
    >
      <ContactContent />
    </div>
  );
}
