        function validateForm() {
            var username = document.forms["myForm"]["username"].value;
            var password = document.forms["myForm"]["password"].value;
            var confirmpassword = document.forms["myForm"]["confirmpassword"].value;
            var phonenumber = document.forms["myForm"]["phonenumber"].value;
            var email = document.forms["myForm"]["email"].value;

            if (username == "") {
                alert("Username must be filled out");
                return false;
            }
            if (password == "") {
                alert("Password must be filled out");
                return false;
            }
            if (password !== confirmpassword) {
                alert("Passwords do not match");
                return false;
            }
            var phonePattern = /^\d{10}$/;
            if (!phonePattern.test(phonenumber)) {
                alert("Phone number must be 10 digits");
                return false;
            }
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Invalid email format");
                return false;
            }
            alert("Form submitted successfully!");
            return true;
        }