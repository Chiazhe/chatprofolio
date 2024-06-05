import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { EducationFormType } from "@/lib/zodSchema/education";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { IoTrashOutline } from "react-icons/io5";

const specializationDefaultValue = { specialization: "" };

export const SpecializationForm = ({
  form,
  index,
}: {
  form: UseFormReturn<EducationFormType>;
  index: number;
}) => {
  const { append, remove, fields } = useFieldArray({
    name: `educations.${index}.specialization`,
    control: form.control,
  });

  return (
    <div>
      <FormLabel>Specialization</FormLabel>
      <ul>
        {fields.length === 0 ? (
          <>No Specialization Given</>
        ) : (
          <>
            {fields.map((specialization, specializationIndex) => {
              return (
                <li key={specialization.id}>
                  <FormField
                    control={form.control}
                    name={`educations.${index}.specialization.${specializationIndex}`}
                    render={({}) => (
                      <FormItem>
                        <div className="flex gap-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your specialization name..."
                            {...form.register(
                              `educations.${index}.specialization.${specializationIndex}.specialization`
                            )}
                          />
                          <Button
                            variant="destructive"
                            type="button"
                            onClick={() => {
                              remove(specializationIndex);
                            }}
                          >
                            <IoTrashOutline />
                          </Button>
                        </div>
                        <div className="text-red-600">
                          <p className="text-sm font-medium text-destructive">
                            {
                              form.formState.errors.educations?.[index]
                                ?.specialization?.[specializationIndex]
                                ?.specialization?.message
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
        onClick={() => append([specializationDefaultValue])}
      >
        Add
      </Button>
    </div>
  );
};
