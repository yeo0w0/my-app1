import Link from "next/link";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <main>
      <h1>웹서버 보안 프로그래밍</h1>
      <Counter />
      <br></br>
      <Link href="/about"> /about 페이지로 이동하기 </Link>
    </main>
  );
}
