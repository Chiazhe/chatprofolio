import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { ExperienceFormType } from "@/lib/zodSchema/experience";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const skillUsedDefaultValue = { skill: "" };

export const SkillUsedForm = ({
  form,
  index,
}: {
  form: UseFormReturn<ExperienceFormType>;
  index: number;
}) => {
  const { append, remove, fields } = useFieldArray({
    name: `experiences.${index}.skillUsed`,
    control: form.control,
  });

  return (
    <div>
      <FormLabel>Skill Used</FormLabel>
      <ul>
        {fields.length === 0 ? (
          <>No Skill Used Given</>
        ) : (
          <>
            {fields.map((skillUsed, skillUsedIndex) => {
              return (
                <li key={skillUsed.id}>
                  <FormField
                    control={form.control}
                    name={`experiences.${index}.skillUsed.${skillUsedIndex}`}
                    render={() => (
                      <FormItem>
                        <div className="flex gap-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your skill used..."
                            {...form.register(
                              `experiences.${index}.skillUsed.${skillUsedIndex}.skill`,
                            )}
                          />
                          <Button
                            variant="destructive"
                            type="button"
                            onClick={() => {
                              remove(skillUsedIndex);
                            }}
                          >
                            <IoTrashOutline />
                          </Button>
                        </div>
                        <div className="text-red-600">
                          <p className="text-sm font-medium text-destructive">
                            {
                              form.formState.errors.experiences?.[index]
                                ?.skillUsed?.[skillUsedIndex]?.skill?.message
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
        onClick={() => append([skillUsedDefaultValue])}
      >
        <IoMdAdd /> Add
      </Button>
    </div>
  );
};
