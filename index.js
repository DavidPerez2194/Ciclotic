const { app } = require("./bin/routes/index");
const db = require("./bin/utils/db")

db.connect()

app.listen(8080, () => {
  console.log("Server on");
});