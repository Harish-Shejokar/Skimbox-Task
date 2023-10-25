import { commentData } from "../../../data/comment";

const handler = (req, res) => {
 
  if (req.method === "POST") {
    const { newComment } = req.body;
    console.log(newComment);
    commentData.push({
      id: Date.now().toFixed(2),
      comment:newComment
     })
    return res.status(201).json({
      success: true,
      message: "new comment added",
    });
  }
  return res.status(200).json(commentData);
};

export default handler;
