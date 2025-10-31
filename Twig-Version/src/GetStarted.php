<?php
// Define variables and set to empty string
$nameErr = $emailErr = $roleErr = ""; 
$name = $email = $role = "";

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // --- Name Validation ---
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = test_input($_POST["name"]);
        // Check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }
    
    // --- Email Validation ---
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        // Check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }
        
    // --- Role Validation ---
    if (empty($_POST["role"])) {
        $roleErr = "Role is required."; // required field
    } else {
        $role = test_input($_POST["role"]);
        
        // Check if the submitted role is one of the allowed values
        $allowed_roles = ['agent', 'admin', 'user'];
        if (!in_array($role, $allowed_roles)) {
            $roleErr = "Invalid role selected.";
        }
    }

}
?php>
