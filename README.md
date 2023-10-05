# Organizational Chart Generator

The following JavaScript code demonstrates the use of Generic Trees (N-ary Trees) to showcase the implementation of an Organizational Chart during an interview.

## Methods
### constructor(name, position, picture):

 Initializes an Employee object with the provided name, position, and picture. The subordinates array is initialized as an empty array.
 
### addSubordinates(employee):
 Adds a subordinate employee to the current employee's list of subordinates.
### printChart(level = 0): 
Recursively prints the organizational chart, starting from the current employee. It includes the employee's name, position, and picture, with indentation to represent the hierarchy.


## Example Hierarchy in Organizational Chart
In the provided example, an organizational hierarchy is created as follows based on the requirements:

(CEO.jpg) John (CEO)

 -  (CTO.jpg) Lee (CTO)

 -  -  (dev_mag.jpg) Amirul (Development Manager)

 -  -  -  (dev.jpg) Naim (Developer)

 -  (CFO.jpg) Chris (CFO)

 -  -  (fin.jpg) Halim (Finance Manager)

 -  -  -  (accountant.jpg) Lisa (Accountant)
