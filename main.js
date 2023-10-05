class Employee{
    // Initialize constructor of class Employee 
    constructor(name,position,picture){
        this.name = name;
        this.position = position;
        this.picture = picture;
        this.subordinates = [];
    }
    
    // Define a methods to add the Subordinates
    addSubordinates(employee){
        this.subordinates.push(employee); 
    }
    
    // print the organization chart with the respective hierarchy
    printChart(level = 0) {
    const indent = ' - '.repeat(level); 
    console.log(`${indent} (${this.picture}) ${this.name} (${this.position})`);
    // Print the hierarchy of subordinates recursively
    this.subordinates.forEach(subordinate => {
      subordinate.printChart(level + 1);
    });
  }
}

// Create instances of employees to represent the organization hierarchy
const CEO = new Employee("John",'CEO','CEO.jpg');
const CTO = new Employee("Lee","CTO","CTO.jpg");
const CFO =  new Employee("Chris","CFO","CFO.jpg");
const development_manager = new Employee("Amirul","Development Manager","dev_mag.jpg");
const finance_manager = new Employee("Halim","Finance Manager","fin.jpg");
const developer = new Employee("Naim","Developer","dev.jpg");
const accountant = new Employee("Lisa","Accountant","accountant.jpg");

// Define the hierarchy of the company by add subordinates(child) to the respective superiors(parent)
CEO.addSubordinates(CTO);
CEO.addSubordinates(CFO);
CTO.addSubordinates(development_manager);
CFO.addSubordinates(finance_manager);
development_manager.addSubordinates(developer);
finance_manager.addSubordinates(accountant);

// Print the hierarchy starting from the CEO because CEO is the root.
CEO.printChart();