"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import arrow from "../../assests/right-arrow.png";
import Image from "next/image";

interface Inputs {
  name: string;
  mobile_number: string;
  password: string;
  password2: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <Card className="shadow bg-white rounded w-11/12 sm:w-full">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a account to continue...</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <Label>name</Label>
              <Input
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                id="current"
                type="name"
              />
              {errors.name && (
                <i className="text-sm text-red-400">name is required</i>
              )}
            </div>
            <div className="space-y-1">
              <Label>mobile number</Label>
              <Input
                {...register("mobile_number", { required: true })}
                aria-invalid={errors.mobile_number ? "true" : "false"}
                id="new"
                type="text"
              />
              {errors.mobile_number && (
                <i className="text-sm text-red-400">
                  mobile number is required
                </i>
              )}
            </div>
            <div className="space-y-1">
              <Label>password</Label>
              <Input
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
                id="new"
                type="password"
              />
              {errors.password && (
                <i className="text-sm text-red-400">password is required</i>
              )}
            </div>
            <div className="space-y-1">
              <Label>confirm password</Label>
              <Input
                {...register("password2", { required: true })}
                aria-invalid={errors.password2 ? "true" : "false"}
                id="new"
                type="password"
              />
              {errors.password2 && (
                <i className="text-sm text-red-400">
                  {" "}
                  confirm password is required
                </i>
              )}
            </div>
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] space-x-2 mt-4 rounded"
            >
              <span className="text-[#f7fdfc] font-bold">Signup</span>
              <Image width={16} height={16} src={arrow} alt="arrow" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
