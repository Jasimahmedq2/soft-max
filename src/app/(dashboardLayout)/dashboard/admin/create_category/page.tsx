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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { useAddCategoryMutation } from "@/redux/api/adminApi";
import { useAppSelector } from "@/redux/app/hook";
import { isErrored } from "stream";

const FormSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  description: z.string({
    required_error: "description is required",
  }),
});

const CreateCategory = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { accessToken } = useAppSelector((state) => state.auth);

  const [AddCategory, { isLoading, isSuccess, isError }] =
    useAddCategoryMutation();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const Informations = {
      info: {
        name: data.name,
        description: data.description,
      },
      token: accessToken,
    };
    console.log(data);
    AddCategory(Informations);
  }

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "created a category",
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
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-600">
        Create Category
      </h1>
      {/* Input fields and the form started */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="border border-gray-300"
                    placeholder="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* textarea for description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="description"
                    className="resize-none border border-gray-300"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#1ab69d] via-[#4cc18c] to-[#1ab69d] space-x-2 py-6 rounded"
          >
            <span className="text-[#f7fdfc] font-bold">
              {" "}
              {isLoading ? "looding..." : "Create category"}
            </span>
            <Image width={16} height={16} src={arrow} alt="arrow" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCategory;
