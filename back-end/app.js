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
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.8sjto.mongodb.net/Zoho-Expense?retryWrites=true&w=majority`
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

fastify.get("/", async (req, res) => {
  return { vistor: "gowtham" };
});

// starting server
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 4000, "0.0.0.0");
    fastify.log.info("Server is running a");
  } catch (error) {
    throw boom.boomify(error);
  }
};

start();
