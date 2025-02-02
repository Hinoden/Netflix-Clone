import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {protectRoute} from "./middleware/protectRoute.js";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";
import {ENV_VARS} from './config/envVars.js';
import {connectDB} from './config/db.js';

const app = express();
const PORT = ENV_VARS.PORT

app.use(cors({
    origin: ['https://netflix-clone-lemon-theta.vercel.app'],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],  // Allow required headers
    credentials: true,       //allows cookies to be enabled
}));

// Explicitly handle preflight OPTIONS requests
app.options("*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://netflix-clone-lemon-theta.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendStatus(204); // Preflight response OK
});

app.use(express.json());        //allows us to parse req.body
app.use(cookieParser());

//connect to the auth routes depending on which page is visited
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
    connectDB();
});