import { TextField, Button, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f5c1cd03fdf174bd660d9780392bd922";

    const getWeatherInfo = async () => {
        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        if (data.cod !== 200) throw new Error(data.message);
        return {
            city: data.name,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].main,
            icon: data.weather[0].icon,
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} textAlign="center" mt={2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                <TextField
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    sx={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: 1 }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ px: 4, py: 1.5, boxShadow: 3 }}
                >
                    Search
                </Button>
            </Stack>
            {error && (
                <Typography mt={1} color="error">
                    City not found
                </Typography>
            )}
        </Box>
    );
}
