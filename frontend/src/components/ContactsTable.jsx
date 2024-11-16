import React from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

const ContactsTable = ({ contacts, fetchContacts, onEdit }) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error("Error deleting the conatct", error);
      alert("error");
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow
          sx={{
            backgroundColor: "primary.main",
            "& th": {
              color: "white",
              fontWeight: "bold",
              border: "1px solid white"
            },
          }}
        >
          {[
            "First Name",
            "Last Name",
            "Email",
            "Phone",
            "Company",
            "Job Title",
            "Actions",
          ].map((col) => (
            <TableCell key={col}>{col}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.firstName}</TableCell>
            <TableCell>{contact.lastName}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>{contact.jobTitle}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(contact)} color="info">
                Edit
              </Button>
              <Button onClick={() => handleDelete(contact._id)} color="error">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactsTable;
