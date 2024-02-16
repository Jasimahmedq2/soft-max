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
import Image from "next/image";
import arrow from "../../assests/right-arrow.png";
import { useLoginMutation } from "@/redux/api/authApi";
import { useEffect } from "react";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/app/hook";
import { LoginAction } from "@/redux/features/authSlice";

interface Inputs {
  mobile_number: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [LoginUser, { data: UserData, isLoading, isError, isSuccess }] =
    useLoginMutation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    LoginUser(data);
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "something went wrong",
      });
    }
    if (isSuccess) {
      toast({
        title: "successfully created a new user",
      });
      
      if (UserData?.user?.role === "student") {
        router.push("/dashboard/student/courses");
      }
      if (UserData?.user?.role === "teacher") {
        router.push("/dashboard/teacher/courses");
      }
      if (UserData?.user?.role === "admin") {
        router.push("/dashboard/admin/teacher_request");
      }

      reset();
      dispatch(LoginAction(UserData));
      console.log(UserData);
    }
  }, [reset, isLoading, isSuccess, isError]);
  return (
    <div>
      <Card className="shadow bg-white rounded">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to continute...</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <Label>mobile number</Label>
              <Input
                {...register("mobile_number", { required: true })}
                aria-invalid={errors.mobile_number ? "true" : "false"}
                id="new"
                type="text"
              />
              {errors.mobile_number && (
                <i className="text-sm text-red-400">phone number is required</i>
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
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] space-x-2 mt-4 rounded"
            >
              <span className="text-[#f7fdfc] font-bold">Login</span>
              <Image width={16} height={16} src={arrow} alt="arrow" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
