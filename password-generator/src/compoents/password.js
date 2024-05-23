
import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';

const PasswordGeneratorForm = ({ onGenerate }) => {
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeAlphabets, setIncludeAlphabets] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const handleGenerate = () => {
    onGenerate({ includeNumbers, includeAlphabets, includeSpecialChars });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">Password Generator</Typography>
      <FormControlLabel
        control={<Checkbox checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />}
        label="Include Numbers"
      />
      <FormControlLabel
        control={<Checkbox checked={includeAlphabets} onChange={(e) => setIncludeAlphabets(e.target.checked)} />}
        label="Include Alphabets"
      />
      <FormControlLabel
        control={<Checkbox checked={includeSpecialChars} onChange={(e) => setIncludeSpecialChars(e.target.checked)} />}
        label="Include Special Characters"
      />
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generate Password
      </Button>
    </Box>
  );
};

export default PasswordGeneratorForm;
