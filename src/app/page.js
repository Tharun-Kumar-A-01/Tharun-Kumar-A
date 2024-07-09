import { JetBrains_Mono } from "next/font/google";
import { Work_Sans } from "next/font/google";
import {  Link, Button } from "@nextui-org/react";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const workSans = Work_Sans({
	subsets: ["latin"],
	weight: ["400", "700"], 
});

export const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weights: ["400", "700"], 
});

export default function Home() {
	return (
		<div className="flex flex-col w-screen min-h-screen ">
			<section className="h-[100vh] w-full flex justify-around align-middle items-center" id="home">
				<div className=" ml-20">
					<p className={`${jetBrainsMono.className} text-primary `}>
						{"~~>  "}
						FULL STACK DEVELOPER
					</p>
					<h1 className="text-5xl font-bold py-1">
						I am <span className="text-primary">Tharun Kumar</span>
						<TextGenerateEffect className={`text-5xl font-bold py-1`} words="I am Tharun Kumar" />
					</h1>
					<p className={`text-md py-2 ${workSans.className}`}>
						Aspiring Full Stack Developer with a passion for crafting seamless
						digital experiences,
						<br /> continuously learning and innovating one line of code at a
						time.
					</p>

					<div className="flex mt-2">
						<Button
							className={`${jetBrainsMono.className} text-background font-bold`}
							color="primary"
						>
							Lets Connect {" ~~>"}
						</Button>
						<Button
							className={`${jetBrainsMono.className} font-bold ml-2 h-10`}
							as={Link}
							variant="bordered"
							color="primary"
							showAnchorIcon
							href="/"
						>
							<svg fill="#fff" width="24" height="24" viewBox="0 0 496 512">
								<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
							</svg>
							<p>View GitHub</p>
						</Button>
					</div>
				</div>
				<Image
					src="/undraw_programming_re_kg9v.svg"
					height={400}
					width={400}
					alt="Image"
					className="hidden lg:block rounded-full"
					
				/>
			</section>
			<section className="min-h-screen flex justify-center w-full my-2" id="about">
				<div className="w-full sm:w-11/12 md:w-10/12 lg:w-3/4 bg-background sm:border-1 border-t-1 border-x-none border-b-none border-primary sm:rounded-xl px-2 sm:px-3 md:px-5 lg:px-10 py-10">
					<h1
						className={`${jetBrainsMono.className} bg-primary py-2 px-3 font-bold rounded-full  text-background w-fit`}
					>
						About
					</h1>
					<div className="mt-10 ml-11 border-2 border-primary w-fit h-fit p-3">
						<p className="text-3xl font-bold text-primary">Tharun Kumar</p>
						<p className={`${jetBrainsMono.className}`}>Full Stack Developer</p>
					</div>
					<div className="h-3/4 flex flex-row p-3">
						<div className="w-1/2 h-full border-success border-2 p-2"></div>
						<div className="w-1/2 h-full border-success border-2 p-2 flex flex-col">
							<div className="w-full h-1/2 border-2 border-primary p-2"></div>
							<div className="w-full h-1/2 border-2 border-primary p-2"></div>
						</div>
					</div>
				</div>
			</section>
			<section className="min-h-screen flex justify-center w-full my-2" id="projects">

			</section>
		</div>
	);
}
