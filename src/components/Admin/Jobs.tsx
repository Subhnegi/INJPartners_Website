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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export type JobOpening = {
    _id: string;
    title: string;
    department: string;
    location: string;
    type: "Full-time" | "Part-time" | "Contract" | "Internship";
    description: string;
    responsibilities: string[];
    qualifications: string[];
    createdAt: string;
    updatedAt: string;
};

type JobProps = {
    jobs: JobOpening[];
};
const onAdd = async (newItem: any) => {
    try {
        const response = await axios.post("/api/careers", newItem);
        toast({
            title: "Success",
            description: "job added successfully",
        });
    } catch (error) {
        console.error("Error adding job:", error);
        toast({
            title: "Error",
            description: "Failed to add job",
            variant: "destructive",
        });
    }
};

const onUpdate = async (updatedItem: any) => {
    try {
        await axios.put(
            "/api/careers",
            updatedItem
        );
        toast({
            title: "Success",
            description: "job updated successfully",
        });
    } catch (error) {
        console.error("Error updating job:", error);
        toast({
            title: "Error",
            description: "Failed to update job",
            variant: "destructive",
        });
    }
};


const Job: React.FC<JobProps> = ({
    jobs
}) => {
    const [isAddJobOpen, setIsAddJobOpen] = React.useState(false);
    const [isUpdateJobOpen, setIsUpdateJobOpen] = React.useState(false);
    const [currentJob, setCurrentJob] = React.useState<JobOpening | null>(null);
    const [newJob, setNewJob] = React.useState<
        Omit<JobOpening, "_id" | "createdAt" | "updatedAt">
    >({
        title: "",
        department: "",
        location: "",
        type: "Full-time",
        description: "",
        responsibilities: [""],
        qualifications: [""],
    });
    const [selectedJobs, setSelectedJobs] = React.useState<string[]>([]);
    const onDelete = async () => {
        try {
            await axios.delete("/api/careers", {data: {id:selectedJobs[0]}})
            toast({
                title: "Success",
                description: "job deleted successfully",
            });
        } catch (error) {
            console.error("Error deleting job:", error);
            toast({
                title: "Error",
                description: "Failed to delete job",
                variant: "destructive",
            });
        }
    };
    const handleAddJob = () => {
        onAdd(newJob);
        setIsAddJobOpen(false);
        setNewJob({
            title: "",
            department: "",
            location: "",
            type: "Full-time",
            description: "",
            responsibilities: [""],
            qualifications: [""],
        });
    };

    const handleUpdateJob = () => {
        if (currentJob) {
            onUpdate(currentJob);
            setIsUpdateJobOpen(false);
            setCurrentJob(null);
        }
    };

    const renderJobForm = (
        job: Omit<JobOpening, "_id" | "createdAt" | "updatedAt">,
        setJob: React.Dispatch<React.SetStateAction<any>>
    ) => (
        <div className="grid gap-4 py-4">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    value={job.title}
                    onChange={(e) => setJob({ ...job, title: e.target.value })}
                />
            </div>
            <div>
                <Label htmlFor="department">Department</Label>
                <Input
                    id="department"
                    value={job.department}
                    onChange={(e) =>
                        setJob({ ...job, department: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="location">Location</Label>
                <Input
                    id="location"
                    value={job.location}
                    onChange={(e) =>
                        setJob({ ...job, location: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="type">Type</Label>
                <Select
                    value={job.type}
                    onValueChange={(value) => setJob({ ...job, type: value })}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    value={job.description}
                    onChange={(e) =>
                        setJob({ ...job, description: e.target.value })
                    }
                />
            </div>
            <div>
                <Label>Responsibilities</Label>
                <ScrollArea className="h-[150px] border rounded-md p-4">
                    {job.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <Input
                                value={responsibility}
                                onChange={(e) => {
                                    const newResponsibilities = [
                                        ...job.responsibilities,
                                    ];
                                    newResponsibilities[index] = e.target.value;
                                    setJob({
                                        ...job,
                                        responsibilities: newResponsibilities,
                                    });
                                }}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                className="ml-2"
                                onClick={() => {
                                    const newResponsibilities =
                                        job.responsibilities.filter(
                                            (_, i) => i !== index
                                        );
                                    setJob({
                                        ...job,
                                        responsibilities: newResponsibilities,
                                    });
                                }}
                            >
                                X
                            </Button>
                        </div>
                    ))}
                    <Button
                        onClick={() =>
                            setJob({
                                ...job,
                                responsibilities: [...job.responsibilities, ""],
                            })
                        }
                    >
                        Add Responsibility
                    </Button>
                </ScrollArea>
            </div>
            <div>
                <Label>Qualifications</Label>
                <ScrollArea className="h-[150px] border rounded-md p-4">
                    {job.qualifications.map((qualification, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <Input
                                value={qualification}
                                onChange={(e) => {
                                    const newQualifications = [
                                        ...job.qualifications,
                                    ];
                                    newQualifications[index] = e.target.value;
                                    setJob({
                                        ...job,
                                        qualifications: newQualifications,
                                    });
                                }}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                className="ml-2"
                                onClick={() => {
                                    const newQualifications =
                                        job.qualifications.filter(
                                            (_, i) => i !== index
                                        );
                                    setJob({
                                        ...job,
                                        qualifications: newQualifications,
                                    });
                                }}
                            >
                                X
                            </Button>
                        </div>
                    ))}
                    <Button
                        onClick={() =>
                            setJob({
                                ...job,
                                qualifications: [...job.qualifications, ""],
                            })
                        }
                    >
                        Add Qualification
                    </Button>
                </ScrollArea>
            </div>
        </div>
    );

    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <Dialog open={isAddJobOpen} onOpenChange={setIsAddJobOpen}>
                    <DialogTrigger asChild>
                        <Button>Add New Job Opening</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>Add New Job Opening</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[80vh]">
                            {renderJobForm(newJob, setNewJob)}
                        </ScrollArea>
                        <Button onClick={handleAddJob}>Add Job Opening</Button>
                    </DialogContent>
                </Dialog>
                <Button
                    variant="destructive"
                    onClick={onDelete}
                    disabled={selectedJobs.length === 0}
                >
                    Delete Selected
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Select</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobs.map((job) => (
                        <TableRow key={job._id}>
                            <TableCell>
                                <Checkbox
                                    checked={selectedJobs.includes(job._id)}
                                    onCheckedChange={(checked) => {
                                        setSelectedJobs(
                                            checked
                                                ? [...selectedJobs, job._id]
                                                : selectedJobs.filter(
                                                      (id) => id !== job._id
                                                  )
                                        );
                                    }}
                                />
                            </TableCell>
                            <TableCell>{job.title}</TableCell>
                            <TableCell>{job.department}</TableCell>
                            <TableCell>{job.location}</TableCell>
                            <TableCell>{job.type}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setCurrentJob(job);
                                        setIsUpdateJobOpen(true);
                                    }}
                                >
                                    Update
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={isUpdateJobOpen} onOpenChange={setIsUpdateJobOpen}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Update Job Opening</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[80vh]">
                        {currentJob && renderJobForm(currentJob, setCurrentJob)}
                    </ScrollArea>
                    <Button onClick={handleUpdateJob}>
                        Update Job Opening
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Job;
