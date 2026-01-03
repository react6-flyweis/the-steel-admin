import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  //   DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

type PayTaxDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedFile: File | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMarkAsPaid: () => void;
};

export default function PayTaxDialog({
  open,
  onOpenChange,
  selectedFile,
  onFileChange,
  onMarkAsPaid,
}: PayTaxDialogProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="">
          <DialogTitle>Upload Payment Proof</DialogTitle>
          {/* <DialogDescription>
            Drop your CSV or Excel file here or click to browse
          </DialogDescription> */}
        </DialogHeader>

        <div className="pt-4 border-t">
          <div className="rounded-lg border-2 border-dashed border-muted-foreground/40 p-4 text-center">
            <div className="mb-4 text-muted-foreground flex justify-center">
              <UploadIcon />
            </div>
            <p className="mb-2">Drop your CSV or Excel file here</p>
            <p className="text-sm text-muted-foreground mb-4">
              or click to browse
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept=",
                .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
                application/vnd.ms-excel"
              onChange={onFileChange}
              className="hidden"
            />

            <Button
              variant="default"
              size="default"
              onClick={() => fileInputRef.current?.click()}
              className="mx-auto"
            >
              {selectedFile ? "Change file" : "Choose file"}
            </Button>

            {selectedFile && (
              <div className="mt-3 text-sm text-muted-foreground">
                Selected: {selectedFile.name}
              </div>
            )}
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Supported formats: CSV, Excel (.xlsx, .xls)
            <br />
            Required columns: Company, Contact, Email
          </div>
        </div>

        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button
              className="bg-gray-400 text-gray-800 px-4"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button className="px-4" onClick={onMarkAsPaid}>
            Mark as Paid
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
