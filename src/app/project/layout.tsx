import PageLayout from "@/components/PageLayout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="프로젝트" description="개발에 참여한 프로젝트 입니다.">
      {children}
    </PageLayout>
  );
}
