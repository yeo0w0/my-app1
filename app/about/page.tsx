import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-24 text-center">
      <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
        이 페이지는 app/about/page.tsx 입니다
      </h1>
      <Link
        href="/"
        className="font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
