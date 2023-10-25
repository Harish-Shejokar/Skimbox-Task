const handler = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Article page route api",
  });
};

export default handler;
