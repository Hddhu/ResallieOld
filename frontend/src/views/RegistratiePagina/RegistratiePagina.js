import React from 'react';
import Button from '@mui/material/Button';
import {
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

const Registratie = () => {
    const helpMe = {padding: '20px'}
    const textFieldContainer = {justifyContent: 'left'}
    return (
        <div>
            <Box m={`1`}>
                <Stack direction="row" justifyContent="center">
                    <form>
                        <div id="title">
                            <h1>Registreren</h1>
                        </div>
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
                        <div className="textFields" style={textFieldContainer}>
                            <div id="name" className="textField" style={helpMe}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Voornaam"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Tussenvoegsel"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Achternaam"
                                />
                            </div>
                            <div id="adres" className="textField" style={helpMe}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Straat"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Huisnummer"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Toevoeging"
                                />
                            </div>
                            <div id="woonplaats" className="textField" style={helpMe}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Plaats"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Postcode"
                                />
                            </div>
                            <div id="geboorteDatum" className="textField" style={helpMe}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="Geboortedatum"
                                />
                            </div>
                            <div id="contact" className="textField" style={helpMe}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="e-mailadres"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="telefoonnummer"
                                />
                            </div>
                            <div id="wachtwoord" className="textField" style={helpMe}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="wachtwoord"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Verplicht invulveld"
                                    defaultValue="herhaal wachtwoord"
                                />
                            </div>
                            <Button variant="contained">Maak account aan</Button>
                        </div>
                    </form>
                </Stack>
            </Box>
        </div>
    )
        ;
};

export default Registratie;
