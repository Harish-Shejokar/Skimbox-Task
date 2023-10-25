
const handler = (req,res) => {
    return res.status(200).json({
        success: true,
        message:"Home page route api"
    })
}

export default handler;