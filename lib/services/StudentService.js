class StudentService{

    static getAllStudents(students){
        const mystudents = students;
        return mystudents;        
    }

    static getEmail(students){
        const myStudents = StudentService.getAllStudents(students);
        const certification = myStudents.filter((student)=>{
            const check = student.haveCertification;
            if(check){
                const email = student.email;
                return email;
            }
        });
        return certification;
    }
}

module.exports = StudentService;