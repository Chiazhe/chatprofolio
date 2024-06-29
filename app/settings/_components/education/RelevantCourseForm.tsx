import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { EducationFormType } from "@/lib/zodSchema/education";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const relevantCourseDefaultValue = { relevantCourse: "" };

export const RelevantCourseForm = ({
  form,
  index,
}: {
  form: UseFormReturn<EducationFormType>;
  index: number;
}) => {
  const { append, remove, fields } = useFieldArray({
    name: `educations.${index}.relevantCourses`,
    control: form.control,
  });

  return (
    <div>
      <FormLabel>Relevant Course</FormLabel>
      <ul>
        {fields.length === 0 ? (
          <>No Relevant Course Given</>
        ) : (
          <>
            {fields.map((relevantCourse, relevantCourseIndex) => {
              return (
                <li key={relevantCourse.id}>
                  <FormField
                    control={form.control}
                    name={`educations.${index}.relevantCourses.${relevantCourseIndex}`}
                    render={() => (
                      <FormItem>
                        <div className="flex gap-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your relevant course name..."
                            {...form.register(
                              `educations.${index}.relevantCourses.${relevantCourseIndex}.relevantCourse`,
                            )}
                          />
                          <Button
                            variant="destructive"
                            type="button"
                            onClick={() => {
                              remove(relevantCourseIndex);
                            }}
                          >
                            <IoTrashOutline />
                          </Button>
                        </div>
                        <div className="text-red-600">
                          <p className="text-sm font-medium text-destructive">
                            {
                              form.formState.errors.educations?.[index]
                                ?.relevantCourses?.[relevantCourseIndex]
                                ?.relevantCourse?.message
                            }
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />
                </li>
              );
            })}
          </>
        )}
      </ul>
      <Button
        type="button"
        variant="outline"
        onClick={() => append([relevantCourseDefaultValue])}
      >
        <IoMdAdd /> Add
      </Button>
    </div>
  );
};
