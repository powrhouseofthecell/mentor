import app from "./app";
import create_db_con from "./db/create_con";

const DB_URI = process.env.DB_URI?.replace(
  "<password>",
  process.env.DB_PASSWORD as string,
) as string;
const PORT = process.env.PORT;

create_db_con(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🛢 DB connected and App started on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });
