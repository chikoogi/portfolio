import ContactContent from "@/components/organisms/ContactGrid/ContactContent";

export default function ContactTemplate() {
  return (
    <div
      className={
        "w-full h-screen bg-primary-6 border-t-[1px] border-t-primary-4 px-[20rem] py-[10rem] text-primary-4 "
      }
    >
      <div className={"w-full text-center text-primary-3 text-2xl"}>CONTACT</div>
      <ContactContent />
    </div>
  );
}
