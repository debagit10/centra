import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Divider,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Order = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["View details", "Edit", "Delete"];

  const columns = [
    { id: "id", label: "Order ID" },
    { id: "date", label: "Date" },
    {
      id: "price",
      label: "Price",
    },
    {
      id: "customer",
      label: "Customer",
    },
    {
      id: "type",
      label: "Type",
    },
    {
      id: "payment_type",
      label: "Payment Type",
    },
  ];

  const createData = (id, date, price, customer, type, payment_type) => {
    return { id, date, price, customer, type, payment_type };
  };

  const rows = [
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "21-03-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value, 10);
    setPage(0);
  };

  return (
    <div className="container">
      <Paper elevation={6} style={{ width: "1215px", lineHeight: "21.6px" }}>
        <Typography
          sx={{ fontFamily: "Lato", fontWeight: 400, fontSize: "18px" }}
          className="p-3"
        >
          Orders
        </Typography>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}

                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            // maxHeight: ITEM_HEIGHT * 4.5,
                            //width: "20ch",
                          },
                        }}
                      >
                        <MenuItem
                          onClick={handleClose}
                          sx={{ color: "blue" }}
                          className="px-3"
                        >
                          <i className="px-2">
                            <InventoryOutlinedIcon />
                          </i>
                          View Details
                        </MenuItem>
                        <Divider
                          style={{
                            backgroundColor: "blue",
                            height: "2px",
                          }}
                        />
                        <MenuItem
                          onClick={handleClose}
                          sx={{ color: "blue" }}
                          className="px-3"
                        >
                          <i className="px-2">
                            <EditIcon />
                          </i>
                          Edit
                        </MenuItem>
                        <Divider
                          style={{
                            backgroundColor: "blue",
                            height: "2px",
                          }}
                        />
                        <MenuItem
                          onClick={handleClose}
                          sx={{ color: "blue" }}
                          className="px-3"
                        >
                          <i className="px-2">
                            <DeleteOutlinedIcon />
                          </i>
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Order;
