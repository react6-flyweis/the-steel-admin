import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import SuccessDialog from "@/components/success-dialog";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
  FieldDescription,
  FieldSet,
} from "@/components/ui/field";

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function ProfileDialog({ open, onOpenChange }: Props) {
  const [localOpen, setLocalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const isControlled =
    typeof open === "boolean" && typeof onOpenChange === "function";
  const dialogOpen = isControlled ? open! : localOpen;
  const setDialogOpen = (v: boolean) => {
    if (isControlled) onOpenChange!(v);
    else setLocalOpen(v);
  };
  const ProfileSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    mobile: z
      .string()
      .min(7, { message: "Enter a valid mobile number" })
      .max(24)
      .optional(),
    location: z.string().min(1, { message: "Location is required" }),
  });

  type ProfileForm = z.infer<typeof ProfileSchema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "Your name",
      email: "adminname@gmail.com",
      mobile: "9876543211110",
      location: "USA",
    },
  });

  const handleSave = (data: ProfileForm) => {
    // Placeholder: persist changes
    console.log("profile save", data);
    setDialogOpen(false);
    setShowSuccess(true);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-lg p-0">
        <DialogHeader className="flex-row items-center p-5 border-b gap-4">
          <img
            src="https://i.pravatar.cc/72?img=12"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <DialogTitle className="text-lg font-semibold">
              {watch("name")}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              {watch("email")}
            </DialogDescription>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleSave)} className="p-6">
          <FieldSet>
            <Field orientation="horizontal">
              <FieldLabel>Name</FieldLabel>
              <FieldContent>
                <Input
                  {...register("name")}
                  className="text-right border-0 border-b border-gray-200 focus:outline-none"
                />
                <FieldError
                  errors={errors.name ? [{ message: errors.name.message }] : []}
                />
              </FieldContent>
            </Field>

            <Field orientation="horizontal">
              <FieldLabel>Email account</FieldLabel>
              <FieldContent>
                <Input
                  {...register("email")}
                  className="text-right border-0 border-b border-gray-200 focus:outline-none"
                />
                <FieldError
                  errors={
                    errors.email ? [{ message: errors.email.message }] : []
                  }
                />
              </FieldContent>
            </Field>

            <Field orientation="horizontal">
              <FieldLabel>Mobile number</FieldLabel>
              <FieldContent>
                <Input
                  {...register("mobile")}
                  className="text-right border-0 border-b border-gray-200 focus:outline-none"
                />
                <FieldDescription className="text-xs text-muted-foreground">
                  Include country code if needed
                </FieldDescription>
                <FieldError
                  errors={
                    errors.mobile ? [{ message: errors.mobile.message }] : []
                  }
                />
              </FieldContent>
            </Field>

            <Field orientation="horizontal">
              <FieldLabel>Location</FieldLabel>
              <FieldContent>
                <Input
                  {...register("location")}
                  className="text-right border-0 border-b border-gray-200 focus:outline-none"
                />
                <FieldError
                  errors={
                    errors.location
                      ? [{ message: errors.location.message }]
                      : []
                  }
                />
              </FieldContent>
            </Field>
          </FieldSet>
        </form>

        <DialogFooter className="px-6 py-4 border-t sm:justify-center gap-5">
          <Button variant="ghost" onClick={() => alert("Change password flow")}>
            Change Password
          </Button>

          <Button
            onClick={handleSubmit(handleSave)}
            className="rounded-md w-40"
          >
            Save Change
          </Button>
        </DialogFooter>
      </DialogContent>
      <SuccessDialog
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Profile Updated Successfully!"
      />
    </Dialog>
  );
}
