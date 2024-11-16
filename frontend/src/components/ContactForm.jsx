import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

const ContactForm = ({ fetchContacts, contact, onClose }) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contact) {
        await axios.put(`${backendUrl}/api/contacts/${contact._id}`, formData);
      } else {
        await axios.post(`${backendUrl}/api/contacts`, formData);
      }
      fetchContacts();
      onClose();
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "grid", gap: 2 }}
    >
      {["firstName", "lastName", "email", "phone", "company", "jobTitle"].map(
        (field) => (
          <TextField
            key={field}
            name={field}
            label={field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            value={formData[field]}
            onChange={handleChange}
            required="true"
          />
        )
      )}
      <Button type="submit" variant="contained">
      {contact ? 'Update' : 'Submit'}
      </Button>
    </Box>
  );
};

export default ContactForm;
