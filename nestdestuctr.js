const employee = {
    name: "Alice",
    job: {
      title: "Developer",
      department: "Engineering"
    }
  };
  
  // Extract title and department
  const {job: { title, department} } = employee;
  
  // Print all the variables
  console.log("Title:", title);
  console.log("Department:", department);
  