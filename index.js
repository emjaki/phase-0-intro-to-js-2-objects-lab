// Write your solution in this file!
const employee = {
    name: 'Mickey Mouse',
    streetAddress: '1 Paradise Lane, Disneyland'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = { ...obj};
    newObj[key] = value;
    return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, 'country', 'United States');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'phone number', '(123) 456-7890');

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj};
    key = delete newObj[key];
    return newObj;
}

const cloneEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    key = delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, 'phone number');