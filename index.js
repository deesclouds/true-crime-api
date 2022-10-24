const express = require('express');
const app = express()
const PORT = 8080;

// use middleware to parse JSON
app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}`)
)
app.get('/characters', (req, res) => {
    res.status(200).send({
        name: 'Charles-Haden Savage',
        alias1: 'Brazzos',
        alias2: 'Charlie',
        alias3: 'Chaz',
        alias4: 'Chuckers',
        alias5: 'Charles Haden Church',
        relatives1: 'Father',
        relatives2: 'Mother',
        relatives3: 'Sister',
        relatives4: 'Dawn',
        relatives5: 'Danielle',
        relatives6: 'Dina',
        relatives7: 'Dagmar',
        occupation1: 'Podcast Host',
        occupation2: 'Actor',
        status: 'Alive',
        firstappearance: 'True Crime',
        appearancecount: '20',
        appearanceseasons: '1 & 2',
        portrayedby: 'Steve Martin',
    })
})

app.post('/characters:id', (req,res) => {
    const { id } = req.params;
    const { characters } = req.body;

    if (!characters) {
        res.status(418).send({ message: 'We need a character' })
    }
    res.send({
        characters: `We need a ${characters} and ID of ${characters}`,
    })
})