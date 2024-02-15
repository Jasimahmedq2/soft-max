import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "./form";
import { Tab } from "../form/formComponent";

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="hover:text-[#adadad] text-black cursor-pointer">
          Login/Register
        </p>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-1/2 bg-white rounded">
        <div className="sm:flex justify-center items-center">
          <Tab />
        </div>
      </DialogContent>
    </Dialog>
  );
}
