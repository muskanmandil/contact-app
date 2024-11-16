import React, { useState, useEffect } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';
import axios from 'axios';

const App = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [contacts, setContacts] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const fetchContacts = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/contacts`);
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleAddClick = () => {
        setSelectedContact(null);
        setOpen(true);
    };

    const handleEditClick = (contact) => {
        setSelectedContact(contact); 
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <ContactsTable
                contacts={contacts}
                fetchContacts={fetchContacts}
                onEdit={handleEditClick}
            />

            <Fab
                color="primary"
                aria-label="add"
                onClick={handleAddClick}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}
            >
                <AddIcon />
            </Fab>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>{selectedContact ? 'Edit Contact' : 'Add Contact'}</DialogTitle>
                <DialogContent>
                    <ContactForm
                        fetchContacts={fetchContacts}
                        contact={selectedContact}
                        onClose={handleClose}
                    />
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default App;
