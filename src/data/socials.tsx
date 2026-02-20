import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi2";

export const socials = [
    {
        href: "mailto:eqiu@uwaterloo.ca",
        icon: <FiMail size={20} />,
        label: "Email",
    },
    {
        href: "https://www.linkedin.com/in/eqiu/",
        icon: <FaLinkedinIn size={20} />,
        label: "LinkedIn",
    },
    {
        href: "https://www.github.com/ericqiu04",
        icon: <TbBrandGithub size={20} />,
        label: "GitHub",
    },
    {
        href: "/Eric_Qiu_Resume.pdf",
        icon: <HiDocumentText size={20} />,
        label: "Resume",
    },
];

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];
