// Write your solution in this file!
const employee = {
    name: '',
    streetAddress: '', 
 }

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]: value,
    };
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee, 
    'Sam',
    "11 Broadway"
)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] =value;
    return employee;
}
const newerEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "12 Broadway")

function deleteFromEmployeeByKey(employee, key){
    const newEmp = {... employee}
    delete newEmp[key];
    return newEmp
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key]
return employee
}