import scss from './Dashboard.module.scss';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Dashboard() {
  return (
    <Box>
      <Grid container gap={2} className={scss.topCardsContainer}>
        <Grid>
          <Paper className={scss.dataCard}></Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}></Paper>
        </Grid>
        <Grid>
          <Paper className={scss.dataCard}></Paper>
        </Grid>
      </Grid>
      <Grid xs={12} marginY={2}>
        <Paper className={scss.dataCard}></Paper>
      </Grid>
    </Box>
  );
}

export default Dashboard;
