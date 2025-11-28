import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function InfoBox({ info }) {
    const iconUrl = `http://openweathermap.org/img/wn/${info.icon}@2x.png`;

    return (
        <Card
            sx={{
                maxWidth: 400,
                mx: "auto",
                borderRadius: 3,
                boxShadow: 6,
                textAlign: "center",
                py: 3,
                px: 2,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
                backgroundColor: "rgba(255,255,255,0.85)",
            }}
        >
            <Box display="flex" justifyContent="center" alignItems="center">
                <img src={iconUrl} alt="weather icon" width={80} height={80} />
            </Box>

            <CardContent>
                <Typography variant="h5" fontWeight="bold">
                    {info.city}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    {info.weather.charAt(0).toUpperCase() + info.weather.slice(1)}
                </Typography>
                <Typography variant="h4" fontWeight="bold" mt={1}>
                    {info.temp}°C
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                    🌡 Feels like: {info.feelsLike}°C <br />
                    🔺 Max: {info.tempMax}°C, 🔻 Min: {info.tempMin}°C <br />
                    💧 Humidity: {info.humidity}%
                </Typography>
            </CardContent>
        </Card>
    );
}
