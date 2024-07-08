import { GuestbookMessage } from "@/types/guestbook";
import detailDate from "@/utils/detailDate";
import React from "react";

export default function Chat({ message }: { message: GuestbookMessage }) {
  return (
    <li key={message.id} className="flex w-full items-end gap-4">
      <span className="min-h-[40px] max-w-[90%] break-all rounded-[10px] rounded-bl-none border-1 px-2.5 py-2 text-sm leading-6">
        {message.content}
      </span>
      <span className="left-20 text-xs">
        {detailDate(new Date(message.created_at))}
      </span>
    </li>
  );
}
