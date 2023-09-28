// at the top add the average which updates with every new freelancer
// interval setting every 5000ms a new freelancer is added
const addFreelancerIntervalId = setInterval(addFreelancer, 5000);

// create an array of freelancers
const freelancers = [
    { name: "Alice P.", occupation: "Writer", price: 30 },
    { name: "Bob W.", occupation: "Teacher", price: 50 },
    { name: "Carol D.", occupation: "Programmer", price: 70 },
    { name: "Courtney S.", occupation: "Integration Consultant", price: 80 },
    { name: "Nicholas K.", occupation: "Intelligence Analyst", price: 80 },
    { name: "Mitchell R.", occupation: "Fire Science Educator", price: 70 },
    { name: "Karen G.", occupation: "Curriculum Writer", price: 60 },
    { name: "James M.", occupation: "HVAC Designer", price: 70 },
    { name: "Scott M.", occupation: "Security Officer", price: 60 },
]

// 