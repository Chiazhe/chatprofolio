"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  achievementFormSchema,
  AchievementFormType,
} from "@/lib/zodSchema/achievement";
import { AchievementDescriptionForm } from "./AchievementDescriptionForm";
import { updateAchievement } from "@/actions/update-achievement";
import { IoTrashOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-toastify";
import { inter } from "@/app/fonts";

type Props = {
  existingAchievements: AchievementFormType["achievements"];
};

const defaultValues = {
  achievementTitle: "",
  achievementDescription: [],
  achievementProvider: "",
  achievementExpiry: null,
};

const UpdateAchievementForm = ({ existingAchievements }: Props) => {
  const form = useForm<AchievementFormType>({
    resolver: zodResolver(achievementFormSchema),
    defaultValues: {
      achievements: existingAchievements,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "achievements",
  });

  async function onSubmit(values: AchievementFormType) {
    const res = await updateAchievement(values);
    if ("error" in res) {
      toast(res.error);
    } else {
      toast("Information updated successfully.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={inter.className}>
        <ul className="flex flex-col gap-4">
          {fields.map((achievement, index) => {
            return (
              <>
                <li
                  key={achievement.id}
                  className="flex flex-col gap-2 p-8 hover:bg-primary/10"
                >
                  <FormField
                    control={form.control}
                    name={`achievements.${index}.achievementTitle`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Achievement Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your achievement title..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`achievements.${index}.achievementProvider`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Achievement Provider</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your achievement provider..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <AchievementDescriptionForm form={form} index={index} />
                  <FormField
                    control={form.control}
                    name={`achievements.${index}.achievementExpiry`}
                    render={({ field }) => (
                      <FormItem className="flex w-full flex-col">
                        <FormLabel>Achievement Expiry</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value as Date}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="my-4">
                    <Button
                      variant="destructive"
                      type="button"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      <IoTrashOutline />
                    </Button>
                  </div>
                </li>
                {index !== fields.length - 1 && <Separator className="" />}
              </>
            );
          })}
        </ul>
        <div className="my-4 flex items-center justify-between">
          <Button
            variant="outline"
            type="button"
            onClick={() => append(defaultValues)}
          >
            <IoMdAdd /> Add
          </Button>
          <Button type="submit" className="">
            Update
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateAchievementForm;
