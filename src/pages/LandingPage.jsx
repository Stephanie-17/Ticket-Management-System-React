import React from "react";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom";

const LandingPage = () => {
	const features = [
		{
			id: 1,
			iconPath: "/automated-icon.svg",
			feature: "Automated Ticket Routing",
			desc: "Eliminate manual sorting. FlowDesk automatically assigns tickets to the right team or agent based on priority, topic, and workload. We ensure that every request is handled by the right expert.",
		},
		{
			id: 2,
			iconPath: "/unified-icon.svg",
			feature: "Unified Communication Hub",
			desc: "Keep every conversation in one place. Email, chat, and internal notes all live within FlowDesk, giving your team full context and your customers faster, more personalized responses.",
		},
		{
			id: 3,
			iconPath: "/analytics-icon.svg",
			feature: "Actionable Analytics",
			desc: "Track performance, measure response times, and uncover trends with intuitive analytics dashboards. FlowDesk turns data into insights you can act on to continuously improve service quality.",
		},
	];
	return (
		<main>
			{/* Hero Section */}
			<section className=" hero bg-linear-to-br from-[#4a90e2] to-[#7b68ee] p-2 flex flex-col items-center justify-center h-[90vh] -z-2 gap-(--space-xl)">
				<h1 className="text-(--color-text-secondary) font-extrabold text-[32px] text-center z-2 mt-(--space-md)  sm:text-5xl md:text-6xl max-w-[80%] ">
					Simplify Support. Resolve Faster. Delight Every Customer.
				</h1>

				<p className="text-white/80 text-center  max-w-150.5 md:text-lg z-2">
					FlowDesk is a comprehensive ticket management system designed to help
					teams handle customer requests with speed, clarity, and efficiency.
					<br />
					<b>Empower your team</b> to deliver exceptional support experiences
					while reducing response times and eliminating workflow friction.
				</p>
				<Link to="/sign-up">
					<button className="text-white bg-(--color-primary) px-(--space-xl) py-(--space-sm) rounded-md font-bold cursor-pointer">
						Get Started
					</button>
				</Link>

				{/* Decorative Circles */}
				<div className="w-16 h-16 bg-[#50E3C2] opacity-30 absolute rounded-full left-2  top-1/4 lg:w-24 lg:h-24"></div>
				<div className="w-16 h-16 bg-[#50E3C2] opacity-30 absolute rounded-full right-2 lg:w-34 lg:h-34  top-[57%]"></div>
			</section>

			{/* Key Features Section */}
			<section className="flex flex-col justify-center items-center text-center gap(--space-md) p-2 mt-(--space-lg) ">
				<header className="mb-14">
					<h2 className="font-bold text-4xl mb-(--space-md)">Key Features</h2>
					<p className="text-(--color-text-light) max-w-[500px]">
						FlowDesk is designed to help you handle customer requests more
						efficiently. Here's how:
					</p>
				</header>
				<ul className="list-none flex flex-col gap-(--space-sm) lg:gap-(--space-lg) justify-center md:flex-row md:flex-wrap mb-8">
					{features.map((feature) => (
						<li>
							<FeatureCard
								key={feature.id}
								iconPath={feature.iconPath}
								feature={feature.feature}
								desc={feature.desc}
							/>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default LandingPage;
