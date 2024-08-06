"use client";
import { Logo } from "./Logo.jsx";
import { usePathname } from "next/navigation";
import Link from "next/link.js";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image.js";
import { JetBrains_Mono } from "next/font/google";
import { useState } from "react";
import { IconMail } from "@tabler/icons-react";

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weights: ["400", "700"], // You can specify the weights you need
});

const links = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Projects",
		path: "/projects",
	},
	{
		title: "About",
		path: "/about",
	},
];

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathName = usePathname();

	return (
		<nav
			className="w-screen h-14 bg-transparent backdrop-blur-sm z-50 border-b-[0.25px]  border-gray-500 fixed sroll"
			id="navbar"
		>
			<div className="bg-background bg-opacity-85 w-full h-full flex items-center justify-between px-5  md:px-10 lg:px-32 ">
				<div className="font-bold flex flex-row items-center">
					<button
						onClick={() => setIsMenuOpen((prev) => !prev)}
						className={`sm:hidden mr-3 animate-appearance-in`}
					>
						{" "}
						<Image
							src={isMenuOpen ? "/menu-close.svg" : "/menu-open.svg"}
							width={20}
							height={20}
							alt="menu-icon"
						/>
					</button>

					<Logo />
					<p>Tharun</p>
				</div>
				<div className="hidden sm:block animate-appearance-in">
					{links.map((link) => {
						return (
							<Link
								key={link.path}
								href={link.path}
								className={`${
									link.path == pathName ? "text-primary" : "text-foreground"
								} px-4 font-semibold`}
							>
								{link.title}
							</Link>
						);
					})}
				</div>
				<div>
					<Link href="mailto://tharunkumar.a.2006@gmail.com">
					<button className={` ${jetBrainsMono.className} text-sm py-2 px-3 bg-primary rounded-lg font-bold flex flex-row flex-shrink-0 gap-2 items-center text-black `} >Contact Me <IconMail className="hidden sm:block h-6 w-6 text-black "/> </button>
					</Link>
				</div>
			</div>
			{ 
				<div className={` ${isMenuOpen ? " ":"-translate-x-full"} transition-all duration-100 sm:hidden absolute top-14 z-20 left-0 w-3/4 sm:w-1/2 md:w-1/4 items-center justify-center gap-2 h-[calc(100vh-3.0rem)] flex flex-col bg-black`}>
					{links.map((link) => {
						return (
							<>
								<Link
									key={link.path}
									href={link.path}
									className={`${
										link.path == pathName ? "text-primary" : "text-foreground"
									} px-4 py-2 font-semibold`}
								>
									{link.title}
								</Link>
							</>
						);
					})}
				</div>
			}
		</nav>
	);
}
