import React from 'react';
import mainLogo from "../../assets/logo.png";
import {
    Button,
    Checkbox,
    Stack,
    Box,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    TextField
} from "@mui/material";
const label = {inputProps: {'aria-label': 'Checkbox demo'}};
const whiteSpace = {
    padding: 15
}
const Registratie = () => {
    const size = {
        height: 100
    }
    const inputPadding = {
        padding: 15
    }
    return (
        <Box>
            <img
                src={mainLogo}
                style={size}
            />
                <h1>Registreren</h1>
                <div id="gender">
                    <RadioGroup className="select"
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="man" control={<Radio/>} label="man"/>
                        <FormControlLabel value="vrouw" control={<Radio/>} label="vrouw"/>
                        <FormControlLabel value="non-binair" control={<Radio/>} label="non-binair"/>
                    </RadioGroup>
                </div>
                <Stack component="form" id="name" direction="row" noValidate spacing={5} style={whiteSpace}>
                    <TextField
                        sx={{
                            maxWidth: 400,
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px",
                            }
                        }}
                        required
                        defaultValue="Voornaam"
                    />
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="Tussenvoegsel"

                    />
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="Achternaam"
                    />
                </Stack>
                <Stack component="form" id="name" direction="row" noValidate spacing={5} style={whiteSpace}>
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="Straat"
                    />
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="Huisnummer"
                    />
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="Toevoeging"
                    />
                </Stack>
                <Stack component="form" id="woonplaats" direction="row" noValidate spacing={5} style={whiteSpace}>
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="Plaats"
                    />
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="Postcode"
                    />
                </Stack>
                <Stack component="form" id="birth" direction="row" noValidate spacing={5} style={whiteSpace}>
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{
                            background: "#EFEACB",
                            width: 220,
                            borderRadius: "50px"
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Stack>
                <Stack component="form" id="contact" direction="row" noValidate spacing={5} style={whiteSpace}>
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="e-mailadres"
                    />
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="telefoonnummer"
                    />
                </Stack>
                <Stack component="form" id="password" direction="row" noValidate spacing={5} style={whiteSpace}>
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="wachtwoord"
                    />
                    <TextField
                        sx={{
                            input: {
                                textAlign: "left",
                                color: "black",
                                background: "#EFEACB",
                                borderRadius: "50px"
                            }
                        }}
                        required
                        id="outlined-required"
                        label="Verplicht invulveld"
                        defaultValue="herhaal wachtwoord"
                    />
                </Stack>
                <div>
                    <Checkbox {...label} />
                </div>
                <Button
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#E3B34E",
                        fontSize: "18px",
                        color: "Black",
                        maxWidth: 500
                    }}
                    variant="contained"
                >
                    Maak account aan
                </Button>
        </Box>
    )
        ;
};
export default Registratie;