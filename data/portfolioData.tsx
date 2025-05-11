import { SectionProps, LinkProps } from '@/types/portfolio';
import { WorkLinkItem } from '@/components/WorkLinkItem';
import { FaPython, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa';
import { TbBrandGolang, TbBrandCpp, TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb';
import { SiC, SiPytorch, SiLangchain, SiLightning } from 'react-icons/si';

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
    title: "Language/Framework/Tool",
    items: [
      <div key="languages" className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
        <span className="flex items-center gap-2"><FaPython className="text-[#3776AB]" /> Python</span>
        <span className="flex items-center gap-2"><TbBrandGolang className="text-[#00ADD8]" /> Go</span>
        <span className="flex items-center gap-2"><TbBrandCpp className="text-[#00599C]" /> C++</span>
        <span className="flex items-center gap-2"><SiC className="text-[#A8B9CC]" /> C</span>
        <span className="flex items-center gap-2"><TbBrandTypescript className="text-[#3178C6]" /> TypeScript</span>
        <span className="flex items-center gap-2"><FaReact className="text-[#61DAFB]" /> React</span>
        <span className="flex items-center gap-2"><TbBrandNextjs className="text-white" /> Next.js</span>
        <span className="flex items-center gap-2"><SiPytorch className="text-[#EE4C2C]" /> PyTorch</span>
        <span className="flex items-center gap-2"><SiLightning className="text-[#792EE5]" /> Lightning</span>
        <span className="flex items-center gap-2"><SiLangchain className="text-white" /> LangChain</span>
        <span className="flex items-center gap-2"><FaGitAlt className="text-[#F05032]" /> Git</span>
        <span className="flex items-center gap-2"><FaDocker className="text-[#2496ED]" /> Docker</span>
      </div>
    ],
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
    delay: 0.1,
    icon: "/signate_icon.svg"
    },
];