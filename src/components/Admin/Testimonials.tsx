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
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export type Testimonial = {
    _id: string;
    name: string;
    role: string;
    testimonial: string;
    createdAt: string;
    updatedAt: string;
};

type TestimonialProps = {
    testimonials: Testimonial[];
};

const onAdd = async (newItem: any) => {
    try {
        const response = await axios.post("/api/testimonials", newItem);
        toast({
            title: "Success",
            description: "testimonial added successfully",
        });
    } catch (error) {
        console.error("Error adding :testimonial", error);
        toast({
            title: "Error",
            description: "Failed to add testimonial",
            variant: "destructive",
        });
    }
};

const onUpdate = async (updatedItem: any) => {
    try {
        await axios.put(
            "/api/testimonials",
            updatedItem
        );
        toast({
            title: "Success",
            description: "testimonial updated successfully",
        });
    } catch (error) {
        console.error("Error updating testimonial:", error);
        toast({
            title: "Error",
            description: "Failed to update testimonial",
            variant: "destructive",
        });
    }
};
const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
    const [isAddTestimonialOpen, setIsAddTestimonialOpen] =
        React.useState(false);
    const [isUpdateTestimonialOpen, setIsUpdateTestimonialOpen] =
        React.useState(false);
    const [currentTestimonial, setCurrentTestimonial] =
        React.useState<Testimonial | null>(null);
    const [newTestimonial, setNewTestimonial] = React.useState({
        name: "",
        role: "",
        testimonial: "",
    });
    const [selectedTestimonials, setSelectedTestimonials] = React.useState<string[]>(
        []
    );

    const onDelete = async () => {
        try {
            await axios.delete("/api/testimonials", {
                data: { id: selectedTestimonials[0] },
            });
            toast({
                title: "Success",
                description: " testimonial deleted successfully" ,
            });
        } catch (error) {
            console.error(" testimonialError deleting :", error);
            toast({
                title: "Error",
                description: " testimonialFailed to delete ",
                variant: "destructive",
            });
        }
    };
    const handleAddTestimonial = () => {
        onAdd(newTestimonial);
        setIsAddTestimonialOpen(false);
        setNewTestimonial({ name: "", role: "", testimonial: "" });
    };

    const handleUpdateTestimonial = () => {
        if (currentTestimonial) {
            onUpdate(currentTestimonial);
            setIsUpdateTestimonialOpen(false);
            setCurrentTestimonial(null);
        }
    };

    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <Dialog
                    open={isAddTestimonialOpen}
                    onOpenChange={setIsAddTestimonialOpen}
                >
                    <DialogTrigger asChild>
                        <Button>Add New Testimonial</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Testimonial</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <Input
                                placeholder="Name"
                                value={newTestimonial.name}
                                onChange={(e) =>
                                    setNewTestimonial({
                                        ...newTestimonial,
                                        name: e.target.value,
                                    })
                                }
                            />
                            <Input
                                placeholder="Role"
                                value={newTestimonial.role}
                                onChange={(e) =>
                                    setNewTestimonial({
                                        ...newTestimonial,
                                        role: e.target.value,
                                    })
                                }
                            />
                            <Textarea
                                placeholder="Testimonial"
                                value={newTestimonial.testimonial}
                                onChange={(e) =>
                                    setNewTestimonial({
                                        ...newTestimonial,
                                        testimonial: e.target.value,
                                    })
                                }
                            />
                            <Button onClick={handleAddTestimonial}>
                                Add Testimonial
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
                <Button
                    variant="destructive"
                    onClick={onDelete}
                    disabled={selectedTestimonials.length === 0}
                >
                    Delete Selected
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Select</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Testimonial</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {testimonials.map((testimonial) => (
                        <TableRow key={testimonial._id}>
                            <TableCell>
                                <Checkbox
                                    checked={selectedTestimonials.includes(
                                        testimonial._id
                                    )}
                                    onCheckedChange={(checked) => {
                                        setSelectedTestimonials(
                                            checked
                                                ? [
                                                      ...selectedTestimonials,
                                                      testimonial._id,
                                                  ]
                                                : selectedTestimonials.filter(
                                                      (id) =>
                                                          id !== testimonial._id
                                                  )
                                        );
                                    }}
                                />
                            </TableCell>
                            <TableCell>{testimonial.name}</TableCell>
                            <TableCell>{testimonial.role}</TableCell>
                            <TableCell>
                                {testimonial.testimonial.substring(0, 50)}...
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setCurrentTestimonial(testimonial);
                                        setIsUpdateTestimonialOpen(true);
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
                open={isUpdateTestimonialOpen}
                onOpenChange={setIsUpdateTestimonialOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Testimonial</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Input
                            placeholder="Name"
                            value={currentTestimonial?.name || ""}
                            onChange={(e) =>
                                setCurrentTestimonial((curr) =>
                                    curr
                                        ? { ...curr, name: e.target.value }
                                        : null
                                )
                            }
                        />
                        <Input
                            placeholder="Role"
                            value={currentTestimonial?.role || ""}
                            onChange={(e) =>
                                setCurrentTestimonial((curr) =>
                                    curr
                                        ? { ...curr, role: e.target.value }
                                        : null
                                )
                            }
                        />
                        <Textarea
                            placeholder="Testimonial"
                            value={currentTestimonial?.testimonial || ""}
                            onChange={(e) =>
                                setCurrentTestimonial((curr) =>
                                    curr
                                        ? {
                                              ...curr,
                                              testimonial: e.target.value,
                                          }
                                        : null
                                )
                            }
                        />
                        <Button onClick={handleUpdateTestimonial}>
                            Update Testimonial
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Testimonial;
