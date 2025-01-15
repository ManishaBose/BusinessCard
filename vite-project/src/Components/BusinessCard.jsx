import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

export function BusinessCard({people}){
    return <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={4}
    useFlexGap
    sx={{ justifyContent: "center", alignItems: "flex-start", padding: 2, flexWrap: "wrap"}}
  >
    {people.map((person)=>{
        return(
                <Card variant="outlined" sx={{
                    padding: 4,
                    margin: 2,
                    width: 300,
                    borderRadius: 2,
                    boxShadow: 3,
                  }}>
                <h1>{person.name}</h1>
                <p style={{
                    color: "#808080"
                }}>{person.description}</p>
                <h2>Interests</h2>
                <Stack spacing={1}>
                {
                    person.interests.map((interest)=>{
                        return(
                            <p style={{
                                color: "#808080"
                            }}>{interest}</p>
                        )
                    })
                }
                </Stack>
                <a href={person.linkedin}>
                    <Button variant="contained" style={{
                       
                        margin: 10
                    }}>Linkedin</Button>
                </a>
                <a href={person.twitter}>
                    <Button variant="contained">Twitter</Button>
                </a>
            </Card>)
    })
}
</Stack>
}