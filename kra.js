// Toggle employer PIN field based on occupation
function toggleEmployerField() {
    const occupation = document.getElementById('occupation').value;
    const employerGroup = document.getElementById('employer-group');
    
    if (occupation === 'Employed' || occupation === 'Businessperson') {
        employerGroup.style.display = 'block';
    } else {
        employerGroup.style.display = 'none';
        document.getElementById('employer-pin').value = '';
    }
}

// Initialize the form
document.addEventListener('DOMContentLoaded', function() {
    // Handle Start Registration button click
    document.getElementById('start-registration').addEventListener('click', function() {
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('registration-form').classList.add('active');
        window.scrollTo(0, 0);
    });
    
    // Handle form submission
    document.getElementById('kra-form').addEventListener('submit', function(e) {
        // Validate file sizes
        const idUpload = document.getElementById('id-upload');
        const photoUpload = document.getElementById('photo-upload');
        const maxSize = 5 * 1024 * 1024; // 5MB
        
        if (idUpload.files[0] && idUpload.files[0].size > maxSize) {
            alert('National ID file is too large (max 5MB allowed)');
            e.preventDefault();
            return;
        }
        
        if (photoUpload.files[0] && photoUpload.files[0].size > maxSize) {
            alert('Passport photo file is too large (max 5MB allowed)');
            e.preventDefault();
            return;
        }
        
        // Show thank you message after submission
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('success')) {
            document.querySelector('form').style.display = 'none';
            document.getElementById('thank-you').style.display = 'block';
        }
    });
    
    // Initialize employer field visibility
    toggleEmployerField();
    
    // Add event listener to occupation dropdown
    document.getElementById('occupation').addEventListener('change', toggleEmployerField);
});