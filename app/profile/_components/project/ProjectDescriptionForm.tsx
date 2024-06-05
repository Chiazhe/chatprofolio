import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { ProjectFormType } from "@/lib/zodSchema/project";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const projectDescriptionDefaultValue = { projectDescription: "" };

export const ProjectDescriptionForm = ({
  form,
  index,
}: {
  form: UseFormReturn<ProjectFormType>;
  index: number;
}) => {
  const { append, remove, fields } = useFieldArray({
    name: `projects.${index}.projectDescription`,
    control: form.control,
  });

  return (
    <div>
      <FormLabel>Project Description</FormLabel>
      <ul>
        {fields.length === 0 ? (
          <>No Project Description Given</>
        ) : (
          <>
            {fields.map((projectDescription, projectDescriptionIndex) => {
              return (
                <li key={projectDescription.id}>
                  <FormField
                    control={form.control}
                    name={`projects.${index}.projectDescription.${projectDescriptionIndex}`}
                    render={({}) => (
                      <FormItem>
                        <div className="flex gap-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your project description..."
                            {...form.register(
                              `projects.${index}.projectDescription.${projectDescriptionIndex}.projectDescription`
                            )}
                          />
                          <Button
                            variant="destructive"
                            type="button"
                            onClick={() => {
                              remove(projectDescriptionIndex);
                            }}
                          >
                            <IoTrashOutline />
                          </Button>
                        </div>
                        <div className="text-red-600">
                          <p className="text-sm font-medium text-destructive">
                            {
                              form.formState.errors.projects?.[index]
                                ?.projectDescription?.[projectDescriptionIndex]
                                ?.projectDescription?.message
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
        onClick={() => append([projectDescriptionDefaultValue])}
      >
        <IoMdAdd /> Add
      </Button>
    </div>
  );
};
