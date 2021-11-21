const fastify = require("fastify")({
  logger: true,
});
require("dotenv").config();
const boom = require("boom");

// bring in routes
const routes = require("./routes/auth");

// db
const mongoose = require("mongoose");
fastify.register(require("fastify-cors"), {
  origin: "*",
});
fastify.register(require("fastify-jwt"), {
  secret: "test@#$%$",
});

// db connection
mongoose
  .connect(
    // `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.rioa7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    "mongodb+srv://zohoq:zoho@cluster0.uevgb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MONGO is ready !!"))
  .catch((err) => console.log(err));

// routes

routes.forEach((route, index) => {
  fastify.route(route);
});
fastify.register(require("fastify-formbody"));
fastify.register(require("./middleware/auth_middleware"));
fastify.register(require("./fastify-router.js/authRouter"));
fastify.register(require("./fastify-router.js/trips"));
fastify.register(require("./fastify-router.js/expense"));
fastify.register(require("./fastify-router.js/reportsRouter"));
// fastify.register(require("./fastify-router.js/users"));

fastify.get("/", async (req, res) => {
  return "Connected to Server";
});

// starting server
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 8080, "0.0.0.0");
    fastify.log.info("Server is running a");
  } catch (error) {
    throw boom.boomify(error);
  }
};

start();
