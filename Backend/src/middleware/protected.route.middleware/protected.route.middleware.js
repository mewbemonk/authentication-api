import jwt from "jsonwebtoken";



const protect_route = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("token not provided");
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    return res.status(401).send("Invalid or expired token");
  }
};


export default protect_route;