# Contacts Web App

Welcome to the **Contacts Web App**, a simple application designed to manage contacts and send One-Time Passwords (OTPs) via SMS using Twilio. This project serves as a practical example of building a full-stack application with a focus on responsiveness and functionality.

## Overview

This project is a web application that allows users to send One-Time Passwords (OTPs) via SMS to a list of contacts. Built with a modern tech stack, the application features a user-friendly interface for managing contacts and sending messages.

## Features

- **Contact List**: View a list of contacts with their details.
- **Contact Info Page**: Display detailed information about a selected contact.
- **Send Message Screen**: Compose and send OTP messages to contacts.
- **Message History**: View a list of sent messages, including contact name, time of the SMS, and OTP.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: Static JSON for contacts, message history is currently not persisted in a database.
- **SMS Service**: Twilio

## Prerequisites

- Node.js
- npm (Node Package Manager)
- A Twilio account (for SMS functionality)


## Live demo

You can find the live demo of the project here:

[https://contacts-web-app-frontend.onrender.com/](https://contacts-web-app-frontend.onrender.com/)

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.


# Contacts Web App

Welcome to the **Contacts Web App**, a simple application designed to manage contacts and send One-Time Passwords (OTPs) via SMS using Twilio. This project serves as a practical example of building a full-stack application with a focus on responsiveness and functionality.

## Project Overview

This project allows users to:
- View a list of contacts.
- View details for each contact, including name and phone number.
- Send an OTP SMS to a selected contact.
- View the history of messages sent.

### Key Features
- Responsive design for a seamless user experience.
- Utilizes Twilio for sending SMS messages.
- Built using React for the frontend and Node.js with Express for the backend.
- Stores contact information in a static JSON file.

## GitHub Repository

You can find the complete project on GitHub:

[https://github.com/Rishu18D/CONTACTS-WEB-APP-.git](https://github.com/Rishu18D/CONTACTS-WEB-APP-.git)


### Project Structure 

```
root/
│
├── backend/
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── contactModel.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── services/
│   │   └── smsService.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactList.js
│   │   │   ├── ContactInfo.js
│   │   │   ├── MessageScreen.js
│   │   │   ├── MessageHistory.js
│   │   ├── pages/
│   │   │   ├── ContactsPage.js
│   │   │   ├── MessageHistoryPage.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── README.md
├── .gitignore
└── yarn.lock / package-lock.json

```


## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Rishu18D/CONTACTS-WEB-APP-.git
cd CONTACTS-WEB-APP
```
### Install Dependencies
```
cd backend
npm install
```
### Frontend
```
cd ../frontend
npm install
```
### Environment Variables
```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```
### Start the Application
```
In Project root directory
npm install
npm start

