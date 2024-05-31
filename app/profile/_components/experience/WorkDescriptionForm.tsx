import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { ExperienceFormType } from "@/lib/zodSchema/experience";
import { useFieldArray, UseFormReturn } from "react-hook-form";

const workDescriptionDefaultValue = { workDescription: "" };

export const WorkDescriptionForm = ({
  form,
  index,
}: {
  form: UseFormReturn<ExperienceFormType>;
  index: number;
}) => {
  const { append, remove, fields } = useFieldArray({
    name: `experiences.${index}.workDescription`,
    control: form.control,
  });

  return (
    <div>
      <FormLabel>Work Description</FormLabel>
      <ul>
        {fields.length === 0 ? (
          <>No Work Description Given</>
        ) : (
          <>
            {fields.map((workDescription, workDescriptionIndex) => {
              return (
                <li key={workDescription.id}>
                  <FormField
                    control={form.control}
                    name={`experiences.${index}.workDescription.${workDescriptionIndex}`}
                    render={({}) => (
                      <FormItem>
                        <h3>Work Description #{workDescriptionIndex + 1}</h3>
                        <div className="flex gap-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your work description..."
                            {...form.register(
                              `experiences.${index}.workDescription.${workDescriptionIndex}.workDescription`
                            )}
                          />
                          <Button
                            variant="destructive"
                            type="button"
                            onClick={() => {
                              remove(workDescriptionIndex);
                            }}
                          >
                            Remove Work Description
                          </Button>
                        </div>
                        <div className="text-red-600">
                          <p className="text-sm font-medium text-destructive">
                            {
                              form.formState.errors.experiences?.[index]
                                ?.workDescription?.[workDescriptionIndex]
                                ?.workDescription?.message
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
        variant="secondary"
        onClick={() => append([workDescriptionDefaultValue])}
      >
        Add
      </Button>
    </div>
  );
};
