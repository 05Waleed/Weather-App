import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Zurich",
        feelsLike: 24.4,
        temp: 23,
        tempMax: 91,
        tempMin: 12,
        humidity: 12,
        weather: "Clear",
        icon: "01d"
    });

    const updateInfo = (newInfo) => setWeatherInfo(newInfo);

    // Change background based on weather
    const getBackground = () => {
        switch (weatherInfo.weather.toLowerCase()) {
            case "clear":
                return "linear-gradient(135deg, #f6d365 0%, #fda085 100%)";
            case "clouds":
                return "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)";
            case "rain":
                return "linear-gradient(135deg, #667db6 0%, #0082c8 100%)";
            case "snow":
                return "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)";
            default:
                return "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)";
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                py: 5,
                background: getBackground(),
                transition: "background 0.5s ease",
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h3" align="center" gutterBottom sx={{ color: "#fff", fontWeight: "bold" }}>
                    Weather App by Waleed
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom sx={{ color: "#f0f0f0" }}>
                    Search any city to get the current weather
                </Typography>

                <SearchBox updateInfo={updateInfo} />

                <Box mt={4}>
                    <InfoBox info={weatherInfo} />
                </Box>
            </Container>
        </Box>
    );
}
