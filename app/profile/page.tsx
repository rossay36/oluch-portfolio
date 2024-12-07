"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const achievements = [
	{
		title: "Project Success Rate",
		value: "98%",
		description: "Consistently delivering projects on time and within budget",
	},
	{
		title: "Team Leadership",
		value: "50+",
		description: "Professionals successfully led across multiple projects",
	},
	{
		title: "Cost Savings",
		value: "$2M+",
		description: "Total cost savings achieved through process optimization",
	},
	{
		title: "Client Satisfaction",
		value: "4.9/5",
		description: "Average client satisfaction rating across all projects",
	},
];

const expertise = [
	{
		area: "Strategic Planning",
		details:
			"Expert in developing and executing comprehensive project strategies",
		icon: "📋",
	},
	{
		area: "Risk Management",
		details: "Proven track record in identifying and mitigating project risks",
		icon: "🎯",
	},
	{
		area: "Stakeholder Management",
		details: "Skilled in managing relationships with diverse stakeholders",
		icon: "🤝",
	},
	{
		area: "Agile Methodologies",
		details: "Certified Scrum Master with extensive Agile experience",
		icon: "🔄",
	},
];

export default function Profile() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			{/* Cover Photo & Profile Section */}
			<section className="relative">
				{/* Cover Photo */}
				<div className="h-64 md:h-80 lg:h-[400px] w-full relative">
					<Image
						src="https://images.unsplash.com/photo-1540671221389-aa5fe5f52417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
						alt="Cover"
						fill
						className="object-cover  object-top"
						priority
					/>
				</div>

				{/* Profile Info Container */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative -mt-32 sm:-mt-16 pb-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="flex flex-col items-center"
						>
							{/* Profile Picture */}
							<div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
								<Image
									src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
									alt="Profile"
									fill
									className="object-cover"
									priority
								/>
							</div>

							{/* Name and Title */}
							<div className="mt-6 text-center">
								<h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
									Oluchi Nzekwesi
								</h1>
								<p className="mt-3 text-xl text-blue-600 dark:text-blue-400 font-semibold">
									Senior Project Manager
								</p>
								<p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg">
									Passionate about delivering excellence in project management
									with over 8 years of experience in leading complex
									initiatives.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Achievements Section */}
			<section className="py-12 bg-white dark:bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
							Key Achievements
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{achievements.map((achievement, index) => (
								<motion.div
									key={achievement.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
								>
									<div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
										{achievement.value}
									</div>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
										{achievement.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300">
										{achievement.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Expertise Section */}
			<section className="py-12 bg-gray-50 dark:bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
							Areas of Expertise
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{expertise.map((item, index) => (
								<motion.div
									key={item.area}
									initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
								>
									<div className="flex items-start space-x-4">
										<span className="text-4xl">{item.icon}</span>
										<div>
											<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
												{item.area}
											</h3>
											<p className="text-gray-600 dark:text-gray-300">
												{item.details}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Professional Journey */}
			<section className="py-12 bg-white dark:bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="prose dark:prose-invert max-w-none"
					>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
							Professional Journey
						</h2>
						<div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								With over 8 years of experience in project management, I have
								successfully led diverse teams across various industries. My
								approach combines traditional project management methodologies
								with modern, agile practices to ensure optimal results. I am
								passionate about fostering team collaboration, driving
								innovation, and delivering exceptional value to stakeholders.
							</p>
							<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="text-center">
									<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
										Education
									</h4>
									<p className="text-gray-600 dark:text-gray-300">
										MBA in Project Management
										<br />
										Stanford University
									</p>
								</div>
								<div className="text-center">
									<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
										Certifications
									</h4>
									<p className="text-gray-600 dark:text-gray-300">
										PMP® Certified
										<br />
										Certified Scrum Master
									</p>
								</div>
								<div className="text-center">
									<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
										Languages
									</h4>
									<p className="text-gray-600 dark:text-gray-300">
										English (Native)
										<br />
										French (Professional)
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
