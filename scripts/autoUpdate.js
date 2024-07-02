const userInput = document.getElementById('repoName');
const display = document.getElementById('display');
const currentYear = new Date().getFullYear()

userInput.addEventListener('input', (event) => {
    const value = event.target.value;

    const validateRepoName = repoName => {
        const uriRegex = /^[\w\-._~:/?#\[\]@!$&'()*+,;=%]+$/;
        return uriRegex.test(repoName);
    } 
    if (validateRepoName(value)) {
        display.textContent = `svn://svn.kuentin.me/${currentYear}_${value}`
    } else if (!value) {
        display.textContent = `svn://svn.kuentin.me/${currentYear}_`
    } else {
        display.textContent = "Le nom du dépôt ne peut contenir que des caractères alphanumériques ainsi que les caractères suivants: \r\n - . _ ~ : / ? # [ ] @ ! $ & ' ( ) * + , ; = %"
    }
});