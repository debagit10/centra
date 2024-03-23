import React, { useEffect, useState } from "react";
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
} from "@mui/material";

import axios from "axios";

const Recent_orders = () => {
  const [details, setDetails] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //const details = [];

  const recentOrders = async () => {
    const config = { headers: { "Content-type": "application/json" } };

    try {
      const response = await axios.get(
        "https://itoju-production.up.railway.app/api/v1//dashboard/",
        config
      );
      //console.log(response.data.data);

      for (let i = 0; i < response.data.data.length; i++) {
        if (!response.data.data[i].totalEarnings) {
          setDetails(response.data.data[i]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(details);

  useEffect(() => {
    recentOrders();
  });

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
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
    createData("#1234", "22-01-24", "$20", "Favour Urihofe", "Walk-in", "Cash"),
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
      <Typography
        sx={{ fontFamily: "Lato", fontWeight: 600, fontSize: "18px" }}
      >
        Recent Orders
      </Typography>
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

export default Recent_orders;
