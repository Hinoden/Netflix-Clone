import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from "path";
import {protectRoute} from "./middleware/protectRoute.js";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";
import {ENV_VARS} from './config/envVars.js';
import {connectDB} from './config/db.js';

const app = express();
const PORT = process.env.PORT || ENV_VARS.PORT;
const __dirname = path.resolve();
app.use(express.json());        //allows us to parse req.body
app.use(cors({
    origin: ["https://netflix-clone-black-two.vercel.app/"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}));
app.use(cookieParser());

//connect to the auth routes depending on which page is visited
app.use("/api/auth", authRoutes);
app.use("/api/movie", protectRoute, movieRoutes);
app.use("/api/tv", protectRoute, tvRoutes);
app.use("/api/search", protectRoute, searchRoutes);

if (ENV_VARS.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    connectDB();
});