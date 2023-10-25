const handler = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog  api",
  });
};

export default handler;
