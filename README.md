# Simple Contacts Web App

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
