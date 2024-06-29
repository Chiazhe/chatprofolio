import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { AchievementFormType } from "@/lib/zodSchema/achievement";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const achievementDescriptionDefaultValue = { description: "" };

export const AchievementDescriptionForm = ({
  form,
  index,
}: {
  form: UseFormReturn<AchievementFormType>;
  index: number;
}) => {
  const { append, remove, fields } = useFieldArray({
    name: `achievements.${index}.achievementDescription`,
    control: form.control,
  });

  return (
    <div>
      <FormLabel>Achievement Description</FormLabel>
      <ul>
        {fields.length === 0 ? (
          <>No Achievement Description Given</>
        ) : (
          <>
            {fields.map((achievement, achievementIndex) => {
              return (
                <li key={achievement.id}>
                  <FormField
                    control={form.control}
                    name={`achievements.${index}.achievementDescription.${achievementIndex}`}
                    render={() => (
                      <FormItem>
                        <div className="flex gap-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your achivement description..."
                            {...form.register(
                              `achievements.${index}.achievementDescription.${achievementIndex}.description`,
                            )}
                          />
                          <Button
                            variant="destructive"
                            type="button"
                            onClick={() => {
                              remove(achievementIndex);
                            }}
                          >
                            <IoTrashOutline />
                          </Button>
                        </div>
                        <div className="text-red-600">
                          <p className="text-sm font-medium text-destructive">
                            {
                              form.formState.errors.achievements?.[index]
                                ?.achievementDescription?.[achievementIndex]
                                ?.description?.message
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
        onClick={() => append([achievementDescriptionDefaultValue])}
      >
        <IoMdAdd /> Add
      </Button>
    </div>
  );
};
