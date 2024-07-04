import AboutIcon from "@/assets/images/sidebar/aboutIcon";
import CertificationsIcon from "@/assets/images/sidebar/certificationsIcon";
import ContactIcon from "@/assets/images/sidebar/contactIcon";
import EducationIcon from "@/assets/images/sidebar/educationIcon";
import ExperienceIcon from "@/assets/images/sidebar/experienceIcon";
import HomeIconImg from "@/assets/images/sidebar/homeIcon";
import ProjectsIcon from "@/assets/images/sidebar/projectsIcon";
import SkillsIcon from "@/assets/images/sidebar/skillsIcon";


export const sidebarItemList = [
  {
    id: 0,
    displayName: "Home",
    path: "/",
    icon: HomeIconImg,
  },
  {
    id: 1,
    displayName: "About",
    path: "/about",
    icon: AboutIcon,
  },
  {
    id: 2,
    displayName: "Skills",
    path: "/skills",
    icon: SkillsIcon,
  },
  {
    id: 3,
    displayName: "Education",
    path: "/education",
    icon: EducationIcon,
  },

  {
    id: 4,
    displayName: "Projects",
    path: "/projects",
    icon: ProjectsIcon,
  },
  {
    id: 5,
    displayName: "Certifications",
    path: "/certifications",
    icon: CertificationsIcon,
  },
  {
    id: 6,
    displayName: "Experience",
    path: "/experience",
    icon: ExperienceIcon,
  },
  {
    id: 7,
    displayName: "Contact",
    path: "/contact",
    icon: ContactIcon,
  },
];
