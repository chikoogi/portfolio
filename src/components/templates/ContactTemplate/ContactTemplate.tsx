import ContactContent from "@/components/organisms/ContactGrid/ContactContent";

export default function ContactTemplate() {
  return (
    <div
      className={"w-screen h-screen bg-primary-6"}
      // style={{ backgroundImage: `url('/assets/images/noise-background.jpg')` }}
    >
      <ContactContent />
    </div>
  );
}
