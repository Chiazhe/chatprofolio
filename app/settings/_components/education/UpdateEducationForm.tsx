"use client";
import { updateEducation } from "@/actions/update-education";
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
  educationFormSchema,
  EducationFormType,
} from "@/lib/zodSchema/education";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useFieldArray, useForm } from "react-hook-form";
import { SpecializationForm } from "./SpecializationForm";
import { RelevantCourseForm } from "./RelevantCourseForm";
import { IoTrashOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-toastify";
import { inter } from "@/app/fonts";

type Props = {
  existingEducations: EducationFormType["educations"];
};

const defaultValues = {
  institution: "",
  degree: "",
  fieldOfStudy: "",
  specialization: [],
  relevantCourses: [],
  grade: "",
  startDate: null,
  endDate: null,
};

const UpdateEducationForm = ({ existingEducations }: Props) => {
  const form = useForm<EducationFormType>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      educations: existingEducations,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "educations",
  });

  async function onSubmit(values: EducationFormType) {
    const res = await updateEducation(values);
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
                  {/* Institution name */}
                  <FormField
                    control={form.control}
                    name={`educations.${index}.institution`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>School name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your school name..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Education Type */}
                  <FormField
                    control={form.control}
                    name={`educations.${index}.degree`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Degree</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter degree type..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Field of Study */}
                  <FormField
                    control={form.control}
                    name={`educations.${index}.fieldOfStudy`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Field of Study</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your field of study..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <SpecializationForm form={form} index={index} />
                  <RelevantCourseForm form={form} index={index} />
                  {/* Grade */}
                  {/* <FormField
                    control={form.control}
                    name={`educations.${index}.grade`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grade</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your grade..."
                            {...field}
                            type="text"
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
                      name={`educations.${index}.startDate`}
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
                      name={`educations.${index}.endDate`}
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

export default UpdateEducationForm;
