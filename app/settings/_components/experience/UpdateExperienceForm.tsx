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
import { IoTrashOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
import { inter } from "@/app/fonts";

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

  async function onSubmit(values: ExperienceFormType) {
    const res = await updateExperience(values);
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
          {fields.map((education, index) => {
            return (
              <>
                <li
                  key={education.id}
                  className="flex flex-col gap-2 p-8 hover:bg-primary/10"
                >
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
                  {/* <FormField
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
                  /> */}
                  <div className="md:flex md:w-full">
                    <FormField
                      control={form.control}
                      name={`experiences.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem className="flex w-full flex-col">
                          <FormLabel>Start Date</FormLabel>
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                captionLayout="dropdown-buttons"
                                selected={field.value as Date}
                                onSelect={field.onChange}
                                fromYear={1960}
                                toYear={2030}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`experiences.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem className="flex w-full flex-col">
                          <FormLabel>End Date</FormLabel>
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                captionLayout="dropdown-buttons"
                                selected={field.value as Date}
                                onSelect={field.onChange}
                                fromYear={1960}
                                toYear={2030}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
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

export default UpdateExperienceForm;
