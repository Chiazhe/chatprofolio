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
import { projectFormSchema, ProjectFormType } from "@/lib/zodSchema/project";
import { ProjectDescriptionForm } from "./ProjectDescriptionForm";
import { TechnologyUsedForm } from "./TechnologyUsedForm";
import { updateProject } from "@/actions/update-project";
import { IoTrashOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-toastify";
import { inter } from "@/app/fonts";

type Props = {
  existingProjects: ProjectFormType["projects"];
};

const defaultValues = {
  projectTitle: "",
  projectDescription: [],
  projectUrl: "",
  githubLink: "",
  projectImage: "",
  technologyUsed: [],
  startDate: null,
  endDate: null,
};

const UpdateProjectForm = ({ existingProjects }: Props) => {
  const form = useForm<ProjectFormType>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      projects: existingProjects,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "projects",
  });

  async function onSubmit(values: ProjectFormType) {
    const res = await updateProject(values);
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
                    name={`projects.${index}.projectTitle`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your project title..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <ProjectDescriptionForm form={form} index={index} />
                  <TechnologyUsedForm form={form} index={index} />
                  <FormField
                    control={form.control}
                    name={`projects.${index}.projectUrl`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Link</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your project link..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`projects.${index}.githubLink`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub Link</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your GitHub link..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                    control={form.control}
                    name={`projects.${index}.projectImage`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Image</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your project preview..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  <div className="md:flex md:w-full">
                    {/* Start Date */}
                    <FormField
                      control={form.control}
                      name={`projects.${index}.startDate`}
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
                                selected={field.value as Date}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date("1900-01-01")
                                }
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
                      name={`projects.${index}.endDate`}
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
                                selected={field.value as Date}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
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

export default UpdateProjectForm;
