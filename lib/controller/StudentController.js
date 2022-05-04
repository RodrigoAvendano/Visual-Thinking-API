const Reader = require("../utils/reader");
const Service = require("../services/StudentService");

class StudentController{
    
    static getStudentsList(students){
        const list = Reader.readJsonFile(students);
        const fullList = Service.getAllStudents(list);
        return fullList;
    }
}

module.exports = StudentController;