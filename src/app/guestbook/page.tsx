import PageLayout from "@/components/PageLayout";
import detailDate from "@/utils/detailDate";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: messages } = await supabase.from("guestbook").select();

  return (
    <PageLayout title="익명 Guestbook">
      <div className=" h-full w-full">
        <ul className="flex flex-col gap-2">
          {messages?.map((message) => (
            <li key={message.id} className="flex w-full items-end gap-4">
              <span className="min-h-[40px] max-w-[90%] break-all rounded-[10px] rounded-bl-none border-1 px-2.5 py-2 text-sm leading-6">
                {message.content}
              </span>
              <span className="left-20 text-xs">
                {detailDate(new Date(message.created_at))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
