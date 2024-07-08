import Chat from "@/app/guestbook/components/Chat";
import GuestbookForm from "@/app/guestbook/components/Form";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: messages } = await supabase.from("guestbook").select();

  return (
    <div className=" h-full w-full">
      <ul className="flex flex-col gap-2 pb-40">
        {messages?.map((message) => (
          <Chat key={message.id} message={message} />
        ))}
      </ul>

      <GuestbookForm />
    </div>
  );
}
