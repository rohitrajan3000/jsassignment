const employees = [
    {
      id: 11,
      name: "Abhinav",
      salary: 75000,
    },
    {
      id: 2131,
      name: "Raj",
      salary: 62000,
    },
    {
      id: 3012,
      name: "Raj",
      salary: 32000,
    }
  ];
  
  const employeeIDs = employees.map(employee => employee.id);
  
  console.log("Employee IDs:", employeeIDs);
  