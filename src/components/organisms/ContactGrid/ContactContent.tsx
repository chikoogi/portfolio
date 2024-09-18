import Image from "next/image";

export default function ContactContent() {
  return (
    <div className={"w-full h-full"}>
      <div
        className={"w-full h-full flex flex-col justify-center items-center text-primary-4 gap-16"}
      >
        <div className={"flex flex-col justify-center items-center gap-2 font-bold"}>
          <p>THANK YOU</p>
          <p>FOR WATCHING</p>
        </div>
        <div className={"flex flex-col justify-center items-center"}>-</div>
        <div className={"flex flex-col justify-center items-center gap-2 text-[14px]"}>
          <p>
            <b>NAME </b>
            <span>Kim Ji Hun</span>
          </p>
          <p>
            <b>BIRTH </b>
            <span>March 1991</span>
          </p>
          <p>
            <b>JOB </b>
            <span>FE Development</span>
          </p>
          <p>
            <b>E-MAIL </b>
            <span>ehthfdhkd@naver.com</span>
          </p>
          <p className={"mt-4 flex gap-4"}>
            <a href={"https://github.com/chikoogi"} target={"_blank"}>
              <Image
                src="/assets/images/iconGithub.svg"
                width="32"
                height="32"
                title={"GitHub"}
                alt={""}
              />
            </a>
            <a
              href={"https://hurricane-limburger-3df.notion.site/b7bae42374304854b3e4eb7e7d9d3829"}
              target={"_blank"}
            >
              <Image
                src="/assets/images/iconNotion.svg"
                width="32"
                height="32"
                title={"Notion"}
                alt={""}
              />
            </a>
            <a href={"/assets/files/portfolio_document_202409.pdf"} target={"_blank"}>
              <Image
                src="/assets/images/iconPortfolio.svg"
                width="32"
                height="32"
                title={"Portfolio Document"}
                alt={""}
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
