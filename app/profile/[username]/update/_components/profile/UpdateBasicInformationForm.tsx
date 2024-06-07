"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  BasicInformationFormSchema,
  BasicInformationFormType,
} from "@/lib/zodSchema/basicInformation";
import { updateBasicInformation } from "@/actions/update-basic-information";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  basicInformationData: BasicInformationFormType | null;
};

const UpdateBasicInformationForm = ({ basicInformationData }: Props) => {
  const form = useForm<BasicInformationFormType>({
    resolver: zodResolver(BasicInformationFormSchema),
    defaultValues: basicInformationData
      ? basicInformationData
      : {
          name: "",
          username: "",
          firstName: "",
          lastName: "",
          shortIntro: "",
          mediumIntro: "",
          longIntro: "",
          userLocation: "",
        },
  });

  function onSubmit(values: BasicInformationFormType) {
    console.log(values);
    updateBasicInformation(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 hover:bg-primary/10  p-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your preferred username..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shortIntro"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Introduction</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your short introduction..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mediumIntro"
            render={({ field }) => (
              <FormItem>
                <FormLabel>General Introduction</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your general introduction..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="longIntro"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Overview</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[150px]"
                    placeholder="Enter your detailed introduction..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your location..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="my-4">
          Update
        </Button>
      </form>
    </Form>
  );
};

export default UpdateBasicInformationForm;
