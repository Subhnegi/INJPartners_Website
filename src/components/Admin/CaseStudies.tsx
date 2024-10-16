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

export type Result = {
    category: string;
    before: number;
    after: number;
};

export type CaseStudy = {
    _id: string;
    title: string;
    description: string;
    image: string;
    client: string;
    overview: string;
    achievements: string[];
    methodology: string[];
    results: Result[];
    insights: string[];
    createdAt: string;
    updatedAt: string;
};

type CaseStudyProps = {
    caseStudies: CaseStudy[];
    selectedCaseStudies: string[];
    setSelectedCaseStudies: React.Dispatch<React.SetStateAction<string[]>>;
    onUpdate: (caseStudy: CaseStudy) => void;
    onDelete: () => void;
    onAdd: (
        newCaseStudy: Omit<CaseStudy, "_id" | "createdAt" | "updatedAt">
    ) => void;
};

const CaseStudy: React.FC<CaseStudyProps> = ({
    caseStudies,
    selectedCaseStudies,
    setSelectedCaseStudies,
    onUpdate,
    onDelete,
    onAdd,
}) => {
    const [isAddCaseStudyOpen, setIsAddCaseStudyOpen] = React.useState(false);
    const [isUpdateCaseStudyOpen, setIsUpdateCaseStudyOpen] =
        React.useState(false);
    const [currentCaseStudy, setCurrentCaseStudy] =
        React.useState<CaseStudy | null>(null);
    const [newCaseStudy, setNewCaseStudy] = React.useState<
        Omit<CaseStudy, "_id" | "createdAt" | "updatedAt">
    >({
        title: "",
        description: "",
        image: "",
        client: "",
        overview: "",
        achievements: [""],
        methodology: [""],
        results: [{ category: "", before: 0, after: 0 }],
        insights: [""],
    });

    const handleAddCaseStudy = () => {
        onAdd(newCaseStudy);
        setIsAddCaseStudyOpen(false);
        setNewCaseStudy({
            title: "",
            description: "",
            image: "",
            client: "",
            overview: "",
            achievements: [""],
            methodology: [""],
            results: [{ category: "", before: 0, after: 0 }],
            insights: [""],
        });
    };

    const handleUpdateCaseStudy = () => {
        if (currentCaseStudy) {
            onUpdate(currentCaseStudy);
            setIsUpdateCaseStudyOpen(false);
            setCurrentCaseStudy(null);
        }
    };

    const renderCaseStudyForm = (
        caseStudy: Omit<CaseStudy, "_id" | "createdAt" | "updatedAt">,
        setCaseStudy: React.Dispatch<React.SetStateAction<any>>
    ) => (
        <div className="grid gap-4 py-4">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    value={caseStudy.title}
                    onChange={(e) =>
                        setCaseStudy({ ...caseStudy, title: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    value={caseStudy.description}
                    onChange={(e) =>
                        setCaseStudy({
                            ...caseStudy,
                            description: e.target.value,
                        })
                    }
                />
            </div>
            <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                    id="image"
                    value={caseStudy.image}
                    onChange={(e) =>
                        setCaseStudy({ ...caseStudy, image: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="client">Client</Label>
                <Input
                    id="client"
                    value={caseStudy.client}
                    onChange={(e) =>
                        setCaseStudy({ ...caseStudy, client: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="overview">Overview</Label>
                <Textarea
                    id="overview"
                    value={caseStudy.overview}
                    onChange={(e) =>
                        setCaseStudy({ ...caseStudy, overview: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Achievements</Label>
                <ScrollArea className="h-[100px] border rounded-md p-4">
                    {caseStudy.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <Input
                                value={achievement}
                                onChange={(e) => {
                                    const newAchievements = [
                                        ...caseStudy.achievements,
                                    ];
                                    newAchievements[index] = e.target.value;
                                    setCaseStudy({
                                        ...caseStudy,
                                        achievements: newAchievements,
                                    });
                                }}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                className="ml-2"
                                onClick={() => {
                                    const newAchievements =
                                        caseStudy.achievements.filter(
                                            (_, i) => i !== index
                                        );
                                    setCaseStudy({
                                        ...caseStudy,
                                        achievements: newAchievements,
                                    });
                                }}
                            >
                                X
                            </Button>
                        </div>
                    ))}
                    <Button
                        onClick={() =>
                            setCaseStudy({
                                ...caseStudy,
                                achievements: [...caseStudy.achievements, ""],
                            })
                        }
                    >
                        Add Achievement
                    </Button>
                </ScrollArea>
            </div>
            <div>
                <Label>Methodology</Label>
                <ScrollArea className="h-[100px] border rounded-md p-4">
                    {caseStudy.methodology.map((method, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <Input
                                value={method}
                                onChange={(e) => {
                                    const newMethodology = [
                                        ...caseStudy.methodology,
                                    ];
                                    newMethodology[index] = e.target.value;
                                    setCaseStudy({
                                        ...caseStudy,
                                        methodology: newMethodology,
                                    });
                                }}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                className="ml-2"
                                onClick={() => {
                                    const newMethodology =
                                        caseStudy.methodology.filter(
                                            (_, i) => i !== index
                                        );
                                    setCaseStudy({
                                        ...caseStudy,
                                        methodology: newMethodology,
                                    });
                                }}
                            >
                                X
                            </Button>
                        </div>
                    ))}
                    <Button
                        onClick={() =>
                            setCaseStudy({
                                ...caseStudy,
                                methodology: [...caseStudy.methodology, ""],
                            })
                        }
                    >
                        Add Method
                    </Button>
                </ScrollArea>
            </div>
            <div>
                <Label>Results</Label>
                <ScrollArea className="h-[200px] border rounded-md p-4">
                    {caseStudy.results.map((result, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-4 gap-2 mb-2"
                        >
                            <Input
                                placeholder="Category"
                                value={result.category}
                                onChange={(e) => {
                                    const newResults = [...caseStudy.results];
                                    newResults[index].category = e.target.value;
                                    setCaseStudy({
                                        ...caseStudy,
                                        results: newResults,
                                    });
                                }}
                            />
                            <Input
                                type="number"
                                placeholder="Before"
                                value={result.before}
                                onChange={(e) => {
                                    const newResults = [...caseStudy.results];
                                    newResults[index].before = Number(
                                        e.target.value
                                    );
                                    setCaseStudy({
                                        ...caseStudy,
                                        results: newResults,
                                    });
                                }}
                            />
                            <Input
                                type="number"
                                placeholder="After"
                                value={result.after}
                                onChange={(e) => {
                                    const newResults = [...caseStudy.results];
                                    newResults[index].after = Number(
                                        e.target.value
                                    );
                                    setCaseStudy({
                                        ...caseStudy,
                                        results: newResults,
                                    });
                                }}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => {
                                    const newResults = caseStudy.results.filter(
                                        (_, i) => i !== index
                                    );
                                    setCaseStudy({
                                        ...caseStudy,
                                        results: newResults,
                                    });
                                }}
                            >
                                X
                            </Button>
                        </div>
                    ))}
                    <Button
                        onClick={() =>
                            setCaseStudy({
                                ...caseStudy,
                                results: [
                                    ...caseStudy.results,
                                    { category: "", before: 0, after: 0 },
                                ],
                            })
                        }
                    >
                        Add Result
                    </Button>
                </ScrollArea>
            </div>
            <div>
                <Label>Insights</Label>
                <ScrollArea className="h-[100px] border rounded-md p-4">
                    {caseStudy.insights.map((insight, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <Input
                                value={insight}
                                onChange={(e) => {
                                    const newInsights = [...caseStudy.insights];
                                    newInsights[index] = e.target.value;
                                    setCaseStudy({
                                        ...caseStudy,
                                        insights: newInsights,
                                    });
                                }}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                className="ml-2"
                                onClick={() => {
                                    const newInsights =
                                        caseStudy.insights.filter(
                                            (_, i) => i !== index
                                        );
                                    setCaseStudy({
                                        ...caseStudy,
                                        insights: newInsights,
                                    });
                                }}
                            >
                                X
                            </Button>
                        </div>
                    ))}
                    <Button
                        onClick={() =>
                            setCaseStudy({
                                ...caseStudy,
                                insights: [...caseStudy.insights, ""],
                            })
                        }
                    >
                        Add Insight
                    </Button>
                </ScrollArea>
            </div>
        </div>
    );

    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <Dialog
                    open={isAddCaseStudyOpen}
                    onOpenChange={setIsAddCaseStudyOpen}
                >
                    <DialogTrigger asChild>
                        <Button>Add New Case Study</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>Add New Case Study</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[80vh]">
                            {renderCaseStudyForm(newCaseStudy, setNewCaseStudy)}
                        </ScrollArea>
                        <Button onClick={handleAddCaseStudy}>
                            Add Case Study
                        </Button>
                    </DialogContent>
                </Dialog>
                <Button
                    variant="destructive"
                    onClick={onDelete}
                    disabled={selectedCaseStudies.length === 0}
                >
                    Delete Selected
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Select</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {caseStudies.map((caseStudy) => (
                        <TableRow key={caseStudy._id}>
                            <TableCell>
                                <Checkbox
                                    checked={selectedCaseStudies.includes(
                                        caseStudy._id
                                    )}
                                    onCheckedChange={(checked) => {
                                        setSelectedCaseStudies(
                                            checked
                                                ? [
                                                      ...selectedCaseStudies,
                                                      caseStudy._id,
                                                  ]
                                                : selectedCaseStudies.filter(
                                                      (id) =>
                                                          id !== caseStudy._id
                                                  )
                                        );
                                    }}
                                />
                            </TableCell>
                            <TableCell>{caseStudy.title}</TableCell>
                            <TableCell>{caseStudy.client}</TableCell>
                            <TableCell>
                                {new Date(
                                    caseStudy.createdAt
                                ).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setCurrentCaseStudy(caseStudy);
                                        setIsUpdateCaseStudyOpen(true);
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
                open={isUpdateCaseStudyOpen}
                onOpenChange={setIsUpdateCaseStudyOpen}
            >
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Update Case Study</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[80vh]">
                        {currentCaseStudy &&
                            renderCaseStudyForm(
                                currentCaseStudy,
                                setCurrentCaseStudy
                            )}
                    </ScrollArea>
                    <Button onClick={handleUpdateCaseStudy}>
                        Update Case Study
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CaseStudy;
