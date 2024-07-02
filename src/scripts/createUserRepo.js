// Function to show loading overlay
function showLoadingOverlay() {
    document.querySelector('.loading-overlay').style.display = 'block';
}

// Function to hide loading overlay
function hideLoadingOverlay() {
    document.querySelector('.loading-overlay').style.display = 'none';
}

// Function to create SVN repository
async function createUserRepo() {
    const year = new Date().getFullYear();
    const repoName = document.getElementById('repoName').value;
    const fileLockCheckbox = document.getElementById('fileLock');
    const fileLock = fileLockCheckbox.checked;
    const backendIp = import.meta.env.VITE_BACKEND_IP;

    const usersData = await fetch('/users.json').then(response => response.json());

    const selectedUsers = Array.from(document.querySelectorAll('input[type="checkbox"]:checked:not(#fileLock)'))
        .map(checkbox => {
            const username = checkbox.value;
            const user = usersData.users.find(user => user.username === username);
            return {
                username: username,
                password: user ? user.password : '',
            };
        });

    try {
        const response = await fetch(`http://${backendIp}:3000/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ repoName: repoName, users: selectedUsers, fileLock: fileLock}),
        });

        if (response.ok) {
            hideLoadingOverlay();
            window.location.href = 'success.html';
        } else {
            const errorMessage = await response.text();
            hideLoadingOverlay();
            window.location.href = 'error.html?message=' + errorMessage;
        }
    } catch (error) {
        console.error('Error creating SVN repository:', error);
        alert('An error occurred while creating the SVN repository.');
        hideLoadingOverlay();
    }
}

// Event listener for submit button
document.getElementById('submit').addEventListener('click', () => {
    showLoadingOverlay();
    createUserRepo();
});
