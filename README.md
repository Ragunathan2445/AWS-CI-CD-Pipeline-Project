# Student Management System

A simple full-stack application created for an AWS CI/CD DevOps project.

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Docker
- Jenkins
- GitHub
- Amazon ECR
- Amazon EC2

## Project Architecture

Frontend
↓
Node.js + Express
↓
Docker
↓
Jenkins CI/CD
↓
Amazon ECR
↓
Amazon EC2

## Features

- View student information
- Check backend status
- Health check endpoint
- Dockerized application
- CI/CD pipeline

## API Endpoints

### Backend Status

GET:

/api/status

### Students

GET:

/api/students

### Health Check

GET:

/health

## Run Locally

```bash
cd backend
npm install
npm start