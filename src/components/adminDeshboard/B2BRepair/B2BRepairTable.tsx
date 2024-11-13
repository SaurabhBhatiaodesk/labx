"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Switch,
  IconButton,
  TablePagination,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import B2BRepairFilter from "./B2BRepairFilter";

const B2BRepairTable: React.FC = () => {
  const router = useRouter();

  const dummyData = [
    {
      id: 1,
      productName: "ABC",
      category: "Accessories",
      price: "$30.00",
      salePrice: "$25.00",
      stock: 100,
      status: "Selling",
      published: true,
    },
    {
      id: 2,
      productName: "Fish Fillet",
      category: "Fish & Meat",
      price: "$6.00",
      salePrice: "$6.00",
      stock: 4,
      status: "Selling",
      published: true,
    },
    {
      id: 3,
      productName: "Organic Lotion",
      category: "Body Care",
      price: "$345.00",
      salePrice: "$234.00",
      stock: 20,
      status: "Selling",
      published: true,
    },
    {
      id: 4,
      productName: "Fresh Carrots",
      category: "Fresh Vegetable",
      price: "$1.00",
      salePrice: "$0.00",
      stock: 0,
      status: "Sold Out",
      published: false,
    },
    {
      id: 5,
      productName: "Premium T-Shirt",
      category: "Men",
      price: "$450.00",
      salePrice: "$450.00",
      stock: 4971,
      status: "Selling",
      published: true,
    },
    // Add more data as needed for pagination testing
  ];

  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleViewClick = (id: number) => {
    router.push(`/adminDeshboard/b2brepair/b2brepairdata?id=${id}`);
  };

  // Paginate data
  const paginatedData = dummyData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" sx={{ margin: 2 }}>
        B2B Repair Product List
      </Typography>
      <B2BRepairFilter />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Sale Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>View</TableCell>
            <TableCell>Published</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.salePrice}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Typography
                  sx={{
                    color: product.status === "Sold Out" ? "red" : "green",
                    fontWeight: "bold",
                  }}
                >
                  {product.status}
                </Typography>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleViewClick(product.id)}>
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <Switch checked={product.published} />
              </TableCell>
              <TableCell>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={dummyData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        sx={{
          "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
            {
              color: "green", // Change this color to your preferred color
            },
          "& .MuiTablePagination-select": {
            color: "green", // Change this color to your preferred color
          },
        }}
      />
    </TableContainer>
  );
};

export default B2BRepairTable;
