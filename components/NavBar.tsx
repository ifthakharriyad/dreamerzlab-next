import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function NavBar() {
  const [anchorElField, setanchorElField] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElWM, setanchorElWM] = React.useState<null | HTMLElement>(null);
  const [anchorElAnalze, setanchorElAnalze] =
    React.useState<null | HTMLElement>(null);

  const openField = Boolean(anchorElField);
  const openWM = Boolean(anchorElWM);
  const openAnalyze = Boolean(anchorElAnalze);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id == "btn-field") {
      setanchorElField(event.currentTarget);
    } else if (event.currentTarget.id == "btn-wm") {
      setanchorElWM(event.currentTarget);
    } else if (event.currentTarget.id == "btn-analyze") {
      setanchorElAnalze(event.currentTarget);
    }
  };

  const handleClose = () => {
    setanchorElField(null);
    setanchorElWM(null);
    setanchorElAnalze(null);
  };

  return (
    <div style={{ backgroundColor: "#d3d3d354", marginBottom: "1rem" }}>
      <Toolbar
        sx={{
          justifyContent: "center",
          minHeight: "48px !important",
        }}
      >
        <Button
          id="btn-field"
          onClick={handleClick}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Field
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorElField}
          open={openField}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "btn-field",
          }}
        >
          <MenuItem onClick={handleClose}>Add</MenuItem>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Import</MenuItem>
        </Menu>
        <Button
          id="btn-wm"
          onClick={handleClick}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Water Management
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorElWM}
          open={openWM}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "btn-wm",
          }}
        >
          <MenuItem onClick={handleClose}>Pump</MenuItem>
          <MenuItem onClick={handleClose}>TDI</MenuItem>
          <MenuItem onClick={handleClose}>Tile Maps</MenuItem>
          <MenuItem onClick={handleClose}>Assessment</MenuItem>
        </Menu>
        <Button
          id="btn-analyze"
          onClick={handleClick}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Analyze
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorElAnalze}
          open={openAnalyze}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "btn-analyze",
          }}
        >
          <MenuItem onClick={handleClose}>Yield</MenuItem>
          <MenuItem onClick={handleClose}>Soil</MenuItem>
          <MenuItem onClick={handleClose}>Plant Dates</MenuItem>
        </Menu>
      </Toolbar>
    </div>
  );
}
