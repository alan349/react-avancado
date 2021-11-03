import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Dialog, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { removeMovie } from '../services/movieApi';

export default function MovieDeleteButton(props) {
  const { id, row } = props;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleDelete() {
    removeMovie(id).then(() => {
      row.setRows((curr) => curr.filter((row) => row.id !== id));
      setIsDialogOpen(false);
    });
  }

  function handleDialog(e) {
    e.stopPropagation();
    setIsDialogOpen(true);
  }
  function handleCancel(e) {
    e.stopPropagation();
    setIsDialogOpen(false);
  }

  return (
    <div>
      <Dialog open={isDialogOpen}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", p: 5 }}>
          <Typography variant="h6">
            Você tem certeza que deseja remover este filme?
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", mt: 5, width: 1 }}>
            <Button variant="contained" onClick={handleDelete}>
              Sim
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Não
            </Button>
          </Box>
        </Box>
      </Dialog>
      <IconButton onClick={handleDialog}>
        <Delete />
      </IconButton>
    </div>
  );
};