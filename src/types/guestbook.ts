import { FieldPath, FieldValues } from "react-hook-form";

export interface GuestbookMessage {
  id: number;
  content: string;
  created_at: Date;
}
