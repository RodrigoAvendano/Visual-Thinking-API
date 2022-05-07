const Controller = require("./controller/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/",(response)=>{
    response.json({message: "Visual-Thinking Api welcome!"});
});

app.get("/students/", (request, response) =>{
    const allStudents = Controller.getStudentsList();
    response.json(allStudents);
});

app.get("/students/mail", (request, response) =>{
    const mails = Controller.getStudentsEmail();
    response.json(mails);
});

app.get("/students/credits", (request, response) =>{
    const credits = Controller.getStudentsCredits();
    response.json(credits);
});

app.listen(port, ()=>{
    console.log(`Visual-Thinking API in localhost:${port}`);
});