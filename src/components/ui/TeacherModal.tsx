"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./button";
import Image from "next/image";
import arrow from "../../assests/right-arrow.png";
import { useEffect } from "react";
import { toast } from "./use-toast";
import { useTeacherRequestMutation } from "@/redux/api/teacherApi";

interface Inputs {
  fullName: string;
  phone_number: string;
  email: string;
}

const TeacherModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [sentRequest, { isLoading, isSuccess, isError }] =
    useTeacherRequestMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sentRequest(data);
    console.log(data);
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "something went wrong",
      });
    }
    if (isSuccess) {
      toast({
        title: "successfully sent a request",
      });
      reset();
    }
  }, [reset, isLoading, isSuccess, isError]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group">
          <Button className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] sm:space-x-2">
            <span className="text-[#f7fdfc] sm:font-bold">Teacher Request</span>
            <Image width={16} height={16} src={arrow} alt="arrow" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded">
        <Card className="shadow bg-white rounded w-11/12 sm:w-full">
          <CardHeader>
            <CardTitle>Teacher</CardTitle>
            <CardDescription>Join as a Teacher</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-1">
                <Label>fullName</Label>
                <Input
                  {...register("fullName", { required: true })}
                  aria-invalid={errors.fullName ? "true" : "false"}
                  id="current"
                  type="text"
                />
                {errors.fullName && (
                  <i className="text-sm text-red-400">name is required</i>
                )}
              </div>
              <div className="space-y-1">
                <Label>email</Label>
                <Input
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  id="new"
                  type="text"
                />
                {errors.email && (
                  <i className="text-sm text-red-400">email is required</i>
                )}
              </div>
              <div className="space-y-1">
                <Label>mobile number</Label>
                <Input
                  {...register("phone_number", { required: true })}
                  aria-invalid={errors.phone_number ? "true" : "false"}
                  id="new"
                  type="text"
                />
                {errors.phone_number && (
                  <i className="text-sm text-red-400">
                    mobile number is required
                  </i>
                )}
              </div>

              <Button
                type="submit"
                className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] space-x-2 mt-4 rounded"
              >
                <span className="text-[#f7fdfc] font-bold">
                  {isLoading ? "looding..." : "Send request"}
                </span>
                <Image width={16} height={16} src={arrow} alt="arrow" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherModal;
