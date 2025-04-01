import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@nextui-org/react";

import * as actions from "@/app/actions";

export default function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex flex-col gap-4 p-4 2-80">
            <h3 className="text-lg">Create a topic</h3>
            <Input name="name" label="name" labelPlacement="outside" placeholder="Name" />
            <Textarea name="description" label="description" labelPlacement="outside" placeholder="Description" />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
