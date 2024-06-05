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
import {
  experienceFormSchema,
  ExperienceFormType,
} from "@/lib/zodSchema/experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { WorkDescriptionForm } from "./WorkDescriptionForm";
import { SkillUsedForm } from "./SkillUsedForm";
import { updateExperience } from "@/actions/update-experience";

type Props = {
  existingExperiences: ExperienceFormType["experiences"];
};

const defaultValues = {
  companyName: "",
  title: "",
  workDescription: [],
  skillUsed: [],
  companyLogo: "",
  startDate: null,
  endDate: null,
};

const UpdateExperienceForm = ({ existingExperiences }: Props) => {
  const form = useForm<ExperienceFormType>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: {
      experiences: existingExperiences,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "experiences",
  });

  function onSubmit(values: ExperienceFormType) {
    console.log(values);
    updateExperience(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ul className="flex flex-col gap-16 w-[80%] mx-auto">
          {fields.map((education, index) => {
            return (
              <li key={education.id} className="flex flex-col gap-2">
                <h3>Experience #{index + 1}</h3>
                {/* Company name */}
                <FormField
                  control={form.control}
                  name={`experiences.${index}.companyName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your company name..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Title */}
                <FormField
                  control={form.control}
                  name={`experiences.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your job title..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <WorkDescriptionForm form={form} index={index} />
                <SkillUsedForm form={form} index={index} />
                {/* Company Logo */}
                <FormField
                  control={form.control}
                  name={`experiences.${index}.companyLogo`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Logo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your company logo..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="md:flex md:w-full">
                  {/* Start Date */}
                  <FormField
                    control={form.control}
                    name={`experiences.${index}.startDate`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-full">
                        <FormLabel>Start Date</FormLabel>
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
                  {/* End Date */}
                  <FormField
                    control={form.control}
                    name={`experiences.${index}.endDate`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-full">
                        <FormLabel>End Date</FormLabel>
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
                </div>
                <div>
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    Remove Experience
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

export default UpdateExperienceForm;
