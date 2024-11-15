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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
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
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchData = async (page: number, limit: number, searchValue = "") => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      let response;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'mode':'no-cors'
        },
        params: {
          page: page + 1, // Backend pages are 1-indexed
          limit,
        },
      };

      if (searchValue.trim() === "") {
        // Normal GET request with CORS configuration
        response = await axios.get(`http://18.117.249.163:7000/api/repair`, config);
      } else {
        // Search POST request with CORS configuration
        response = await axios.post(
          `http://18.117.249.163:7000/api/repair/search`,
          { searchValue },
          config
        );
      }

      // Check if the response is successful and has the expected data
      if (response.status === 200 && response.data) {
        setData(response.data.data);
        setTotalRecords(response.data.pagination.totalRecords);
      } else {
        setErrorMessage("Unexpected response format received.");
      }
      setIsLoading(false);
    } catch (error: unknown) {
      console.error("Fetch data error:", error); // Log the full error for debugging

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Response error details:", error.response); // Log error details
          if (error.response.status === 404) {
            setErrorMessage("No records found matching the search criteria.");
          } else {
            setErrorMessage(`Server responded with status code ${error.response.status}`);
          }
        } else if (error.request) {
          console.error("Request made but no response received:", error.request);
          setErrorMessage("No response received from the server. Check your network connection.");
        } else {
          console.error("Error in setting up the request:", error.message);
          setErrorMessage("An error occurred while setting up the request.");
        }
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }

      setIsLoading(false);
    }
  };



  useEffect(() => {
    fetchData(page, rowsPerPage, searchValue);
  }, [page, rowsPerPage, searchValue]);

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

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setPage(0); // Reset to the first page when searching
  };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (deleteId) {
      try {
        await axios.delete(`http://18.117.249.163:7000/api/repair/delete/${deleteId}`);
        setDeleteDialogOpen(false);
        setDeleteId(null);
        fetchData(page, rowsPerPage, searchValue); // Refresh data after deletion
      } catch (error) {
        console.error("Error deleting record:", error);
        setErrorMessage("An error occurred while deleting the record.");
      }
    }
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
    setDeleteId(null);
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" sx={{ margin: 2 }}>
        B2B Repair List
      </Typography>
      <B2BRepairFilter onSearchChange={handleSearchChange} />
      {isLoading ? (
        <Typography sx={{ textAlign: "center", margin: 2 }}>Loading...</Typography>
      ) : errorMessage ? (
        <Typography sx={{ textAlign: "center", margin: 2, color: "red" }}>
          {errorMessage}
        </Typography>
      ) : data.length === 0 ? (
        <Typography sx={{ textAlign: "center", margin: 2 }}>No records found.</Typography>
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
                  <IconButton onClick={() => handleDeleteClick(record._id)}>
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

      {/* Delete confirmation dialog */}
      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this record? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default B2BRepairTable;
