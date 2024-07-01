// Function to show loading overlay
function showLoadingOverlay() {
    document.querySelector('.loading-overlay').style.display = 'block';
    document.querySelector('footer').display = 'block';
}

// Function to hide loading overlay
function hideLoadingOverlay() {
    document.querySelector('.loading-overlay').style.display = 'none';
    document.querySelector('footer').display = 'none';
}

// Function to ping the SVN API on initial page load
async function pingSVNAPI() {
    const backendIp = import.meta.env.BACKEND_IP;
    try {
        showLoadingOverlay();
        const response = await fetch(`http://${backendIp}:3000/ping`);
        if (response.ok) {
            // API is reachable, continue with normal page loading
            hideLoadingOverlay();
            console.log('SVN API is reachable');
        } else {
            // API is not reachable, redirect to error page
            console.error('SVN API is not reachable');
            window.location.href = '/error.html';
        }
    } catch (error) {
        // Error occurred while pinging API, redirect to error page
        console.error('Error pinging SVN API:', error);
        window.location.href = '/error.html';
    }
}

// Call pingSVNAPI function on initial page load
pingSVNAPI();