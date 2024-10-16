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

export type Section = {
    title: string;
    content: string[];
};

export type Content = {
    introduction: string;
    sections: Section[];
    conclusion: string;
};

export type BlogPost = {
    _id: string;
    title: string;
    category: string;
    summary: string;
    image: string;
    date: string;
    author: string;
    content: Content;
    readingTime: number;
    tags: string[];
    relatedPosts: string[];
};

type BlogProps = {
    blogs: BlogPost[];
    selectedBlogs: string[];
    setSelectedBlogs: React.Dispatch<React.SetStateAction<string[]>>;
    onUpdate: (blog: BlogPost) => void;
    onDelete: () => void;
    onAdd: (newBlog: Omit<BlogPost, "_id">) => void;
};

const Blog: React.FC<BlogProps> = ({
    blogs,
    selectedBlogs,
    setSelectedBlogs,
    onUpdate,
    onDelete,
    onAdd,
}) => {
    const [isAddBlogOpen, setIsAddBlogOpen] = React.useState(false);
    const [isUpdateBlogOpen, setIsUpdateBlogOpen] = React.useState(false);
    const [currentBlog, setCurrentBlog] = React.useState<BlogPost | null>(null);
    const [newBlog, setNewBlog] = React.useState<Omit<BlogPost, "_id">>({
        title: "",
        category: "",
        summary: "",
        image: "",
        date: new Date().toISOString().split("T")[0],
        author: "",
        content: {
            introduction: "",
            sections: [{ title: "", content: [""] }],
            conclusion: "",
        },
        readingTime: 0,
        tags: [],
        relatedPosts: [],
    });

    const handleAddBlog = () => {
        onAdd(newBlog);
        setIsAddBlogOpen(false);
        setNewBlog({
            title: "",
            category: "",
            summary: "",
            image: "",
            date: new Date().toISOString().split("T")[0],
            author: "",
            content: {
                introduction: "",
                sections: [{ title: "", content: [""] }],
                conclusion: "",
            },
            readingTime: 0,
            tags: [],
            relatedPosts: [],
        });
    };

    const handleUpdateBlog = () => {
        if (currentBlog) {
            onUpdate(currentBlog);
            setIsUpdateBlogOpen(false);
            setCurrentBlog(null);
        }
    };

    const renderBlogForm = (
        blog: Omit<BlogPost, "_id">,
        setBlog: React.Dispatch<React.SetStateAction<any>>
    ) => (
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        value={blog.title}
                        onChange={(e) =>
                            setBlog({ ...blog, title: e.target.value })
                        }
                    />
                </div>
                <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                        id="category"
                        value={blog.category}
                        onChange={(e) =>
                            setBlog({ ...blog, category: e.target.value })
                        }
                    />
                </div>
            </div>
            <div>
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                    id="summary"
                    value={blog.summary}
                    onChange={(e) =>
                        setBlog({ ...blog, summary: e.target.value })
                    }
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                        id="image"
                        value={blog.image}
                        onChange={(e) =>
                            setBlog({ ...blog, image: e.target.value })
                        }
                    />
                </div>
                <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                        id="date"
                        type="date"
                        value={blog.date}
                        onChange={(e) =>
                            setBlog({ ...blog, date: e.target.value })
                        }
                    />
                </div>
            </div>
            <div>
                <Label htmlFor="author">Author</Label>
                <Input
                    id="author"
                    value={blog.author}
                    onChange={(e) =>
                        setBlog({ ...blog, author: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="introduction">Introduction</Label>
                <Textarea
                    id="introduction"
                    value={blog.content.introduction}
                    onChange={(e) =>
                        setBlog({
                            ...blog,
                            content: {
                                ...blog.content,
                                introduction: e.target.value,
                            },
                        })
                    }
                />
            </div>
            <div>
                <Label>Sections</Label>
                <ScrollArea className="h-[200px] border rounded-md p-4">
                    {blog.content.sections.map((section, index) => (
                        <div key={index} className="mb-4">
                            <Input
                                placeholder="Section Title"
                                value={section.title}
                                onChange={(e) => {
                                    const newSections = [
                                        ...blog.content.sections,
                                    ];
                                    newSections[index].title = e.target.value;
                                    setBlog({
                                        ...blog,
                                        content: {
                                            ...blog.content,
                                            sections: newSections,
                                        },
                                    });
                                }}
                                className="mb-2"
                            />
                            <Textarea
                                placeholder="Section Content"
                                value={section.content.join("\n")}
                                onChange={(e) => {
                                    const newSections = [
                                        ...blog.content.sections,
                                    ];
                                    newSections[index].content =
                                        e.target.value.split("\n");
                                    setBlog({
                                        ...blog,
                                        content: {
                                            ...blog.content,
                                            sections: newSections,
                                        },
                                    });
                                }}
                            />
                        </div>
                    ))}
                    <Button
                        onClick={() =>
                            setBlog({
                                ...blog,
                                content: {
                                    ...blog.content,
                                    sections: [
                                        ...blog.content.sections,
                                        { title: "", content: [""] },
                                    ],
                                },
                            })
                        }
                    >
                        Add Section
                    </Button>
                </ScrollArea>
            </div>
            <div>
                <Label htmlFor="conclusion">Conclusion</Label>
                <Textarea
                    id="conclusion"
                    value={blog.content.conclusion}
                    onChange={(e) =>
                        setBlog({
                            ...blog,
                            content: {
                                ...blog.content,
                                conclusion: e.target.value,
                            },
                        })
                    }
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="readingTime">Reading Time (minutes)</Label>
                    <Input
                        id="readingTime"
                        type="number"
                        value={blog.readingTime}
                        onChange={(e) =>
                            setBlog({
                                ...blog,
                                readingTime: Number.parseInt(e.target.value),
                            })
                        }
                    />
                </div>
                <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                        id="tags"
                        value={blog.tags.join(", ")}
                        onChange={(e) =>
                            setBlog({
                                ...blog,
                                tags: e.target.value
                                    .split(",")
                                    .map((tag) => tag.trim()),
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <Dialog open={isAddBlogOpen} onOpenChange={setIsAddBlogOpen}>
                    <DialogTrigger asChild>
                        <Button>Add New Blog Post</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>Add New Blog Post</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[80vh]">
                            {renderBlogForm(newBlog, setNewBlog)}
                        </ScrollArea>
                        <Button onClick={handleAddBlog}>Add Blog Post</Button>
                    </DialogContent>
                </Dialog>
                <Button
                    variant="destructive"
                    onClick={onDelete}
                    disabled={selectedBlogs.length === 0}
                >
                    Delete Selected
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Select</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogs.map((blog) => (
                        <TableRow key={blog._id}>
                            <TableCell>
                                <Checkbox
                                    checked={selectedBlogs.includes(blog._id)}
                                    onCheckedChange={(checked) => {
                                        setSelectedBlogs(
                                            checked
                                                ? [...selectedBlogs, blog._id]
                                                : selectedBlogs.filter(
                                                      (id) => id !== blog._id
                                                  )
                                        );
                                    }}
                                />
                            </TableCell>
                            <TableCell>{blog.title}</TableCell>
                            <TableCell>{blog.category}</TableCell>
                            <TableCell>{blog.author}</TableCell>
                            <TableCell>
                                {new Date(blog.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setCurrentBlog(blog);
                                        setIsUpdateBlogOpen(true);
                                    }}
                                >
                                    Update
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={isUpdateBlogOpen} onOpenChange={setIsUpdateBlogOpen}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Update Blog Post</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[80vh]">
                        {currentBlog &&
                            renderBlogForm(currentBlog, setCurrentBlog)}
                    </ScrollArea>
                    <Button onClick={handleUpdateBlog}>Update Blog Post</Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Blog;
