const Reader = require("../utils/reader");
const Service = require("../services/StudentService");

class StudentController{
    
    static getStudentsList(students){
        const list = Reader.readJsonFile(students);
        const fullList = Service.getAllStudents(list);
        return fullList;
    }

    static getStudentsEmail(students){
        const list = Reader.readJsonFile(students);
        const fullList = Service.getEmail(list);
        return fullList;
    }

    static getStudentsCredits(students){
        const list = Reader.readJsonFile(students);
        const fullList = Service.getCredits(list);
        return fullList;
    }
}

module.exports = StudentController;