"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import {
	IconBrandNodejs,
	IconBrandReact,
	IconBuildingBank,
	IconBrandGithub,
	IconCertificate,
	IconFileBroken,
	IconLetterE,
	IconLetterM,
	IconLetterR,
	IconLetterN,
	IconMail,
	IconSignature,
	IconTableColumn,
	IconBrandAngular,
	IconBrandJavascript,
	IconWebhook,
	IconStack2,
	IconBrandOffice,
	IconWorldWww,
	IconGizmo,
	IconSocial,
	IconHttpConnect,
	IconLink,
	IconBrandInstagram,
	IconBrandX,
	IconBrandLinkedin,
	IconBrandDiscordFilled,
	IconBrandLeetcode,
	IconBrandStackoverflow,
	IconBrandGoogle,
} from "@tabler/icons-react";
import { motion } from "framer-motion";


const AboutBento = () => {

	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={cn("[&>p:text-lg]", item.className)}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	);
};
const Skeleton = () => (
	<div className="absolute w-full h-full min-h-[6rem] rounded-xl [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
	
	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className=" flex flex-1 w-full justify-center h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col "
		>
			
			<h1 className="text-xl font-bold tracking-wide">B.TECH</h1>
			<h1 className=" font-semibold text-4xl text-zinc-300">Information Technology</h1>
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			className="flex items-center justify-center flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col"
		>
			<motion.div>
				<motion.p className="text-black font-bold text-4xl p-2 px-3 rounded-lg w-fit"
				style={{
				background:
					"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
				backgroundSize: "400% 400%",
			}} variant = {variants}
			>#Intern</motion.p>
			</motion.div>
		</motion.div>
	);
};
const SkeletonThree = () => {
	// const variants = {
	// 	initial: {
	// 		backgroundPosition: "0 50%",
	// 	},
	// 	animate: {
	// 		backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
	// 	},
	// };
	return (
		<motion.div
			initial="initial"
			animate="animate"
			
			className="relative flex flex-row items-center justify-center gap-1  w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2]"
			// style={{
			// 	background:
			// 		"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
			// 	backgroundSize: "400% 400%",
			// }}
		>
			<motion.div className="h-full w-full rounded-lg flex flex-row items-center justify-center">
					<IconLetterM className="h-10 w-10 "/>
					<IconLetterE className="h-10 w-10"/>
					<IconBrandReact className="text-sky-400 h-10 w-10"/>
					<IconLetterN className="h-10 w-10"/>
					
				</motion.div>
		</motion.div>
	);
};

const SkeletonFour = () => {
	const first = {
		initial: {
			x: 20,
			rotate: -5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const second = {
		initial: {
			x: -20,
			rotate: 5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const classlist = "flex flex-row p-2 bg-black cursor-pointer border border-gray-600 rounded-xl px-3 h-10 items-center justify-center gap-2";
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-wrap justify-center items-between gap-2 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row"
		>
			<a href="https://github.com/Tharun-Kumar-A-01"><div className={classlist}><IconBrandGithub/> Tharun-Kumar-A-01</div></a>
			<a href="https://linked.in/-a-tharun-kumar-"><div className={classlist}><IconBrandLinkedin/> -a-tharun-kumar-</div></a>
			<a href="https://x.com/@A_TK_08"><div className={classlist}><IconBrandX/> A_TK_08</div></a>
			<a href="https://stackoverflow.com/"><div className={classlist}><IconBrandStackoverflow/> tharun_kumar_.a</div></a>
			<a href="https://leetcode.com"><div className={classlist}><IconBrandLeetcode/> tharun_kumar_.a</div></a>
			<a href="https://g.dev/Tharun-Kumar-A"><div className={classlist}><IconBrandGoogle/>Tharun-Kumar-A</div></a>
			<a href="https://instagram.com/@tharun_kumar_.a"><div className={classlist}><IconBrandInstagram/> tharun_kumar_.a</div></a>
			<a href="https://discord.com/Tharun-Kumar"><div className={classlist}><IconBrandDiscordFilled/>tharun</div></a>
		</motion.div>
	);
};


const SkeletonFive = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
				<p className="text-xs text-neutral-500">
					There are a lot of cool framerworks out there like React, Angular,
					Vue, Svelte that can make your life ....
				</p>
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
			>
				<p className="text-xs text-neutral-500">Use PHP.</p>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
			</motion.div>
		</motion.div>
	);
};

const items = [
	{
		title: "B.Tech IT Student",
		description: (
			<span className="text-sm">
				I am an IT student from Jaya Engineering College.
			</span>
		),
		header: <SkeletonOne />,
		className: "md:col-span-1",
		icon: <IconCertificate className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Open for Internships",
		description: (
			<span className="text-sm">
				I am currently open for Internship offers on Web Development.
			</span>
		),
		header: <SkeletonTwo />,
		className: "md:col-span-1",
		icon: <IconGizmo className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Familiar with MERN stack",
		description: (
			<span className="text-sm">
				I am familiar with MERN stack and common JS frameworks such as NextJS.
			</span>
		),
		header: <SkeletonThree />,
		className: "md:col-span-1",
		icon: <IconStack2 className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "My Coding Profile",
		description: (
			<span className="text-sm">
				I am very intrested in coding competetions and Challenges.
			</span>
		),
		header: <SkeletonFour />,
		className: "md:col-span-2",
		icon: <IconLink className="h-4 w-4 text-neutral-500" />,
	},

	{
		title: "Contact Me by Email",
		description: (
			<span className="text-sm">
				If you have any further enquiries please contact me by Email.
			</span>
		),
		header: <SkeletonFive />,
		className: "md:col-span-1",
		icon: <IconMail className="h-4 w-4 text-neutral-500" />,
	},
];

export default AboutBento;
