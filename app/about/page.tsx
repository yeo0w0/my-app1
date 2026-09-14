import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>이 페이지는 app/about/page.tsx 입니다.</h1>
      <Link href="/"> /home 페이지로 이동하기 </Link>
    </div>
  );
}
