const express = require("express");
const expressGraphQL = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
