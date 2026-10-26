import { deleteModel, model, models, Schema } from "mongoose";

const noticeSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    authorName: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

if (models.Notice?.schema.path("author")) {
  deleteModel("Notice");
}

export const Notice = models.Notice || model("Notice", noticeSchema);
