// function to run the code the user inputs
function runCode() {
    // get the code from the textarea for user input
    const code = document.getElementById('userCode').value;

    // try-catch block
    try {
        // attempt to execute the user's code
        eval(code);
        // if successful : display a success message in the output element
        document.getElementById('output').innerText = 'Code executed successfully.';
    } catch (e) {
        // if an error occurs: display the error message in the output element
        document.getElementById('output').innerText = `Error: ${e.message}`;
    }
}
