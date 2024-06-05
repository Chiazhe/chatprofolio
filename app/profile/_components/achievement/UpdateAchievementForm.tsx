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

  function onSubmit(values: AchievementFormType) {
    console.log(values);
    updateAchievement(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ul className="flex flex-col gap-16 w-[80%] mx-auto">
          {fields.map((achievement, index) => {
            return (
              <li key={achievement.id} className="flex flex-col gap-2">
                <h3>Achievement #{index + 1}</h3>
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
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Achievement Expiry</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
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
                <div>
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    Remove Achievement
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
        <Button type="submit">Submit</Button>
      </form>
      <Button variant="secondary" onClick={() => append(defaultValues)}>
        Add
      </Button>
    </Form>
  );
};

export default UpdateAchievementForm;
