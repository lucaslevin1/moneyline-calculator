import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Header, Input } from 'semantic-ui-react';

function App() {
  const [winProbability, setWinProbability] = useState('50.00');
  const [odds, setOdds] = useState('100');

  const calculateRoi = () => {
    const winProbabilityAsNum = Number(winProbability) / 100;
    const oddsAsNum = Number(odds);

    const expectedWin =
      oddsAsNum > 0
        ? oddsAsNum * winProbabilityAsNum
        : (100 / Math.abs(oddsAsNum)) * 100 * winProbabilityAsNum;

    const expectedLoss = (1 - winProbabilityAsNum) * 100;

    return Math.round((expectedWin - expectedLoss) * 100) / 100;
  };

  return (
    <Grid padded>
      <Grid.Column>
        <Header as='h3' content='Win probability (as a percentage)' />
        <Input
          placeholder={winProbability}
          onChange={(e, { value }) => setWinProbability(value)}
        />
        %
        <Header as='h3' content='Moneyline' />
        <Input placeholder={odds} onChange={(e, { value }) => setOdds(value)} />
        <Header as='h2' content={`Expected Profitz: $${calculateRoi()}`} />
      </Grid.Column>
    </Grid>
  );
}

export default App;
