import { SectionProps, LinkProps } from '@/types/portfolio';
import { WorkLinkItem } from '@/components/WorkLinkItem';

export const sections: SectionProps[] = [
  {
    title: "Interests",
    items: ["machine learning", "algorithm", "health care"],
    delay: 0.4,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Qualifications",
    items: ["応用情報技術者", "TOEIC L&R 825", "GCI 2024 summer 修了"],
    delay: 0.5,
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Works",
    items: [
      <WorkLinkItem key="latex" href="https://cotora.github.io/LaTeXFormulaPreview/">
        LaTeXFormulaPreview
      </WorkLinkItem>,
      <WorkLinkItem key="ac" href="https://github.com/cotora/ac-profile">
        ac-profile
      </WorkLinkItem>,
      <WorkLinkItem key="note2do" href="https://github.com/cotora/Note2Do">
        Note2Do
      </WorkLinkItem>
    ],
    delay: 0.6,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Language",
    items: ["Python", "Go", "C++", "C", "TypeScript"],
    delay: 0.7,
    color: "from-pink-500/20 to-blue-500/20"
  }
];

export const links: LinkProps[] = [
  {
    name: "AtCoder",
    url: "https://atcoder.jp/users/cotora",
    delay: 0.1,
    icon: "/atcoder_logo_white.svg"
    },
    {
        name: "kaggle",
        url: "https://www.kaggle.com/cotora2121",
        delay: 0.1,
        icon: "/kaggle.svg"
    },
  {
    name: "SIGNATE",
    url: "https://signate.jp/users/111616",
    delay: 0.1
    },

];