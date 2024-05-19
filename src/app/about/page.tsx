import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export default function page() {
  return (
    <PageLayout
      title="Hello? 헬롤입니다."
      description="제 가치관과 생각들을 말해드릴게요!"
    >
      <div className="flex  flex-col items-center justify-center gap-8 sm:flex-row sm:items-start">
        <Image
          width={300}
          height={300}
          src="/about/profile.jpeg"
          alt="정미량 프로필 이미지"
          className=" rounded-xl"
          quality={100}
        />
        <span className="w-full break-keep leading-8">
          <strong>저는 재미를 추구하는 개발자입니다</strong>
          <br />
          저는 코딩을 하면서 재미를 느끼고, 또한 사용자들이 개발한 서비스를 통해
          재미를 느끼길 원해요.
          <br />
          <br />
          따라서 사용자 경험(UX)와 사용자 인터페이스(UI)에 관심이 많아요.
          사용자들이 편리하게 사용할 수 있는 서비스를 만들기 위해 노력하고
          있어요.
          <br />
          <br />
          새로운 기술은 언제나 흥미롭습니다. 새로운 기술을 배우고, 적용하는 것을
          즐기며, 끊임없이 성장하기 위해 노력하고 있어요.
          <br />
          <br />
          협업의 중요성을 알고 있어요. 가독성이 좋은 코드를 작성하고, 다른
          개발자와 소통하는 것을 중요하게 생각해요.
        </span>
      </div>
    </PageLayout>
  );
}
