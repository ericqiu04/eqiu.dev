import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import i from "@/pages/msc/IMG_2117_3.jpg";

//icons
import { FaLinkedinIn } from "react-icons/fa";
import {TbBrandGithub} from 'react-icons/tb'
import {FiMail} from 'react-icons/fi'
import {HiDocumentText} from 'react-icons/hi2'
const d = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
/* eslint-disable-no-alert*/
export default function Home() {
  return (
    <div className={d.className}>
      <div className="min-h-screen flex items-center justify-center md:px-0 px-10 fadeIn">
        <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-4 max-w-screen-xl">
          {/* Image section */}
          <div className="md:w-1/2 text-center order-2 md:order-1 m-10 md:flex md:justify-end">
            <div className="flex flex-col">
              <div className="rounded-full border-4 border-dashed border-cyan-700">
                <Image src={i} alt={""} width={300} className="rounded-full" />
              </div>
              <div className="mt-4 flex justify-center">
                <a href="mailto:eqiu@uwaterloo.ca" target = "_blank">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold p-2 rounded-full mr-2 move-on-hover">
                    <FiMail size = {30}/>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/eqiu/" target = "_blank">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold p-2 rounded-full mr-2 move-on-hover">
                    <FaLinkedinIn size = {30}/>
                  </button>
                </a>
                <a href="https://www.github.com/ericqiu04" target = "_blank">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold p-2 rounded-full mr-2 move-on-hover">
                    <TbBrandGithub size = {30}/>
                  </button>
                </a>
                <a href="/Eric_Qiu_Resume.pdf" target = "_blank">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold p-2 rounded-full mr-2 move-on-hover">
                    <HiDocumentText size = {30}/>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Text Section */}
          <div className="grid-rows-2 md:w-1/2 text-center md:text-left order-1 md:order-2">
            <div className="mb-5">
              <h1 className="text-4xl font-bold text-cyan-700">
                Hello, I&apos;m Eric!
              </h1>
            </div>
            <div className="md:w-3/4 custom-underline ">
              I&apos;m a Computer Engineering student at the{" "}
              <a href="https://uwaterloo.ca/" target="_blank">
                University of Waterloo
              </a>{" "}
              interested in full stack engineering and mobile development. In the past, I have interned at Microart, Questrade, and Inossem.
              
              <p className="mt-5">
                Outside of school and work, you will find me reading webtoons, hanging
                out with friends, or queuing 5 stack with the boys.
              </p>
              <p className="mt-5">
                If you would like to chat, let&apos;s connect through{" "}
                <a href="https://www.linkedin.com/in/eqiu/" target="_blank">
                  LinkedIn
                </a>{" "}
                or at{" "}
                <a href="mailto:eqiu@uwaterloo.ca" target="_blank">
                  eqiu@uwaterloo.ca
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
