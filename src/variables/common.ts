import uwhoo01 from "@/assets/uwhoo/image01.png";
import uwhoo02 from "@/assets/uwhoo/image02.png";
import uwhoo03 from "@/assets/uwhoo/image03.png";
import uwhoo04 from "@/assets/uwhoo/image04.png";
import uwhoo05 from "@/assets/uwhoo/image05.png";
import uwhoo06 from "@/assets/uwhoo/image06.png";
import uwhoo07 from "@/assets/uwhoo/image07.png";
import uwhoo08 from "@/assets/uwhoo/image08.png";
import uwhoo09 from "@/assets/uwhoo/image09.png";
import uwhoo10 from "@/assets/uwhoo/image10.png";
import cal01 from "@/assets/calculator/image01.png";
import portfolio01 from "@/assets/portfolio/image01.png";

export const PROJECTS_LIST = [
  {
    name: "Solomon BI Tool",
    period: "2022.05 ~ 현재",
    tasks: [""],
    description: "",
    skills: [
      "React",
      "Typescript",
      "MobX",
      "Zustand",
      "Webpack",
      "Vite",
      "SCSS",
      "emotion",
      "Yarn-berry",
    ],
    responsibilities: [
      "BI 플랫폼 ≫ 시각화 모듈 개발",
      "D3, Plotly 를 이용한 17종 차트(Bar, Line, Boxplot, Pie, Radar 등등) 개발",
      "플랫폼 홈화면 및 시각화 관련 대시보드 개발",
      "공통 컴포넌트를 위한 Atomic 컴포넌트 개발",
    ],
  },
  {
    name: "Parkinson (mPDia, mN1q) / Stroke (cASPECTS, cELVO, cHS)",
    period: "2021.03 ~ 2022.04",
    skills: ["React", "Recoil", "Typescript", "Webpack", "SCSS", "MariaDB"],
    responsibilities: [
      "Dicom 의료 영상을 2D/3D로 출력하는 기능 개발",
      "Cornerstone, itk, vtk 등의 라이브러리를 사용해 커스텀 기능 개발",
      "공통 Component Module 개발",
      "IndexedDB를 사용하여 영상 재로딩 이미지 단축",
    ],
  },
  {
    name: "국립 암센터",
    period: "2020.09 ~ 2021.01",
    skills: ["Spring Framework", "HTML", "CSS", "Javascript", "Java", "SQL(MariaDB)", "C#", "D3"],
    responsibilities: [
      "SHA256 해시 알고리즘을 이용해 키 암호화 파일 변환 프로그램 제작",
      "D3 차트를 활용해 mutation, oncoprint 등의 차트 개발",
      "관리 페이지 제작",
    ],
  },
  {
    name: "아산병원 정밀의료플랫폼 프로젝트",
    period: "2019.10 ~ 2020.09",
    skills: [
      "Spring Framework",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "MariaDB",
      "Oracle",
      "Plotly",
      "D3",
    ],
    responsibilities: [
      "암종 선택 Collapse Tree 차트 개발 및 검색 기능 구현",
      "Plotly를 이용한 다양한 차트 시각화 및 필터 기능 개발",
      "암종 관련 API 사용해 데이터 출력 및 화면 개발",
      "관리자 페이지 및 권한, 사용자, 로그 관리 기능 개발",
      "플랫폼 유지보수",
    ],
  },
  {
    name: "빅센 SA 패키징 자동화 [Elasticsearch 버전 자동화]",
    period: "2019.03 ~ 2019.05",
    skills: ["CentOS", "Docker", "MariaDB", "Elasticsearch", "logstash", "Java"],
    responsibilities: [
      "대용량 XML 데이터를 MariaDB로 파싱",
      "logstash를 이용해 Elasticsearch로 인덱싱",
    ],
  },
  {
    name: "건국대 BI 포털 프로젝트",
    period: "2018.12 ~ 2019.02",
    skills: ["Spring Framework", "HTML", "CSS", "Javascript", "jQuery", "MariaDB"],
    responsibilities: [
      "사용자 공지사항 및 Q&A 게시판 개발",
      "관리자 페이지 및 로그 관리 기능 개발",
    ],
  },
];

export const CAREER_LIST = [
  {
    period: "2022. 05 ~ 재직중",
    company: "티맥스에이앤씨 연구소",
    position: "연구원 팀원",
    role: "프론트엔드개발자",
    description: [
      "BI 제품 개발 프로젝트에서 Front-End를 담당",
      "React를 기반으로 개발, 주로 Plotly, d3를 이용한 시각화 모듈 개발",
      "Atomic 디자인으로 폴더구조 구성",
      "Mobx를 이용한 상태관리",
      "Gitlab 정책 수립 및 Branch 관리",
    ],
    projects: ["Hyperdata 시각화 모듈 개발", "Solomon BI 제품 개발"],
  },
  {
    period: "2021. 03 ~ 2022. 04 (1년 2개월)",
    company: "휴런 개발본부 FE팀",
    position: "전임연구원",
    role: "웹개발자, FE, React",
    description: [
      "A.I. 기반 영상진단기술 분석 솔루션 프로젝트에서 Front-End 담당",
      "React를 기반으로 DICOM 의료 영상 파일 출력 (cornerstone, itk, vtk 사용)",
      "공통 Component Module 개발",
    ],
    projects: ["Parkinson (mPDia, mN1q) 제품 개발", "Stroke (cASPECTS, cELVO, cHS) 제품 개발"],
  },
  {
    period: "2017. 12 ~ 2021. 02 (3년 3개월)",
    company: "소프트센 빅데이터기술팀",
    position: "사원",
    role: "웹개발자, HTML, JavaScript, SpringFramework",
    description: [
      "Spring Framework 기반 웹어플리케이션 개발",
      "병원 내 빅데이터 시각화 작업 (D3, Plotly, JqxGrid 사용)",
      "Java로 Controller/Service 개발 및 타 시스템 연동",
      "Linux 서버 관리 및 운영",
    ],
    projects: [
      "아산병원 정밀의료 통합 플랫폼 구축",
      "건국대 BI 포털 구축",
      "경북대, 울산대 CDW 구축",
      "경북대, 울산대 레지스트리 구축",
    ],
  },
];

export const PERSONAL_PROJECTS_LIST = [
  {
    name: "Uwhoo OTT Review Site",
    period: "2023.09 ~ 2024.02",
    teamCount: 5,
    team: [
      { role: "FE", people: 1 },
      { role: "BE", people: 2 },
      { role: "기획자", people: 1 },
      { role: "디자이너", people: 1 },
    ],
    skills: ["React", "Typescript", "Webpack", "SCSS", "Emotion", "Yarn-berry"],
    description:
      "UWHOO는 OTT 컨텐츠에 대한 정보를 통합해서 제공해주는 AWS 기반의 웹 서비스입니다. Netflix, Disney+, Wavve, Apple TV 등의 OTT에서 공개된 시리즈 컨텐츠들에 대한 정보와 리뷰 기능을 제공합니다. 또한 사용자는 Google, Naver, Kakao 계정을 통해 간편 로그인이 가능하며, 개인별 마이페이지 화면에서 Favorite 컨텐츠 및 리뷰를 관리할 수 있으며 개인 Report를 볼 수 있습니다.",
    description_detail: [
      "UWHOO는 OTT 컨텐츠에 대한 정보를 통합해서 제공해주는 AWS 기반의 웹 서비스입니다. Netflix, Disney+, Wavve, Apple TV 등의 OTT에서 공개된 시리즈 컨텐츠들에 대한 정보와 리뷰 기능을 제공합니다. 또한 사용자는 Google, Naver, Kakao 계정을 통해 간편 로그인이 가능하며, 개인별 마이페이지 화면에서 Favorite 컨텐츠 및 리뷰를 관리할 수 있으며 개인 Report를 볼 수 있습니다.",
      "업무에 도움될 수 있는 기술들을 향상시키고자 “리뷰사이트” 라는 아이템으로 직접 프로젝트 인원을 모집했으며, 총 5명이서 약 6개월간 진행한 프로젝트입니다.  AWS amplify를 사용해 호스팅하였으며 도메인을 구매해 짧지만 6개월간 서비스를 배포해서 운영하였습니다.",
      "FE 개발을 혼자 모든 화면과 컴포넌트를 구현하면서 Atomic한 컴포넌트 만드는 능력, 컴포넌트 구조화 하는 방법, 평소 부족하다고 생각했던 Animation, Transition 과 같은 CSS 활용법 등을 배울 수 있었습니다. 또한 프로젝트 기간동안 코드실력 뿐만아니라 다른 파트와의 협업하는 역량 또한 향상했다고 생각합니다.",
    ],
    tasks: [
      "FE 전체 개발: 프로젝트 내 모든 화면과 컴포넌트를 혼자서 개발하고, Atomic 디자인 패턴을 적용하여 유지보수성을 높임.",
      "간편 로그인 기능: Google, Naver, Kakao 계정 간편 로그인 기능을 구현하여 사용자 편의성 강화.",
      "AWS Amplify 배포: AWS Amplify를 통해 배포 환경을 설정하고, 지속적인 배포 및 도메인 관리 작업을 수행.",
    ],
    repo: "https://github.com/uwhoo-review/side-review/tree/feature/frontend-main",
    images: [
      uwhoo01,
      uwhoo02,
      uwhoo03,
      uwhoo04,
      uwhoo05,
      uwhoo06,
      uwhoo07,
      uwhoo08,
      uwhoo09,
      uwhoo10,
    ],
  },
  {
    name: "치국이의 퇴근계산기",
    period: "2024.04 - 2024.05",
    teamCount: 1,
    team: [{ role: "FE", people: 1 }],
    description: "유연근무제를 사용하는 직원을 위한 출퇴근 시간 계산 크롬 확장 프로그램입니다.",
    description_detail: [
      "유연근무제를 사용하는 직원을 위한 출퇴근 시간 계산 크롬 확장 프로그램입니다.",
      "평소 회사 시스템에서 출/퇴근 시간을 보는 방법이 복잡하고, 시간계산을 별도로 해야하는 불편함이 있어서 이를 해결하고자 간편하게 제작했습니다.",
      "크롬 웹스토어에 등록되어있으며 실제로 많은 인원은 아니지만 제가 속해있는 실 인원들이 다수 사용하고 있습니다. 어려운 기술스택을 사용한것은 아니지만 직접 크롬 웹스토어에 등록하고 실제 유저가 편하게 사용한다는 점이 보람된 서비스입니다.",
    ],
    tasks: [
      "확장 프로그램 개발: JavaScript와 HTML을 사용해 간편하게 사용할 수 있는 출퇴근 시간 계산기 기능을 개발.",
      "크롬 웹스토어 등록: 크롬 웹스토어에 등록하여 실제 사용자 피드백을 반영하고, 서비스 성능 및 기능을 개선.",
    ],
    skills: ["HTML", "JavaScript"],
    repo: "https://github.com/chikoogi/tmax-calculator",
    images: [cal01],
  },
  {
    name: "Portfolio Web Site",
    period: "2024.09 - 2024.09",
    teamCount: 1,
    team: [{ role: "FE", people: 1 }],
    description: "현재 보고있는 사이트 - 포트폴리오 용도로 제작한 웹사이트입니다.",
    description_detail: [
      "포트폴리오 용도로 제작한 웹사이트입니다.",
      "Next.js 14버전을 공부할 목적으로 개발하였으며 지금까지 개발한 컴포넌트를 활용해서 별도의 UI 라이브러리 없이 개발하였습니다.",
    ],
    tasks: [
      "반응형 디자인: Tailwind CSS를 사용해 반응형 UI를 구현하고, 다양한 해상도에서 최적화된 사용자 경험을 제공.",
      "Next.js 기반 웹사이트 구축: 컴포넌트를 활용하여 Next.js 14를 기반으로 포트폴리오 사이트를 개발.",
    ],
    skills: ["Next.js", "React", "Typescript", "Tailwind CSS"],
    repo: "https://github.com/chikoogi/portfolio",
    images: [portfolio01],
  },
];
