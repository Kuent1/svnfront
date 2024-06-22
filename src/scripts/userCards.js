const userCards = () => {
    // Fetch usernames and passwords from a separate JSON file
    fetch('src/data/users.json')
    .then(response => response.json())
    .then(data => {
        const userCardsContainer = document.getElementById('userCards');
        
        // Iterate over the users and create user cards with checkboxes and password inputs
        data.users.forEach(user => {
            const { username } = user;

            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = username;
            checkbox.id = `user-${username}`;

            const label = document.createElement('label');
            label.htmlFor = `user-${username}`;
            label.textContent = username;

            const passwordInputContainer = document.createElement('div');
            passwordInputContainer.classList.add('password-input-container');

            const passwordInput = document.createElement('input');
            passwordInput.type = 'password'; // Set input type to password
            passwordInput.placeholder = 'Mot de passe';
            passwordInput.id = `password-${username}`;

            // Add event listener to checkbox to clear password input when unchecked
            checkbox.addEventListener('change', () => {
                passwordInput.value = ''; // Clear the password value when unchecked
            });

            // Append elements to user card
            userCard.appendChild(checkbox);
            userCard.appendChild(label);
            userCard.appendChild(passwordInputContainer);

            // Append user card to the container
            userCardsContainer.appendChild(userCard);
        });
    })
    .catch(error => console.error('Error fetching usernames and passwords:', error));
}

userCards();
