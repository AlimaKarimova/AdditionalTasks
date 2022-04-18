function gradingStudents(grades) {
    let x;
    for (let i in grades) {
        if (grades[i] >= 38) {
            if (grades[i] % 5 >=3) {
                grades[i] += 5-(grades[i] % 5)

            } else {
                grades[i] == grades[i]
            }
        } else {
            grades[i] == grades[i]
        }
    }
    return grades

}
console.log(gradingStudents([73, 67, 38, 33]))