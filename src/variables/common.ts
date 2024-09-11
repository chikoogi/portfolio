export const PROJECTS_LIST = [
  {
    name: "Hyperdata / Solomon 시각화 모듈",
    period: "2022.05 ~ 현재",
    technologies: [
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
    technologies: ["React", "Recoil", "Typescript", "Webpack", "SCSS", "MariaDB"],
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
    technologies: [
      "Spring Framework",
      "HTML",
      "CSS",
      "Javascript",
      "Java",
      "SQL(MariaDB)",
      "C#",
      "D3",
    ],
    responsibilities: [
      "SHA256 해시 알고리즘을 이용해 키 암호화 파일 변환 프로그램 제작",
      "D3 차트를 활용해 mutation, oncoprint 등의 차트 개발",
      "관리 페이지 제작",
    ],
  },
  {
    name: "아산병원 정밀의료플랫폼 프로젝트",
    period: "2019.10 ~ 2020.09",
    technologies: [
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
    technologies: ["CentOS", "Docker", "MariaDB", "Elasticsearch", "logstash", "Java"],
    responsibilities: [
      "대용량 XML 데이터를 MariaDB로 파싱",
      "logstash를 이용해 Elasticsearch로 인덱싱",
    ],
  },
  {
    name: "건국대 BI 포털 프로젝트",
    period: "2018.12 ~ 2019.02",
    technologies: ["Spring Framework", "HTML", "CSS", "Javascript", "jQuery", "MariaDB"],
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
      "React를 기반으로 개발, 주로 Plotly, d3를 이용해 시각화 모듈 개발",
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
    name: "Uwhoo Review Site",
    period: "2023.09 ~ 2024.03",
    technologies: ["React", "Typescript", "Webpack", "SCSS", "@react/emotion", "Yarn-berry"],
    responsibilities: [
      "BI 플랫폼 ≫ 시각화 모듈 개발",
      "D3, Plotly 를 이용한 17종 차트(Bar, Line, Boxplot, Pie, Radar 등등) 개발",
      "플랫폼 홈화면 및 시각화 관련 대시보드 개발",
      "공통 컴포넌트를 위한 Atomic 컴포넌트 개발",
    ],
  },
];
