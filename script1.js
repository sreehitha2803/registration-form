$(document).ready(function() {
    // Handle form submission
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val()
        };

        // Send data to PHP backend using jQuery AJAX
        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: formData,
            success: function(response) {
                // Display the formatted response in the output section
                $('#output').html(response);
            },
            error: function() {
                alert('Error submitting the form. Please try again.');
            }
        });
    });
});
