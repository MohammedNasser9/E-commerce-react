// Example: FeatureSection.jsx
import { Box, Container, Stack, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const features = [
    { icon: <LocalShippingIcon fontSize="medium" />, title: "Fast Delivery", desc: "Start from $10" },
    { icon: <SupportAgentIcon fontSize="medium" />, title: "24/7 Support", desc: "Get support anytime" },
    { icon: <SecurityIcon fontSize="medium" />, title: "Secure Payment", desc: "100% secure payments" },
    { icon: <CreditCardIcon fontSize="medium" />, title: "Credit Cards", desc: "Visa / MasterCard accepted" },

];

export default function FeatureSection() {
    return (
        <Container sx={{ mt: 5 }}>
            <Box
                sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
            >
                {features.map((item, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            justifyContent: { xs: 'start', sm: 'center' },
                            p: ' 12px',
                            bgcolor: "background.paper",
                            borderRadius: 2,
                            flex: 1,
                            flexBasis: 200
                        }}
                    >
                        {item.icon}
                        <Stack spacing={'1px'}>
                            <Typography variant="h6" fontWeight={'bold'} fontSize={16}>{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary" fontSize={12}>
                                {item.desc}
                            </Typography>
                        </Stack>
                    </Stack>
                ))}
            </Box>
        </Container>
    );
}
