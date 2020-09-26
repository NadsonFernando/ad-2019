import server from "./server";
import routes from "./routes";
import database from "./database";

const app = server.initialize();

database.connect();
app.use(routes);
