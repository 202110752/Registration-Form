const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // You can handle the form submission here, for example, by sending the data to a server.
    // You can access the form fields like this:
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contactNumber").value;

    // Now you can send this data to your server or perform other actions as needed.
    
    // Display an alert when the form is submitted.
    alert("Registration Successful!");
    alert(`Welcome! ${name}`);
});
