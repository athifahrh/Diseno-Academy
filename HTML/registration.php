<?php
$conn = mysqli_connect("localhost", "root", "", "athifah");

// SIGN UP
function registration($data)
{
    global $conn;
    $name = $data["name"];
    $email = $data["email"];
    $password = mysqli_real_escape_string($conn, $data["password"]);
    $password2 = mysqli_real_escape_string($conn, $data["password2"]);

    // Password Confirmation
    if ($password !== $password2) {
        echo "<script>
        alert('The password confirmation does not match');
        document.location.href='index.html';
        </script>";
        return false;
    }

    // Password Encription
    $password = password_hash($password, PASSWORD_DEFAULT);

    // Check Email
    $result = mysqli_query($conn, "SELECT email FROM registration WHERE email = '$email'");
    if (mysqli_fetch_assoc($result)) {
        echo "<script>
        alert('This email is already connected to an account');
        document.location.href='index.html';
        </script>";
        return false;
    }

    // Add New User to Database
    mysqli_query($conn, "INSERT INTO registration VALUES('', '$name', '$email', '$password')");

    return mysqli_affected_rows($conn);
}

if (isset($_POST["signup"])) {
    if (registration($_POST) > 0) {
        echo "<script>
        alert('Sign up successful');
        document.location.href='index.html';
        </script>";
    } else {
        echo mysqli_error($conn);
    }
}
// SIGN UP

// SIGN IN
if (isset($_POST['signin'])) {
    $signin_email = $_POST["email"];
    $singin_password = $_POST["password"];
    $signin_result = mysqli_query($conn, "SELECT * FROM registration WHERE email = '$signin_email'");

    if (mysqli_num_rows($signin_result) === 1) {
        $row = mysqli_fetch_assoc($signin_result);
        if (password_verify($singin_password, $row["password"])) {
            echo "<script>
            alert('Sign in successful');
            document.location.href='index.html';
            </script>";
            exit();
        }
    }

    $error = true;
    echo "<script>
    alert('Invalid email or password');
    document.location.href='index.html';
    </script>";
}
// SIGN IN