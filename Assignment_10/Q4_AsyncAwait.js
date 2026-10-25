
function getStudentData(id) {
    return new Promise(function(resolve, reject) {

        console.log("Loading Student " + id + "...");

        setTimeout(function() {

            if (id >= 1 && id <= 3) {
                let student = {
                    id: id,
                    name: "Student " + id,
                    age: 20 + id
                };

                resolve(student);
            } else {
                reject("Student not found!");
            }

        }, 2000);
    });
}

async function showStudents() {
    try {
        // Load Student 1
        let student1 = await getStudentData(1);
        console.log(student1);

        // Load Student 2
        let student2 = await getStudentData(2);
        console.log(student2);

        // Load Student 3
        let student3 = await getStudentData(3);
        console.log(student3);

    } catch (error) {
        console.log("Error:", error);
    }
}

showStudents();

