"use client";

import { useActionState, startTransition } from "react";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Form,
} from "@nextui-org/react";

import * as actions from "@/app/actions";
import FormButton from "@/components/common/form-button";


export default function TopicCreateForm() {
  const [formState, action, isPending] = useActionState(actions.createTopic, {
    errors: {}
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      action(formData);
    })
  }

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 p-4 2-80">
            <h3 className="text-lg">Create a topic</h3>
            <Input
                name="name"
                label="name"
                labelPlacement="outside"
                placeholder="Name"
                isInvalid={!!formState.errors.name}
                errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
                name="description"
                label="description"
                labelPlacement="outside"
                placeholder="Description"
                isInvalid={!!formState.errors.description}
                errorMessage={formState.errors.description?.join(", ")}
            />

            {formState.errors._form ? (
                <div className="p-2 bg-red-200 border border-red-400">
                  {formState.errors._form?.join(', ')}
                </div>
              ) : null }

            <FormButton isLoading={isPending}>Save</FormButton>
          </div>
        </Form>
      </PopoverContent>
    </Popover>
  )
}
