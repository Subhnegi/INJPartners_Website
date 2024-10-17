import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

const FAQs = ({ faqs }) => {
    // FAQ data
    const [faqSearch, setFaqSearch] = useState("");
    const filteredFaqs = faqs
        .map((category) => ({
            ...category,
            questions: category.questions.filter(
                (q) =>
                    q.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
                    q.a.toLowerCase().includes(faqSearch.toLowerCase())
            ),
        }))
        .filter((category) => category.questions.length > 0);

    return (
        <Card className="mt-12">
            <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-6 relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search FAQs..."
                        className="pl-8"
                        value={faqSearch}
                        onChange={(e) => setFaqSearch(e.target.value)}
                    />
                </div>
                {filteredFaqs.map((category, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">
                            {category.category}
                        </h3>
                        <Accordion type="single" collapsible className="w-full">
                            {category.questions.map((faq, faqIndex) => (
                                <motion.div
                                    key={faqIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: faqIndex * 0.1 }}
                                >
                                    <AccordionItem
                                        value={`item-${index}-${faqIndex}`}
                                    >
                                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                                        <AccordionContent>{faq.a}</AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default FAQs;
