"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import arrow from "../../../../../assests/right-arrow.png";

import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  useCategoriesQuery,
  useTeacherCreateCoursesMutation,
  useTeachersQuery,
} from "@/redux/api/teacherApi";
import { useAppSelector } from "@/redux/app/hook";
import Skeleton from "@/components/ui/Skeleton";

const FormSchema = z.object({
  teacher: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  category: z.string({
    required_error: "category is required",
  }),
  title: z.string({
    required_error: "title is required",
  }),
});

const CreateCourses = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teacher: ["4"],
    },
  });

  const { accessToken } = useAppSelector((state) => state.auth);

  const [createCourse, { isLoading, isSuccess, isError }] =
    useTeacherCreateCoursesMutation();

  const {
    data: CData,
    isLoading: CLoading,
    isSuccess: CSuccess,
  } = useCategoriesQuery(accessToken);
  const {
    data: TData,
    isLoading: TLoading,
    isSuccess: TSuccess,
  } = useTeachersQuery(accessToken);

  console.log("category", CData, "tdata", TData);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const informations = {
      info: {
        category: data?.category,
        teacher: data?.teacher,
        title: data?.title,
      },
      token: accessToken,
    };
    createCourse(informations);
    console.log(informations);
  }

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "created a new courese",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-white-950 p-4">
            <code className="text-black bg-white">success</code>
          </pre>
        ),
      });
      form.reset();
    }
    if (isError) {
      toast({
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-white p-4">
            <code className="text-red-400">something went wrong</code>
          </pre>
        ),
      });
    }
  }, [isLoading, isError, isSuccess, form.reset]);

  if (CLoading || TLoading) {
    return <Skeleton />;
  }

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-600">
        Create Courses
      </h1>
      {/* Input fields and the form started */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="teacher"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Teachers</FormLabel>
                </div>
                {TData?.map((item: any) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="teacher"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(
                                item.id.toString()
                              )}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...field.value,
                                      item.id.toString(),
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id.toString()
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item?.name}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* select */}

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border border-gray-300">
                      <SelectValue placeholder="select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {CData?.map((category: any) => {
                      return (
                        <SelectItem
                          className="cursor-pointer"
                          key={category?.id}
                          value={category?.id.toString()}
                        >
                          {category?.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* title input */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] space-x-2 py-6 rounded">
            <span className="text-[#f7fdfc] font-bold">Create Course</span>
            <Image width={16} height={16} src={arrow} alt="arrow" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCourses;
