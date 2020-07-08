export const ABCSort = (empArray, alphaToggle) => {//exports the ABC sort function
        let newArray = empArray.sort((a, b) => {//creates a new array and stores the sorted array within it
            if (alphaToggle === false) {//checks toggle to see if sorting in ascending or descending order
            if (a.name.first < b.name.first) { return -1; }
            if (a.name.first > b.name.first) { return 1; }
            } else {
                if (a.name.first > b.name.first) { return -1; }
                if (a.name.first < b.name.first) { return 1; }
            }
            return 0;
        })
    
    if (alphaToggle === false) {//returns object to update states with in body.js and resets the toggle
        return {employeeArray : newArray, alphabetToggle: true};
    } else {
       return {employeeArray : newArray, alphabetToggle: false};
    }

}


export const EmpSearch = (event, searchToggle, searchVal, employeeArray, fullEmployeeArray) => {//exports the search function
    event.preventDefault();//prevents page reloading
    if (searchToggle === false) {//checks if search currently exists
   const employees = employeeArray.filter((str)=> { //creates a new array from the old one with elements that match the criteria
       let fullname = `${str.name.first} ${str.name.last}`.toLowerCase()//converts the name to a full name and changes it to lower case
       return fullname.indexOf(searchVal.toLowerCase()) >= 0; //returns the element to the new array only if it has some of the searched values within it
   });
   return { employeeArray : employees, searchToggle : true };//returns an object to reset the new state with
} else { //if search exists then it returns the employee list back to the full unfiltered list
   return { employeeArray : fullEmployeeArray, searchToggle : false };
}

 }

