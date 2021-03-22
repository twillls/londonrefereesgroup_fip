<?php
require_once '../load.php';
$ip = $_SERVER['REMOTE_ADDR'];

if(isset($_SESSION['user_id'])){
    redirect_to("index.php");
}

if(isset($_POST['submit'])){
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if(!empty($username) && !empty($password)){
        $result = login($username, $password, $ip);
        $message = $result;
    } else {
        $message = 'Please fill out required fields';
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../public/css/main.css">

    <title>London Referees Group - Login</title>
</head>
<body>

<?php echo !empty($message)?$message:'';?>
    <div class="logo-container">
        <img class="admin-logo" src="../public/images/logo.png" alt="London Referees Group">
    </div>
    
    <div class="admin-container">
        <form class="admin-login" action="admin_login.php" method="post">
            <label class="hidden" for="username"></label>
            <input placeholder="username" class="admin-input" id="username" type="text" name="username" value="">
            
            <label class="hidden" for="password"></label>
            <input placeholder="password" class="admin-input" id="password" type="password" name="password" value="">
        
            <button type="submit" name="submit">Login</button>
        </form>
    </div>
</body>
</html>