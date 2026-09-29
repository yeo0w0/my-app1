import { Notice as NoticeModel } from "@/models/Notice";
import { connectDB } from "./mongoDB";

export type Notice = {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
};

type NoticeDocLike = {
  _id: unknown;
  title: string;
  author: string;
  content: string;
  createdAt?: Date;
};

function toNotice(doc: NoticeDocLike): Notice {
  return {
    id: String(doc._id),
    title: doc.title,
    author: doc.author,
    content: doc.content,
    createdAt: (doc.createdAt ?? new Date()).toISOString().slice(0, 10),
  };
}

async function seedIfEmpty() {
  const count = await NoticeModel.countDocuments();
  if (count > 0) return;

  await NoticeModel.insertMany([
    {
      title: "웹서버보안프로그래밍 개강 안내",
      author: "조하율",
      content:
        "2학기 웹서버보안프로그래밍 수업이 시작됩니다. 강의계획서를 확인해주세요.",
      createdAt: "2026-09-03",
    },
    {
      title: "GitHub Organization 초대 안내",
      author: "조하율",
      content:
        "과제 제출용 GitHub Organization 초대 메일을 확인하고 가입해주세요.",
      createdAt: "2026-09-03",
    },
    {
      title: "5주차 실습 — 공지사항 게시판",
      author: "조하율",
      content:
        "이번 주부터 만드는 공지사항 게시판이 학기 내내 성장하는 코스 프로젝트입니다.",
    },
  ]);
}

export async function getNotices(): Promise<Notice[]> {
  await connectDB();
  await seedIfEmpty();
  const docs = await NoticeModel.find().sort({ createdAt: -1 }).lean();
  return docs.map((doc) => toNotice(doc as NoticeDocLike));
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  await connectDB();
  try {
    const doc = await NoticeModel.findById(id).lean();
    return doc ? toNotice(doc as NoticeDocLike) : undefined;
  } catch {
    return undefined;
  }
}

export async function createNotice(input: {
  title: string;
  author: string;
  content: string;
}): Promise<Notice> {
  await connectDB();
  const doc = await NoticeModel.create(input);
  return toNotice(doc);
}
