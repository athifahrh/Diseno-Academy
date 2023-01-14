<?php
$conn = mysqli_connect("localhost", "root", "", "athifah");

function cart($data)
{
    global $conn;
    $email = $data["email"];
    $phone = $data["phone"];
    $class = $data["class"];
    $level = $data["level"];
    $payment_method = $data["payment_method"];

    mysqli_query($conn, "INSERT INTO cart VALUES('$email', '$phone', '$class', '$level', '$payment_method')");

    return mysqli_affected_rows($conn);
}

if (isset($_POST["submit"])) {
    if (cart($_POST) > 0) {
        echo "<script>
        alert('Thank you for your purchase.');
        document.location.href='index.html';
        </script>";
    } else {
        echo mysqli_error($conn);
    }
}
