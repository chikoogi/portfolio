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
import portfolio02 from "@/assets/portfolio/image02.png";
import portfolio03 from "@/assets/portfolio/image03.png";
import portfolio04 from "@/assets/portfolio/image04.png";
import portfolio05 from "@/assets/portfolio/image05.png";
import solomon01 from "@/assets/company/image (3).png";
import hyperRn01 from "@/assets/company/image (5).png";
import hyper01 from "@/assets/company/image (8).png";
import heuron01 from "@/assets/company/image (9).png";
import soft01 from "@/assets/company/image (10).png";

export const TMAX_PROJECT_LIST = [
  {
    name: "Solomon BI Tool",
    period: "2023.12 - 2024.09",
    tasks: [
      "MVP 및 데모 화면 개발: 데모용 화면과 MVP 대시보드 화면을 설계하고 개발하여 솔루션의 필수 서비스를 전달 및 구현 화면 제공.",
      "상태 관리: MobX와 Zustand를 도입해 상태 관리 문제를 해결하고, 성능 최적화 및 코드 가독성을 향상.",
      "Drag & Drop 기능: react-dnd를 사용하여 차트와 위젯을 자유롭게 배치할 수 있는 Drag & Drop 대시보드 기능을 구현.",
      "Atomic Design 도입: 컴포넌트 재사용성을 극대화하기 위해 Atomic Design 구조를 도입하고, 유지보수성과 확장성을 개선.",
      "DashBoard / App  개발: Floating Pagination, Chart Page 등의 주요 화면 컴포넌트 개발.",
    ],
    description:
      "Solomon은 기업 데이터를 통합 분석하고, 맞춤형 대시보드를 제공하는 BI Tool입니다. 사용자는 시각화된 데이터를 통해 실시간으로 비즈니스 의사결정을 내릴 수 있습니다.",
    skills: [
      "React",
      "TypeScript",
      "MobX",
      "Zustand",
      "Plotly",
      "D3.js",
      "React-dnd",
      "Webpack",
      "Vite",
      "SCSS",
      "Emotion",
      "Tanstack-query",
    ],
    images: [solomon01],
  },
  {
    name: "ERP Platform 개발 지원",
    period: "2023.10 - 2023.11",
    tasks: [
      "프론트엔드 개발 지원: ERP 시스템 구축을 위한 프론트엔드 전반에 대한 지원을 제공.",
      "지원 인력 선별 및 Leading: ERP 프로젝트를 위한 프론트엔드 개발 인력 선별 및 팀을 이끌며 프로젝트의 방향성을 설정.",
      "프로젝트 Repository 및 환경 세팅: Git 기반 프로젝트 Repository를 구성하고, 환경 세팅을 통해 초기 개발 환경을 구축.",
      "인사 및 재무 모듈 개발: ERP 시스템의 인사 관리 및 재무 관리 모듈의 프론트엔드 화면을 설계하고 개발.",
    ],
    description:
      "기업 내 ERP 시스템 구축을 위한 프론트엔드 개발 지원 프로젝트로, 인사 및 재무 관련 모듈의 화면을 개발하고 프로젝트 초기 세팅을 진행하였습니다.",
    skills: ["React", "TypeScript", "Tanstack-query", "Webpack", "MobX"],
    images: [],
  },
  {
    name: "HyperData Renewal 시각화 모듈",
    period: "2022.11 - 2023.09",
    tasks: [
      "프로젝트 세팅 및 전략 수립: React, yarn-berry, Tanstack-Query 등의 도구를 사용해 프로젝트 기본 환경을 세팅하고, Git 브랜치 및 MR 전략을 수립하여 협업 효율성을 높임.",
      "차트 개발 전환: 기존 Plotly 기반의 차트를 D3.js로 전환하여 성능과 사용성을 개선하고, 더 복잡한 차트 상호작용을 구현.",
      "대시보드 및 편집기 개발: Dashboard, Editor(사이드바, 설정 모달), 미리보기 화면 전반을 개발하고, 사용자 맞춤형 시각화 환경을 제공.",
      "다국어 지원(i18n): 한/영 다국어 지원을 추가하고, 번들링 최적화 작업을 통해 글로벌 배포를 지원.",
      "타팀 지원(SQL Editor): SQL 모듈 개발팀에 FE 기획 검토 및 피드백 제공뿐만 아니라 화면 개발 지원.",
    ],
    description:
      "기존 HyperData 플랫폼의 리뉴얼 프로젝트로, 리뉴얼 TF팀에 참가하여 새로운 UI/UX 화면으로 최적화를 목표로 진행되었습니다.",
    skills: [
      "React",
      "TypeScript",
      "Plotly",
      "D3.js",
      "MobX",
      "Tanstack-Query",
      "Webpack",
      "yarn-berry",
      "i18n",
      "Emotion",
      "react-beautiful-dnd",
    ],
    images: [hyperRn01],
  },
  {
    name: "HyperData 빅데이터 플랫폼",
    period: "2022.05 - 2022.10",
    tasks: [
      "Chart 개발: Plotly를 활용하여 HeatMap, BoxPlot, Radar, Combo, Waterfall 차트를 개발하여 복잡한 데이터를 직관적으로 표현.",
      "시각화 기능 강화: D3.js를 사용해 Word Cloud, Network Diagram 같은 복잡한 데이터 시각화 기능을 개발.",
      "대시보드 기능 개발: 글로벌 필터, 미리보기 및 대시보드 공유 기능을 추가해 데이터 분석 및 결과 공유를 용이하게 함.",
      "차트 스타일링: 사용자 정의가 가능한 차트 Title, Label, Font 등의 스타일링 기능을 개발하여 시각적 맞춤화 제공.",
    ],
    description:
      "HyperData는 다양한 유형의 데이터를 실시간으로 분석하여 비즈니스 의사결정을 돕는 빅데이터 통합 플랫폼입니다. 사용자가 원하는 데이터를 실시간으로 시각화하고 대시보드 기능을 통해 공유할 수 있습니다.",
    skills: ["React", "TypeScript", "Plotly", "D3.js", "SCSS", "Webpack", "Git"],
    images: [hyper01],
  },
];

const HEURON_PROJECT_LIST = [
  {
    name: "Parkinson (mPDia, mN1q) / Stroke (cASPECTS, cELVO, cHS) 프로젝트",
    period: "2021.03 - 2022.04",
    tasks: [
      "의료 영상 출력: Cornerstone, ITK, VTK 등의 DICOM 관련 라이브러리를 사용하여 2D/3D 의료 영상 출력 기능을 개발하고, 사용자 맞춤형 커스텀 기능을 추가.",
      "공통 컴포넌트 모듈 개발: 다른 제품에서도 사용할 수 있는 공통 컴포넌트 모듈을 개발하여 코드의 재사용성을 극대화.",
      "영상 로딩 최적화: IndexedDB를 사용해 영상 재로딩 시간을 크게 단축하여 사용자 경험을 개선.",
      "실시간 데이터 연동: WebSocket(StompJS)를 사용해 실시간 워크리스트 연동 기능을 구현.",
    ],
    description:
      "의료 영상 분석 솔루션으로, 2D/3D 의료 영상을 시각화하고 사용자 맞춤형 분석 기능을 제공합니다.",
    skills: [
      "React",
      "Recoil",
      "TypeScript",
      "Cornerstone",
      "ITK",
      "VTK",
      "SCSS",
      "Webpack",
      "MariaDB",
      "IndexedDB",
      "StompJS (WebSocket)",
    ],
    images: [heuron01],
  },
];

const SOFTCEN_PROJECT_LIST = [
  {
    name: "국립 암센터",
    period: "2020.09 - 2021.01",
    tasks: [
      "차트 개발: D3.js를 사용해 mutation, oncoprint 등의 차트를 개발하여 연구자가 암 유전자를 쉽게 시각화하고 분석할 수 있도록 지원.",
      "데이터 암호화: SHA256 해시 알고리즘을 사용해 키 암호화 파일을 변환하는 프로그램을 개발하여 데이터 보안성을 강화.",
      "관리 페이지 개발: 연구 데이터 및 사용자 관리 기능을 제공하는 관리 페이지를 개발.",
    ],
    description:
      "암 연구 데이터를 시각화하고 분석할 수 있는 플랫폼으로, 연구자가 원하는 데이터를 쉽게 시각화할 수 있도록 지원합니다.",
    skills: [
      "Spring Framework",
      "HTML",
      "CSS",
      "JavaScript",
      "D3.js",
      "Java",
      "SQL (MariaDB)",
      "C#",
    ],
    images: [],
  },
  {
    name: "아산병원 정밀의료플랫폼 프로젝트",
    period: "2019.10 - 2020.09",
    tasks: [
      "시각화 차트 개발: D3.js를 사용해 암종 선택 Collapse Tree 차트를 개발하고, 데이터 연동 및 검색 기능을 구현.",
      "Plotly 기반 차트 개발: Plotly를 이용해 Pie, Bar, Grid 차트 시각화 화면을 개발하고, 차트별 필터 기능을 추가.",
      "데이터 저장 및 필터링: 개인화된 차트 데이터 저장 기능을 추가하고, 암종 관련 오픈 API(oncoKB, Hotspot)를 연동해 실시간 데이터 제공.",
      "서버 및 시스템 관리: CentOS 서버에 Apache, Tomcat을 설치하고 연동하여 시스템을 배포 및 유지 관리.",
    ],
    description:
      "병원 데이터를 분석하고 연구자가 원하는 데이터를 시각화하여 연구에 활용할 수 있도록 지원하는 정밀의료 플랫폼입니다.",
    skills: [
      "Spring Framework",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Plotly",
      "D3.js",
      "Java",
      "MariaDB",
      "Oracle",
      "Apache",
      "Tomcat",
      "CentOS",
    ],
    images: [soft01],
  },
  {
    name: "빅센 SA 패키징 자동화 프로젝트",
    period: "2019.03 - 2019.05",
    tasks: [
      "데이터 처리 자동화: 대용량 XML 데이터를 Java를 사용해 MariaDB로 파싱하고, Logstash를 통해 Elasticsearch로 인덱싱하여 데이터 검색 성능을 최적화.",
    ],
    description:
      "대용량 XML 데이터를 MariaDB로 파싱하고 Elasticsearch로 인덱싱하는 자동화 시스템을 개발하는 프로젝트입니다.",
    skills: ["Java", "MariaDB", "Logstash", "Elasticsearch", "CentOS", "Docker"],
    images: [],
  },
  {
    name: "건국대 BI 포털 프로젝트",
    period: "2018.12 - 2019.02",
    tasks: [
      "공지사항 및 Q&A 게시판 개발: 사용자들이 쉽게 접근할 수 있는 공지사항과 Q&A 게시판을 개발하여 커뮤니케이션 환경을 개선.",
      "관리 페이지 개발: 권한 관리, 로그 관리 등의 기능을 포함한 관리자 페이지를 개발하여 시스템 관리 효율성을 높임.",
    ],
    description:
      "연구 데이터를 시각화하고 관리할 수 있는 BI 포털로, 사용자와 관리자가 연구 데이터를 효과적으로 관리할 수 있도록 지원합니다.",
    skills: ["Spring Framework", "HTML", "CSS", "JavaScript", "jQuery", "Java", "MariaDB"],
    images: [],
  },
  {
    name: "빅센메드 2 시각화 기능 개발",
    period: "2018.10 - 2018.12",
    tasks: [
      "시각화 기능 개발: Plotly를 사용해 시각화 화면을 개발하고, 차트별 데이터 변환 로직을 구현하여 연구자가 원하는 데이터를 손쉽게 시각화할 수 있도록 지원.",
      "SQL 작업: 차트별로 필요한 SQL 작업을 수행하여, 시각화 데이터를 효율적으로 처리하고 화면에 반영.",
    ],
    description:
      "의료 데이터를 시각화하는 연구 플랫폼으로, 연구자가 의료 데이터를 효과적으로 분석할 수 있도록 지원합니다.",
    skills: [
      "Spring Framework",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Java",
      "Plotly",
      "SQL",
      "Vertica",
      "MariaDB",
    ],
    images: [],
  },
  {
    name: "울산대, 경북대 빅센메드 2 레지스트리 개발 및 유지보수",
    period: "2018.05 - 2019.10",
    tasks: [
      "환자 데이터 관리: 경북대 간레지스트리, 울산대 외상레지스트리 시스템의 환자상세 페이지를 개발하고, 데이터를 조회, 검색, 출력하는 기능을 구현.",
      "유지보수: 레지스트리 시스템의 유지보수 작업을 진행하며, 시스템 성능 최적화 및 사용성 개선을 수행.",
    ],
    description:
      "연구자가 환자 데이터를 관리하고 분석할 수 있도록 지원하는 레지스트리 시스템을 구축하고 유지보수하는 프로젝트입니다.",
    skills: [
      "Spring Framework",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Java",
      "SQL",
      "Vertica",
      "MariaDB",
    ],
    images: [],
  },
];
export const PROJECTS_LIST = [
  ...TMAX_PROJECT_LIST,
  ...HEURON_PROJECT_LIST,
  ...SOFTCEN_PROJECT_LIST,
];

export const CAREER_LIST = [
  {
    period: "2022. 05 ~ 재직중",
    company: "티맥스에이앤씨 연구소",
    position: "연구원 팀원",
    role: "FE 개발자",
    description: [
      "BI 제품 개발 프로젝트에서 Front-End를 담당",
      "React를 기반으로 개발, 주로 Plotly, d3를 이용한 시각화 모듈 개발",
      "Atomic 디자인으로 폴더구조 구성",
      "Mobx를 이용한 상태관리",
    ],
    projects: TMAX_PROJECT_LIST,
  },
  {
    period: "2021. 03 ~ 2022. 04 (1년 2개월)",
    company: "휴런 개발본부 FE팀",
    position: "전임연구원",
    role: "FE 개발자",
    description: [
      "A.I. 기반 영상진단기술 분석 솔루션 프로젝트에서 Front-End 담당",
      "React를 기반으로 DICOM 의료 영상 파일 출력 (cornerstone, itk, vtk 사용)",
      "공통 Component Module 개발",
    ],
    projects: HEURON_PROJECT_LIST,
  },
  {
    period: "2017. 12 ~ 2021. 02 (3년 3개월)",
    company: "소프트센 빅데이터기술팀",
    position: "사원",
    role: "웹 개발자, UI",
    description: [
      "Spring Framework 기반 웹어플리케이션 개발",
      "병원 내 빅데이터 시각화 작업 (D3, Plotly, JqxGrid 사용)",
      "Java로 Controller/Service 개발 및 타 시스템 연동",
      "Linux 서버 관리 및 운영",
    ],
    projects: SOFTCEN_PROJECT_LIST,
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
    images: [portfolio01, portfolio02, portfolio03, portfolio04, portfolio05],
  },
];
