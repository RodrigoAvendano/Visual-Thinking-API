const Reader = require("../utils/reader");
const Service = require("../services/StudentService");

class StudentController{
    
    static getStudentsList(){
        const list = Reader.readJsonFile("visualpartners.json");
        const fullList = Service.getAllStudents(list);
        return fullList;
    }

    static getStudentsEmail(){
        const list = Reader.readJsonFile("visualpartners.json");
        const fullList = Service.getEmail(list);
        return fullList;
    }

    static getStudentsCredits(){
        const list = Reader.readJsonFile("visualpartners.json");
        const fullList = Service.getCredits(list);
        return fullList;
    }
}

module.exports = StudentController;