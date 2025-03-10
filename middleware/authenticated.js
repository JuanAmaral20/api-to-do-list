export function middleware(req, res, next) {
  const [, token] = req.headers.authorization.split(" ");
  try {
    const { sub } = jwt.verify(token, "secret");
    req.userId = sub;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
}
