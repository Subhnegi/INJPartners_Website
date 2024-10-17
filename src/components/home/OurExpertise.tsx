import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Stethoscope,
	Cpu,
	Building2,
	Zap,
	Car,
	Factory,
	ShoppingBag,
	Phone,
} from "lucide-react";
import { motion } from "framer-motion";
const OurExpertise = () => {
	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{[
						{ icon: Stethoscope, title: "Healthcare" },
						{ icon: Cpu, title: "IT / Technology" },
						{ icon: Building2, title: "BFSI" },
						{ icon: Zap, title: "Utilities" },
						{ icon: Car, title: "Automotive" },
						{ icon: Factory, title: "Manufacturing" },
						{ icon: ShoppingBag, title: "Retail" },
						{ icon: Phone, title: "Telecom" },
					].map((industry, index) => (
						<motion.div
							key={industry.title}
							initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
							whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move to original position when in view
							viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of card is in view
							transition={{
								duration: 0.5,
								ease: "easeOut",
								delay: index * 0.2,
							}} // Add delay based on index for staggered effect
							
						>
							<Card className="flex flex-col items-center text-center">
								<CardHeader>
									<industry.icon className="w-12 h-12 text-primary mb-4 self-center" />
									<CardTitle>{industry.title}</CardTitle>
								</CardHeader>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurExpertise;
