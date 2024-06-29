"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  LayoutPreferenceFormSchema,
  LayoutPreferenceFormType,
} from "@/lib/zodSchema/layout-preference";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  aboutLayout,
  educationLayout,
  experienceLayout,
  layoutPreferenceDefaultValue,
  projectLayout,
  skillLayout,
} from "@/lib/layout-data";
import { updateLayoutPreference } from "@/actions/create-update-layout-preference";
import { inter } from "@/app/fonts";
import { Button } from "@/components/ui/button";

type Props = {
  existingLayoutPreference: LayoutPreferenceFormType;
};

const UpdateLayoutPreferenceForm = ({ existingLayoutPreference }: Props) => {
  const form = useForm<LayoutPreferenceFormType>({
    resolver: zodResolver(LayoutPreferenceFormSchema),
    defaultValues: existingLayoutPreference
      ? existingLayoutPreference
      : layoutPreferenceDefaultValue,
  });

  async function onSubmit(values: LayoutPreferenceFormType) {
    const res = await updateLayoutPreference(
      values,
      existingLayoutPreference.id as unknown as number,
    );

    if ("error" in res) {
      toast(res.error);
    } else {
      toast("Information updated successfully.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={inter.className}>
        <div className="flex flex-col gap-2 p-8 hover:bg-primary/10">
          <FormField
            control={form.control}
            name="aboutLayoutPreference"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>About Section Layout</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {aboutLayout.map((layout, idx) => (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={`about-layout-${idx}`}
                      >
                        <FormControl>
                          <RadioGroupItem value={layout} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {layout.toUpperCase()}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experienceLayoutPreference"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Experience Section Layout</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {experienceLayout.map((layout, idx) => (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={`experience-layout-${idx}`}
                      >
                        <FormControl>
                          <RadioGroupItem value={layout} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {layout.toUpperCase()}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="educationLayoutPreference"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Education Section Layout</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {educationLayout.map((layout, idx) => (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={`education-layout-${idx}`}
                      >
                        <FormControl>
                          <RadioGroupItem value={layout} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {layout.toUpperCase()}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectLayoutPreference"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Project Section Layout</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {projectLayout.map((layout, idx) => (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={`project-layout-${idx}`}
                      >
                        <FormControl>
                          <RadioGroupItem value={layout} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {layout.toUpperCase()}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skillLayoutPreference"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Skill Section Layout</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {skillLayout.map((layout, idx) => (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={`skill-layout-${idx}`}
                      >
                        <FormControl>
                          <RadioGroupItem value={layout} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {layout.toUpperCase()}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
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

export default UpdateLayoutPreferenceForm;
