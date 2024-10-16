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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type TeamMember = {
    _id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
};

type MemberProps = {
    members: TeamMember[];
    selectedMembers: string[];
    setSelectedMembers: React.Dispatch<React.SetStateAction<string[]>>;
    onUpdate: (member: TeamMember) => void;
    onDelete: () => void;
    onAdd: (
        newMember: Omit<TeamMember, "_id" | "createdAt" | "updatedAt">
    ) => void;
};

const Member: React.FC<MemberProps> = ({
    members,
    selectedMembers,
    setSelectedMembers,
    onUpdate,
    onDelete,
    onAdd,
}) => {
    const [isAddMemberOpen, setIsAddMemberOpen] = React.useState(false);
    const [isUpdateMemberOpen, setIsUpdateMemberOpen] = React.useState(false);
    const [currentMember, setCurrentMember] = React.useState<TeamMember | null>(
        null
    );
    const [newMember, setNewMember] = React.useState<
        Omit<TeamMember, "_id" | "createdAt" | "updatedAt">
    >({
        name: "",
        role: "",
        bio: "",
        imageUrl: "",
    });

    const handleAddMember = () => {
        onAdd(newMember);
        setIsAddMemberOpen(false);
        setNewMember({
            name: "",
            role: "",
            bio: "",
            imageUrl: "",
        });
    };

    const handleUpdateMember = () => {
        if (currentMember) {
            onUpdate(currentMember);
            setIsUpdateMemberOpen(false);
            setCurrentMember(null);
        }
    };

    const renderMemberForm = (
        member: Omit<TeamMember, "_id" | "createdAt" | "updatedAt">,
        setMember: React.Dispatch<React.SetStateAction<any>>
    ) => (
        <div className="grid gap-4 py-4">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    value={member.name}
                    onChange={(e) =>
                        setMember({ ...member, name: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="role">Role</Label>
                <Input
                    id="role"
                    value={member.role}
                    onChange={(e) =>
                        setMember({ ...member, role: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                    id="bio"
                    value={member.bio}
                    onChange={(e) =>
                        setMember({ ...member, bio: e.target.value })
                    }
                />
            </div>
            <div>
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                    id="imageUrl"
                    value={member.imageUrl}
                    onChange={(e) =>
                        setMember({ ...member, imageUrl: e.target.value })
                    }
                />
            </div>
        </div>
    );

    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <Dialog
                    open={isAddMemberOpen}
                    onOpenChange={setIsAddMemberOpen}
                >
                    <DialogTrigger asChild>
                        <Button>Add New Team Member</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>Add New Team Member</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[80vh]">
                            {renderMemberForm(newMember, setNewMember)}
                        </ScrollArea>
                        <Button onClick={handleAddMember}>
                            Add Team Member
                        </Button>
                    </DialogContent>
                </Dialog>
                <Button
                    variant="destructive"
                    onClick={onDelete}
                    disabled={selectedMembers.length === 0}
                >
                    Delete Selected
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Select</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {members.map((member) => (
                        <TableRow key={member._id}>
                            <TableCell>
                                <Checkbox
                                    checked={selectedMembers.includes(
                                        member._id
                                    )}
                                    onCheckedChange={(checked) => {
                                        setSelectedMembers(
                                            checked
                                                ? [
                                                      ...selectedMembers,
                                                      member._id,
                                                  ]
                                                : selectedMembers.filter(
                                                      (id) => id !== member._id
                                                  )
                                        );
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <Avatar>
                                    <AvatarImage
                                        src={member.imageUrl}
                                        alt={member.name}
                                    />
                                    <AvatarFallback>
                                        {member.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell>{member.name}</TableCell>
                            <TableCell>{member.role}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setCurrentMember(member);
                                        setIsUpdateMemberOpen(true);
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
                open={isUpdateMemberOpen}
                onOpenChange={setIsUpdateMemberOpen}
            >
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Update Team Member</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[80vh]">
                        {currentMember &&
                            renderMemberForm(currentMember, setCurrentMember)}
                    </ScrollArea>
                    <Button onClick={handleUpdateMember}>
                        Update Team Member
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Member;
