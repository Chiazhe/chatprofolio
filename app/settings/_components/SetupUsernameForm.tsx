"use client";
import { setUsername } from "@/actions/set-username";
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
import { UsernameFormSchema, UsernameFormType } from "@/lib/zodSchema/username";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
type Props = {};

const SetupUsernameForm = (props: Props) => {
  const form = useForm<UsernameFormType>({
    resolver: zodResolver(UsernameFormSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(values: UsernameFormType) {
    const res = await setUsername(values);
    if ("error" in res) {
      toast(res.error);
    } else {
      toast("Username is being set up successfully.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-4">
          Set Username
        </Button>
      </form>
    </Form>
  );
};

export default SetupUsernameForm;
