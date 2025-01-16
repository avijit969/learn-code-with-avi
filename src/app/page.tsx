'use client'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { Kanit } from "next/font/google";
import { Button } from "@/components/ui/button";
import { handelSignInWithGithub, handleSignInWithGoogle } from "@/lib/auth/signinServerAvction";
import { useSession } from 'next-auth/react';
import NavBar from "@/components/nav-bar";

const kanitFont = Kanit({ subsets: ['latin'], weight: '400', style: 'normal' })
export default function Home() {
  const words = ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB", 'git & github'];
  const topics = [{
    name: "HTML",
    image: "https://img.icons8.com/color/480/html-5--v1.png"
  },
  {
    name: "CSS",
    image: "https://img.icons8.com/color/480/css3.png"
  },
  {
    name: "JS",
    image: "https://img.icons8.com/color/480/javascript--v1.png"
  },
  {
    name: "React",
    image: "https://img.icons8.com/color/480/react-native.png"
  },
  {
    name: "Node",
    image: "https://img.icons8.com/color/480/nodejs.png"
  },
  {
    name: "Express",
    image: "https://img.icons8.com/officel/480/express-js.png"
  },
  {
    name: "MongoDB",
    image: "https://img.icons8.com/color/480/mongodb.png"
  },
  {
    name: "git & github",
    image: "https://img.icons8.com/plasticine/480/github.png"
  }
  ]
  const session = useSession()
  return (
    <div>
      <NavBar />
      <BackgroundBeamsWithCollision className="z-[-1] grid lg:grid-cols-2 grid-cols-1 h-[90vh] p-2">
        <div className="flex justify-center items-center">
          <div className="lg:text-4xl text-xl pt-16 lg:pt-0 font-bold dark:text-white">
            <h1>Hey {session?.data?.user?.name}👋 !!</h1>
            <h1>Welcome to Learn Code With Avi</h1>
            <h1 className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">Here you can learn <FlipWords words={words} duration={500} /></h1>

          </div>
        </div>
        {/* courses */}
        <div className="w-full lg:w-[40vw] grid grid-cols-2 gap-3 py-24 ">
          {topics.map((courseTopics, index) => (
            <div key={index}>
              <BackgroundGradient className="dark:bg-black rounded-[22px] h-full p-4 bg-white" containerClassName="h-23 ">
                <div>
                  <div className="flex justify-evenly items-center">
                    <h1 className={`${kanitFont.className} lg:text-4xl text-lg text-bold text-center`}>{courseTopics.name}</h1>
                    <Image src={courseTopics.image} alt={courseTopics.name} width={100} height={100} className="lg:w-12 lg:h-12 w-8 h-8" />
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </BackgroundBeamsWithCollision>
      <div>
      </div>
    </div>

  );
}
