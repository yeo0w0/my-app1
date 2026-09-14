"use client";

import { useState } from "react";

// export 뒤에 default가 없어야 합니다.
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((c) => c + 1)}>카운터 - {count}</button>
  );
}
