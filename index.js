import express from "express";
import axios from "axios";

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine","ejs");

app.get("/", async (req, res) => {
    const apiKey = "bab23d7db2b1421eb29164003242808";
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.render("index", { error: "Latitude and longitude are required" });
    }

    try {
        const weather = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
        );
        const weatherData = weather.data.current;
        res.render("index", {
            latitude: latitude,
            longitude: longitude,
            weather: weatherData.condition.text,
            icon: `http://cdn.weatherapi.com/weather/64x64/${weatherData.condition.icon.replace('//cdn.weatherapi.com/weather/64x64/', '')}` // Construct the icon URL
        });
    } catch (error) {
        res.render("index", { error: "Error fetching the weather details. Please try again later." });
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
