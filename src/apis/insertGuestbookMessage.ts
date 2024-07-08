"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export default async function insertGuestbookAction(content: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await supabase.from("guestbook").insert({
    content,
    created_at: new Date().toISOString(),
  });

  revalidatePath("/guestbook");
  return true;
}
