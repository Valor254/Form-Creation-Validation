// Define the async function to fetch user data
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    // Select the container for API data
    const dataContainer = document.getElementById('api-data');
  
    // Show a loading message initially
    dataContainer.innerHTML = 'Loading user data...';
  
    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
  
      // Check if the response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response JSON
      const users = await response.json();
  
      // Clear the loading message
      dataContainer.innerHTML = '';
  
      // Create a <ul> element to display the user list
      const userList = document.createElement('ul');
  
      // Loop through each user and create a list item
      users.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name; // Set the user's name as the text
        userList.appendChild(listItem); // Append the list item to the list
      });
  
      // Append the list to the data container
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle errors
      dataContainer.innerHTML = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
    }
  }
  
  // Run fetchUserData when the DOM has fully loaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
  