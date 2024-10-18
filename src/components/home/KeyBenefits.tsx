import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const KeyBenefits = () => {
  return (
    <section className="py-16 bg-muted bg-gradient-to-r from-purple-500 to-cyan-500">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12  bg-gradient-to-r from-purple-500 to-cyan-500">
          Why Choose INJ Partners?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Data-Driven Insights",
              description:
                "We leverage advanced analytics to provide actionable insights that drive business growth.",
            },
            {
              title: "Industry Expertise",
              description:
                "Our team of seasoned researchers brings deep knowledge across various sectors.",
            },
            {
              title: "Customized Solutions",
              description:
                "We tailor our research methodologies to meet your specific business needs and goals.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              viewport={{ once: true, amount: 0.2 }} // Animation will trigger once, and only when 20% of the card is visible
              transition={{ duration: 0.5, ease: "easeOut" }} // Control speed of animation
              className="flex flex-col items-center text-center"
            >
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
