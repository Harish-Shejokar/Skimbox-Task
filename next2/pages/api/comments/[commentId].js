import { commentData } from "@/data/comment"

const handler = (req, res) => {
    // console.log(req.query)
    const {commentId} = req.query;
    const particularData = commentData.find(comm => comm.id === commentId);
    if (req.method === "DELETE") {
        const { commentId } = req.query;
        const deletedComm = commentData.find((el) => el.id === commentId);
        const index = commentData.indexOf(deletedComm);
        commentData.splice(index, 1);

    }
    res.status(200).json({
        success:true,
        particularData,
    })
}

export default handler;