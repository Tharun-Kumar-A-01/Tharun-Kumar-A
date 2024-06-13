import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Tharun Kumar",
	description: "I am a Full Stack developer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} h-screen dark text-foreground bg-background`}
			>
				<NextUIProvider>
					<NavBar />
					<div className="w-full h-full bg-background">{children}</div>
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}
