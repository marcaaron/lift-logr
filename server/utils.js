const { verify } = require("jsonwebtoken");

function getUserId(context) {
  const Authorization = context.req.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, process.env.JWT_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
  throw new AuthError();
}

module.exports = { getUserId };
