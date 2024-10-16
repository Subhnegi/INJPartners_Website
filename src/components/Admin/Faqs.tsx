import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

type Question = {
    q: string;
    a: string;
};

export type FAQCategory = {
    _id: string;
    category: string;
    questions: Question[];
    createdAt: string;
    updatedAt: string;
};

type FAQProps = {
    faqCategories: FAQCategory[];
};
const onAdd = async (newItem: any) => {
    try {
        const response = await axios.post("/api/faqs", newItem);
        toast({
            title: "Success",
            description: "faq added successfully",
        });
    } catch (error) {
        console.error("Error adding faq:", error);
        toast({
            title: "Error",
            description: "Failed to add faq",
            variant: "destructive",
        });
    }
};

const onUpdate = async (updatedItem: any) => {
    try {
        await axios.put(
            "/api/faqs",
            updatedItem
        );

        toast({
            title: "Success",
            description: " updated successfully",
        });
    } catch (error) {
        console.error("Error updating :", error);
        toast({
            title: "Error",
            description: "Failed to update ",
            variant: "destructive",
        });
    }
};


const FAQ: React.FC<FAQProps> = ({
    faqCategories
}) => {
    const [isAddFAQCategoryOpen, setIsAddFAQCategoryOpen] =
        React.useState(false);
    const [isUpdateFAQCategoryOpen, setIsUpdateFAQCategoryOpen] =
        React.useState(false);
    const [currentFAQCategory, setCurrentFAQCategory] =
        React.useState<FAQCategory | null>(null);
    const [newFAQCategory, setNewFAQCategory] = React.useState<
        Omit<FAQCategory, "_id" | "createdAt" | "updatedAt">
    >({
        category: "",
        questions: [{ q: "", a: "" }],
    });
    const [selectedFAQCategories, setSelectedFAQCategories] = React.useState<string[]>([]);
    const onDelete = async () => {
        try {
            await axios.delete("/api/faqs", {data: {id:selectedFAQCategories[0]}});
            toast({
                title: "Success",
                description: " deleted successfully",
            });
        } catch (error) {
            console.error("Error deleting :", error);
            toast({
                title: "Error",
                description: "Failed to delete ",
                variant: "destructive",
            });
        }
    };
    const handleAddFAQCategory = () => {
        onAdd(newFAQCategory);
        setIsAddFAQCategoryOpen(false);
        setNewFAQCategory({
            category: "",
            questions: [{ q: "", a: "" }],
        });
    };

    const handleUpdateFAQCategory = () => {
        if (currentFAQCategory) {
            onUpdate(currentFAQCategory);
            setIsUpdateFAQCategoryOpen(false);
            setCurrentFAQCategory(null);
        }
    };

    const renderFAQCategoryForm = (
        faqCategory: Omit<FAQCategory, "_id" | "createdAt" | "updatedAt">,
        setFAQCategory: React.Dispatch<React.SetStateAction<any>>
    ) => (
        <div className="grid gap-4 py-4">
            <div>
                <Label htmlFor="category">Category</Label>
                <Input
                    id="category"
                    value={faqCategory.category}
                    onChange={(e) =>
                        setFAQCategory({
                            ...faqCategory,
                            category: e.target.value,
                        })
                    }
                />
            </div>
            <div>
                <Label>Questions</Label>
                <ScrollArea className="h-[300px] border rounded-md p-4">
                    {faqCategory.questions.map((question, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-md">
                            <Label htmlFor={`question-${index}`}>
                                Question
                            </Label>
                            <Input
                                id={`question-${index}`}
                                value={question.q}
                                onChange={(e) => {
                                    const newQuestions = [
                                        ...faqCategory.questions,
                                    ];
                                    newQuestions[index].q = e.target.value;
                                    setFAQCategory({
                                        ...faqCategory,
                                        questions: newQuestions,
                                    });
                                }}
                                className="mb-2"
                            />
                            <Label htmlFor={`answer-${index}`}>Answer</Label>
                            <Textarea
                                id={`answer-${index}`}
                                value={question.a}
                                onChange={(e) => {
                                    const newQuestions = [
                                        ...faqCategory.questions,
                                    ];
                                    newQuestions[index].a = e.target.value;
                                    setFAQCategory({
                                        ...faqCategory,
                                        questions: newQuestions,
                                    });
                                }}
                                className="mb-2"
                            />
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    const newQuestions =
                                        faqCategory.questions.filter(
                                            (_, i) => i !== index
                                        );
                                    setFAQCategory({
                                        ...faqCategory,
                                        questions: newQuestions,
                                    });
                                }}
                            >
                                Remove Question
                            </Button>
                        </div>
                    ))}
                    <Button
                        onClick={() =>
                            setFAQCategory({
                                ...faqCategory,
                                questions: [
                                    ...faqCategory.questions,
                                    { q: "", a: "" },
                                ],
                            })
                        }
                    >
                        Add Question
                    </Button>
                </ScrollArea>
            </div>
        </div>
    );

    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <Dialog
                    open={isAddFAQCategoryOpen}
                    onOpenChange={setIsAddFAQCategoryOpen}
                >
                    <DialogTrigger asChild>
                        <Button>Add New FAQ Category</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>Add New FAQ Category</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[80vh]">
                            {renderFAQCategoryForm(
                                newFAQCategory,
                                setNewFAQCategory
                            )}
                        </ScrollArea>
                        <Button onClick={handleAddFAQCategory}>
                            Add FAQ Category
                        </Button>
                    </DialogContent>
                </Dialog>
                <Button
                    variant="destructive"
                    onClick={onDelete}
                    disabled={selectedFAQCategories.length === 0}
                >
                    Delete Selected
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Select</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Number of Questions</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {faqCategories.map((faqCategory) => (
                        <TableRow key={faqCategory._id}>
                            <TableCell>
                                <Checkbox
                                    checked={selectedFAQCategories.includes(
                                        faqCategory._id
                                    )}
                                    onCheckedChange={(checked) => {
                                        setSelectedFAQCategories(
                                            checked
                                                ? [
                                                      ...selectedFAQCategories,
                                                      faqCategory._id,
                                                  ]
                                                : selectedFAQCategories.filter(
                                                      (id) =>
                                                          id !== faqCategory._id
                                                  )
                                        );
                                    }}
                                />
                            </TableCell>
                            <TableCell>{faqCategory.category}</TableCell>
                            <TableCell>
                                {faqCategory.questions.length}
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setCurrentFAQCategory(faqCategory);
                                        setIsUpdateFAQCategoryOpen(true);
                                    }}
                                >
                                    Update
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog
                open={isUpdateFAQCategoryOpen}
                onOpenChange={setIsUpdateFAQCategoryOpen}
            >
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Update FAQ Category</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[80vh]">
                        {currentFAQCategory &&
                            renderFAQCategoryForm(
                                currentFAQCategory,
                                setCurrentFAQCategory
                            )}
                    </ScrollArea>
                    <Button onClick={handleUpdateFAQCategory}>
                        Update FAQ Category
                    </Button>
                </DialogContent>
            </Dialog>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">FAQ Preview</h2>
                {faqCategories.map((faqCategory) => (
                    <Accordion
                        type="single"
                        collapsible
                        className="mb-4"
                        key={faqCategory._id}
                    >
                        <AccordionItem value={faqCategory._id}>
                            <AccordionTrigger>
                                {faqCategory.category}
                            </AccordionTrigger>
                            <AccordionContent>
                                {faqCategory.questions.map(
                                    (question, index) => (
                                        <div key={index} className="mb-4">
                                            <h3 className="font-semibold">
                                                {question.q}
                                            </h3>
                                            <p>{question.a}</p>
                                        </div>
                                    )
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </>
    );
};

export default FAQ;
