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
import { useFieldArray, useForm } from "react-hook-form";
import {
  SkillFormSchema,
  SkillFormType,
  SkillType,
} from "@/lib/zodSchema/skill";
import { updateSkill } from "@/actions/update-skill";
import { IoTrashOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-toastify";
import { inter } from "@/app/fonts";

type Props = {
  existingSkills: SkillType[];
};

const defaultValues = {
  skillName: "",
  skillRating: "",
  skillYearsOfExperience: 0,
};

const UpdateSkillForm = ({ existingSkills }: Props) => {
  const form = useForm<SkillFormType>({
    resolver: zodResolver(SkillFormSchema),
    defaultValues: {
      skills: existingSkills,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "skills",
  });

  async function onSubmit(values: SkillFormType) {
    const res = await updateSkill(values);
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
          {fields.map((skill, index) => {
            return (
              <>
                <li
                  key={skill.id}
                  className="flex flex-col gap-2 p-8 hover:bg-primary/10"
                >
                  <FormField
                    control={form.control}
                    name={`skills.${index}.skillName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skill Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your skill..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`skills.${index}.skillYearsOfExperience`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skill Year of experience</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter your skill experience year..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                    control={form.control}
                    name={`skills.${index}.skillRating`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skill Rating</FormLabel>
                        <FormControl>
                          <Input placeholder="Rate Your Skill..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
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

export default UpdateSkillForm;
