"use client";

import insertGuestbookAction from "@/apis/insertGuestbookMessage";
import { Form, FormTextField } from "@/components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
const defaultValues = {
  content: "",
};

export const guestbookFormSchema = z.object({
  content: z.string().min(1).max(3000),
});

export default function GuestbookForm() {
  const form = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(guestbookFormSchema),
  });

  const onSubmit = (data: FieldValues) => {
    insertGuestbookAction(data.content);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="fixed bottom-10 ml-[-20px] flex w-full max-w-screen-md items-center justify-center"
      >
        <div className=" flex w-5/6  gap-4 ">
          <FormTextField name="content" />
        </div>
      </form>
    </Form>
  );
}
