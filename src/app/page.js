import { JetBrains_Mono } from 'next/font/google';
import { Work_Sans } from 'next/font/google';
import {Button} from "@nextui-org/react";
import { GithubIcon } from '@/components/Icons/GitHub';
import { color } from 'framer-motion';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],  // Adjust weights as needed
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weights: ['400', '700'], // You can specify the weights you need
});


export default function Home() {
  return (
    <div className="flex  min-h-screen py-2 ">
      <div className="ml-20">
        <p className={`${jetBrainsMono.className} text-primary `}>{"~~>  "}FULL STACK DEVELOPER</p>
        <h1 className='text-5xl font-bold py-1'>I'm <span className="text-primary">Tharun Kumar</span></h1>
        <p className={`text-md py-2 ${workSans.className}`}>Aspiring Full Stack Developer with a passion for crafting seamless digital experiences,<br/> continuously learning and innovating one line of code at a time.</p>
        <Button className={`${jetBrainsMono.className} mt-2 text-background font-bold` } color='primary'>Let's Connect {" ~~>"}</Button>
      </div>
    </div>
  );
}
