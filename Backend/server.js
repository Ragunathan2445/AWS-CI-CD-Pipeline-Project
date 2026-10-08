const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "../Frontend")));

app.get("/api/status", (req, res) => {
  res.json({
    status: "success",

    message: "Backend is running successfully 🚀",
  });
});

app.get("/api/students", (req, res) => {
  const students = [
    {
      id: 1,
      name: "Arun Kumar",
      course: "Computer Science",
      year: "Final Year",
    },

    {
      id: 2,
      name: "Priya Sharma",
      course: "Artificial Intelligence",
      year: "Third Year",
    },

    {
      id: 3,
      name: "Rahul Kumar",
      course: "Data Science",
      year: "Final Year",
    },
  ];

  res.json(students);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",

    message: "CloudTrack backend is healthy",
  });
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`CloudTrack server running on port ${PORT}`);
});
