import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const teams = [
  {
    name: 'Cristiane Kizelevicius',
    linkedin: 'cristiane-kizelevicius-samaan-7a2208239',
    github: 'Cristks',
  },
  {
    name: 'Filipe Lima',
    linkedin: 'filipe-lima-dev',
    github: 'flimamcz',
  },
  {
    name: 'Júlio Silveira',
    linkedin: 'juliosilveiradev',
    github: 'julio-silveira',
  },
  {
    name: 'Vitor Teixeira',
    linkedin: 'vitor-barrioni',
    github: 'VitorBarrioni',
  },
];
function About() {
  return (
    <div className="pb-50">
      <Header />
      <Typography
        variant="h5"
        className="text-center pb-3"
        color="secondary"
        sx={ { fontWeight: 700 } }
      >
        Feito por:
      </Typography>
      <Grid
        container
        spacing={ 2 }
        sx={ { paddingBottom: '80px', minHeight: '80vh', alignItems: 'center' } }
      >
        {teams.map(({ name, linkedin, github }) => (
          <Grid
            sx={ { display: 'flex', justifyContent: 'center' } }
            item
            xs={ 12 }
            md={ 6 }
            xl={ 3 }
            key={ name }
          >
            <Paper
              elevation={ 10 }
              sx={ {
                width: '350',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
              } }
            >
              <img className="about-avatar" width={ 280 } src={ `https://avatars.githubusercontent.com/${github}?size=280` } alt="logo1" />

              <h6>{name}</h6>
              <Box>
                <a id={ github } href={ `https://github.com/${github}` } target="blank">
                  <GitHubIcon className="about-icon" fontSize="large" color="primary" />
                </a>

                <a href={ `https://www.linkedin.com/in/${linkedin}` } target="blank">
                  <LinkedInIcon fontSize="large" color="primary" />
                </a>
              </Box>
            </Paper>
          </Grid>))}
      </Grid>
      <Footer />
    </div>
  );
}

export default About;
