/* STATE */

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
];

// write function to render the initial freelancer
render();

function render() {
    // Render the freelancers
    const freelancer = document.querySelector(".freelancerName");
    const freelancerElements = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.classList.add(freelancers.name, freelancers.occupation, freelancers.price);
      return element;
    });
    freelancer.replaceChildren(...freelancerElements);
}
// write function to generate new random freelancer

function addFreelancer() {
    const freelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
    
    freelancers.push({name:, occupation:, price:});
  
    render();
  
        if(freelancers.length === freelancers.length){
          clearInterval(addFreelancerIntervalId)
        }
  }


// write function to calculate average price

// 


