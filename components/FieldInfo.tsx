import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

interface HeaderProps {
  title: string;
}

export default function TopBar(props: HeaderProps) {
  const { title } = props;
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "black",
    fontWeight: 600,
    borderRadius: 0,
    border: 0,
    boxShadow: "none",
    backgroundColor: "lightgrey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <div>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          backgroundColor: "darkgray",
          marginBottom: "1rem",
          minHeight: "48px !important",
        }}
      >
        <Typography variant="body1" color="white" noWrap>
          {title}
        </Typography>
        <div>
          <Button variant="contained" size="small">
            Request Service
          </Button>
        </div>
      </Toolbar>
      <Grid
        container
        spacing={2}
        sx={{
          marginBottom: ".7rem",
          minHeight: "48px !important",
        }}
      >
        <Grid item xs={4}>
          <Item>My Fields</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Field Data</Item>
        </Grid>
        <Grid item xs>
          <Item>Field Monitor</Item>
        </Grid>
        <Grid item xs>
          <Item>Field Insight</Item>
        </Grid>
        <Grid item xs>
          <Item>Field Notes</Item>
        </Grid>
        <Grid item xs>
          <Item>Share Status</Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
        <Grid item xs={4}>
          <Item sx={{ height: "150px", backgroundColor: "#d3d3d3e3" }}>
            <div>Field List Dropdown View</div>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ height: "150px", backgroundColor: "#e0ffff6b" }}>
            Drainage Classification
          </Item>
        </Grid>
        <Grid item xs>
          <Item
            sx={{
              height: "150px",
              color: "white",
              backgroundColor: "#333333b8",
            }}
          >
            Data, Graph, and Tables
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
