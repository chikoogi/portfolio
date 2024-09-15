export default function IntroductionTemplate() {
  return (
    <div
      className={"w-screen h-screen "}
      style={{ backgroundImage: `url('/assets/images/noise-background.jpg')` }}
    >
      <div className={"flex justify-center items-center w-full h-full flex-col"}>
        <div className={"text-center text-6xl mb-10"}>Portfolio</div>
        <div className={"text-center"}>
          <p className="text-sm leading-8 text-gray-300">
            안녕하세요! 프론트엔드 개발자로서 사용자 경험을 향상시키는 데 중점을 두고 웹
            애플리케이션을 개발하고 있습니다.
            <br />
            React를 주요 기술 스택으로 삼아, 최신 웹 트렌드와 디자인 패턴에 대한 깊은 이해를
            바탕으로 혁신적인 솔루션을 제공하고 있습니다.
            <br />
            코드 품질과 지속적인 학습을 중요시하며, 새로운 기술과 도구를 활용하여 끊임없이 성장하고
            있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
