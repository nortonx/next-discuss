"use server";

import { z } from "zod";

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, { message: "Text must be lowercase letters or dashes without spaces"}),
  description: z.string().min(10),
})

export async function createTopic(formData: FormData) {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description")
  });

  if (!result.success) {
    console.log("Error:", result?.error.flatten().fieldErrors);
  }

  // TODO: revalidate home page
  
}
