fetch('http://localhost:3000/monsters?_limit=50')
  .then(response => response.json())
  .then(data => {
    // Update the DOM with the monster data
    console.log(data); // Just to check the response in the console
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });

  //GET request to the API:

fetch('http://localhost:3000/monsters?_limit=50')
  .then(response => response.json())
  .then(data => {
    // Code to update the DOM with the list of monsters
  })
  .catch(error => {
    // Handle any error that occurs during the request
  });
  fetch('http://localhost:3000/monsters?_limit=50')
  .then(response => response.json())
  .then(data => {
    const monsterContainer = document.getElementById('monster-container');

    // Clear any existing content in the monster container
    monsterContainer.innerHTML = '';

    // Loop through the monster data and create HTML elements for each monster
    data.forEach(monster => {
      const monsterCard = document.createElement('div');
      monsterCard.className = 'monster-card';

      const name = document.createElement('h3');
      name.textContent = monster.name;

      const age = document.createElement('p');
      age.textContent = `Age: ${monster.age}`;

      const description = document.createElement('p');
      description.textContent = monster.description;

      monsterCard.appendChild(name);
      monsterCard.appendChild(age);
      monsterCard.appendChild(description);

      monsterContainer.appendChild(monsterCard);
    });
  })
  .catch(error => {
    // Handle any error that occurs during the request
    console.error(error);
  });

