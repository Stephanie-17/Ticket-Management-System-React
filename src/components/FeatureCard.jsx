import React from "react";

const FeatureCard = ({ iconPath, feature, desc }) => {
	return (
		<section className="bg-white h-[200px] md:h-[270px] md:w-[400px] shadow-(--shadow-lg) flex flex-col gap-(--space-md) items-start text-left p-4 border border-[rgba(232,232,232,0.88)]  rounded-md ">
			<img className="w-10" src={iconPath} alt="feature-icon" />
			<h3 className="text-xl font-bold  ">{feature}</h3>
			<p className="text-(--color-text-light)">{desc}</p>
		</section>
	);
};

export default FeatureCard;
