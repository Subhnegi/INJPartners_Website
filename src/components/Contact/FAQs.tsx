"use client";
import React from "react";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

const FAQs = () => {
    // FAQ data
const faqs = [
    {
        category: "Services",
        questions: [
            {
                q: "What types of market research services do you offer?",
                a: "We offer a wide range of services including consumer behavior analysis, competitive intelligence, and trend forecasting. Our methods include surveys, focus groups, data analytics, and more.",
            },
            {
                q: "How long does a typical research project take?",
                a: "Project duration varies depending on scope and complexity. A simple survey might take 2-4 weeks, while a comprehensive market analysis could take 2-3 months. We provide detailed timelines during project scoping.",
            },
        ],
    },
    {
        category: "Pricing",
        questions: [
            {
                q: "How much do your services cost?",
                a: "Our pricing is customized based on project requirements. We offer flexible options to suit different budgets and needs. Contact us for a personalized quote.",
            },
            {
                q: "Do you offer any discounts for startups or non-profits?",
                a: "Yes, we have special pricing packages for startups and non-profit organizations. Please reach out to our sales team for more information.",
            },
        ],
    },
    {
        category: "Data Security",
        questions: [
            {
                q: "How do you ensure the security of client data?",
                a: "We employ industry-standard encryption, secure data storage, and strict access controls. Our processes comply with GDPR and other relevant data protection regulations.",
            },
            {
                q: "Do you sign NDAs with clients?",
                a: "Yes, we're happy to sign Non-Disclosure Agreements (NDAs) with our clients to ensure the confidentiality of all project-related information.",
            },
        ],
    },
];

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
                                <AccordionItem
                                    key={faqIndex}
                                    value={`item-${index}-${faqIndex}`}
                                >
                                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                                    <AccordionContent>{faq.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default FAQs;
