"use client";

import { Button } from "@nextui-org/react";

interface FormButtonProps {
  readonly children?: React.ReactNode;
  readonly isLoading?: boolean;
}

export default function FormButton({ children, isLoading }: FormButtonProps) {
  
  return (
    <Button type="submit" isLoading={isLoading}>
      {children}
    </Button>
  )
}
