const hello = (req, res) => {
    res.status(200).json({ message: "Hello from the backend!" });
  };
export default hello