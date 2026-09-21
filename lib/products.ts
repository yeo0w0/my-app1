export type Product = {
  id: string;
  name: string;
  description: string;
  likes: number;
};

const products: Product[] = [
  {
    id: "1",
    name: "웹서버보안프로그래밍 머그컵",
    description: "수업 중 마실 커피를 위한 머그컵",
    likes: 3,
  },
  {
    id: "2",
    name: "웹서버보안프로그래밍 티셔츠",
    description: "학과 로고가 인쇄된 티셔츠",
    likes: 3,
  },
  {
    id: "3",
    name: "웹서버보안프로그래밍 모자",
    description: "스타일리쉬한 모자",
    likes: 3,
  },
  {
    id: "4",
    name: "웹서버보안프로그래밍 포스트잇",
    description: "수업 중 간단한 메모를 위한 포스트잇",
    likes: 3,
  },
  {
    id: "5",
    name: "웹서버보안프로그래밍 스티커",
    description: "개인 노트북을 개성있게 꾸밀 스티커",
    likes: 3,
  },
  {
    id: "6",
    name: "웹서버보안프로그래밍 키링",
    description: "볼 수록 매력적인 키링",
    likes: 3,
  },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(): Promise<Product[]> {
  await delay(700);
  return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400);
  return products.find((p) => p.id === id);
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300);
  const product = products.find((p) => p.id === id);
  if (!product) return 0;
  product.likes += 1;
  return product.likes;
}
