import jwt from "jsonwebtoken";

export default function authenticate(req, res, next, admin) {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  jwt.verify(
    token,
    admin ? process.env.ADMIN_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET,
    function (err, decoded) {
      if (err)
        return res
          .status(500)
          .json({ auth: false, message: "Failed to authenticate token." });

      req.userId = decoded.id;
      next();
    }
  );
}