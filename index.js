// Write your solution in this file!
//Initialize employee object
const employee = {
    employeeName: "Courtney Harris",
    streetAddress: "6 Anna St. Nyack, NY 10960"
}
//Function to NONDESTRUCTIVELY update Employee object
const updateEmployeeWithKeyAndValue = (obj, key, value) => {
    const updatedEmployee = {...obj};
    updatedEmployee[key] = value;
    return updatedEmployee;

}

//Function to DESTRUCTIVELY update Employee object
const destructivelyUpdateEmployeeWithKeyAndValue =(obj, key, value) => {
    obj[key] = value
    return obj;

}
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "employeeName", "Theresa Cates"));

//Function to NONDESTRUCTIVELY delete a property that corresponds to the key value
const deleteFromEmployeeByKey = (obj, key) => {
    const newEmployee = {...obj}
    delete newEmployee[key];
    return newEmployee;
}
//console.log(deleteFromEmployeeByKey(employee, "streetAddress"));

const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
     delete obj[key];
     return obj;
}
//console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"))
