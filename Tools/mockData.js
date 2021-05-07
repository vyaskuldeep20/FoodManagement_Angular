const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: 'john.doe@test.com',
    password:'password1',
    createdOn:'2021-03-28'
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Skeet",
    email: 'John.Skeet@test.com',
    password:'password1'  ,
    createdOn:'2021-03-28'
  },
  {
    id: 3,
    firstName: "Mark",
    lastName: "Seeman",
    email: 'mark.seeman@test.com',
    password:'password1',
    createdOn:'2021-03-28'
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Martin",
    email: 'bob.martin@test.com',
    password:'password1',
    createdOn:'2021-03-28'
  },
  {
    id: 5,
    firstName: "Kuldeep",
    lastName: "Vyas",
    email: 'kuldeep.vyas@test.com',
    password:'password1',
    createdOn:'2021-03-28'
  }
];

const projects = [
  {id:1,name:'Tomcat',detail:'Socgen Monitoring App',createdOn:'2021-03-28'},
  {id:2,name:'BVT',detail:'Branch Manager Visit Management Tool',createdOn:'2021-03-27'},
  {id:3,name:'Mobile Health',detail:'Software patch info tool',createdOn:'2021-03-26'},
  {id:4,name:'XL-Catlin',detail:'Insurance Tool to create transaction',createdOn:'2021-03-25'},
  {id:5,name:'JTransfer',detail:'Tool to apply for transfer to jaipur',createdOn:'2019-06-25'},
  {id:6,name:'CabManagementTool',detail:'Cab management Tool',createdOn:'2021-02-21'}
];

const tasks=[
    {id:1,name:'Task 1',detail:'This is test Task 1',projectId:2,assignedToUser:5,status:4,createdOn:'2021-03-28'},
    {id:2,name:'Task 2',detail:'This is test Task 2',projectId:4,assignedToUser:2,status:4,createdOn:'2021-03-27'},
    {id:3,name:'Task 3',detail:'This is test Task 3',projectId:6,assignedToUser:3,status:3,createdOn:'2021-03-26'},
    {id:4,name:'Task 4',detail:'This is test Task 14',projectId:1,assignedToUser:1,status:2,createdOn:'2021-03-25'},
    {id:5,name:'Task 5',detail:'This is test Task 7',projectId:3,assignedToUser:2,status:5,createdOn:'2021-03-25'},
    {id:6,name:'Task 6',detail:'This is test Task 8',projectId:5,assignedToUser:4,status:6,createdOn:'2021-03-25'}
];

const statuses=[
  { id :1 , status: 'Pending'},
  { id :2 , status: 'In Business Specification'},
  { id :3 , status: 'Approved'},
  { id :4 , status: 'Dev Implementation'},
  { id :5 , status: 'Testing'},
  { id :6 , status: 'Done'},
]

const newUser = {
  Id: null,
  firstName: "",
  lastName: "",
  email: "",
  password:""
};
const newProject ={ 
  Id: null,
  name: "",
  detail: "",
  createdOn: ""
};
const newTask = {
  Id: null,
  name: "",
  detail: "",
  assignedToUser:"",
  status:"",
  CreatedOn: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newUser,
  newProject,
  newTask,
  users,
  projects,
  tasks,
  statuses
};
