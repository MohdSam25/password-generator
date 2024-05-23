
import React from 'react';
import { Button } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const CopyToClipboardButton = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Password copied to clipboard!');
  };

  return (
    <Button variant="contained" color="secondary" onClick={copyToClipboard} startIcon={<FileCopyIcon />}>
      Copy to Clipboard
    </Button>
  );
};

export default CopyToClipboardButton;
