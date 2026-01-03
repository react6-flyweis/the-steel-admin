import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Stage {
  name: string;
  count: number;
  color: string;
}

interface ManageStagesDialogProps {
  stages: Stage[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ManageStagesDialog({
  stages,
  open,
  onOpenChange,
}: ManageStagesDialogProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newStageName, setNewStageName] = useState("");

  const handleSaveNewStage = () => {
    // Add logic to save new stage
    console.log("Saving new stage:", newStageName);
    setNewStageName("");
    setIsAddDialogOpen(false);
  };

  const handleCancel = () => {
    setNewStageName("");
    setIsAddDialogOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="w-40 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Manage Stages
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-semibold">
              Pipeline stage
            </DialogTitle>
          </DialogHeader>
          <Separator />
          <div className="px-6">
            {stages.map((stage) => (
              <div
                key={stage.name}
                className="text-lg text-gray-900 py-2 cursor-pointer hover:bg-gray-50 -mx-6 px-6 transition-colors flex items-center justify-between"
              >
                <span>{stage.name}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Edit stage:", stage.name);
                    }}
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Delete stage:", stage.name);
                    }}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Separator />
          <div className="px-6 pb-5 flex justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-5     text-base font-medium rounded-full"
              onClick={() => setIsAddDialogOpen(true)}
            >
              Add
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add New Stage Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Add new Pipeline stage
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 ">
            <div className="space-y-3">
              <Label htmlFor="stageName" className="text-base font-medium">
                Stage Name
              </Label>
              <Input
                id="stageName"
                placeholder="Add new stage name"
                value={newStageName}
                onChange={(e) => setNewStageName(e.target.value)}
                className="h-14 text-base"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 pt-4">
            <Button
              variant="ghost"
              className="px-12 py-6 text-base font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className="px-12 py-6 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              onClick={handleSaveNewStage}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
