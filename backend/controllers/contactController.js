const Contact = require('../models/Contact');

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error});
    }
};

// Create a new contact
const createContact = async (req, res) => {
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;

    if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({ message: 'All required fields must be filled' });
    }

    try {
        const newContact = await Contact.create({ firstName, lastName, email, phone, company, jobTitle });
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error});
    }
};

// Update a contact
const updateContact = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedContact) return res.status(404).json({ message: 'Contact not found' });

        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: error});
    }
};

// Delete a contact
const deleteContact = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });

        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error});
    }
};

module.exports = { getContacts, createContact, updateContact, deleteContact };