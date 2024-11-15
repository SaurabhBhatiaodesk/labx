"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  TablePagination,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import B2BRepairFilter from "./B2BRepairFilter";

const B2BRepairTable: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (page: number, limit: number) => {
    setIsLoading(true);
    try { 
      const response = await axios.get(`http://18.117.249.163:7000/api/repair`, {
        params: {
          page: page + 1, // Backend pages are 1-indexed
          limit,
        },
      });
      setData(response.data.data);
      setTotalRecords(response.data.pagination.totalRecords);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when changing rows per page
  };

  const handleViewClick = (id: string) => {
    router.push(`/adminDeshboard/b2brepair/b2brepairdata?id=${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" sx={{ margin: 2 }}>
        B2B Repair List
      </Typography>
      <B2BRepairFilter />
      {isLoading ? (
        <Typography sx={{ textAlign: "center", margin: 2 }}>Loading...</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Business Name</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Contact No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Device Type</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((record: any) => (
              <TableRow key={record._id}>
                <TableCell>{record.personalDetails.businessName}</TableCell>
                <TableCell>{record.personalDetails.fullName}</TableCell>
                <TableCell>{record.personalDetails.contactNo}</TableCell>
                <TableCell>{record.personalDetails.emailAddress}</TableCell>
                <TableCell>{record.deviceDetails.deviceType}</TableCell>
                <TableCell>{record.deviceDetails.brand}</TableCell>
                <TableCell>{record.deviceDetails.model}</TableCell>
                <TableCell>
                  <Typography sx={{ color: "green", fontWeight: "bold" }}>
                    Active
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleViewClick(record._id)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <TablePagination
        component="div"
        count={totalRecords}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        sx={{
          "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
            color: "green",
          },
          "& .MuiTablePagination-select": {
            color: "green",
          },
        }}
      />
    </TableContainer>
  );
};

export default B2BRepairTable;
