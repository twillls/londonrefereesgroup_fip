<?php
require_once '../load.php';

// Make sure the user is logged in
// Not logged in users cannot access dashboard page.
confirm_logged_in();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Admin Panel</title>
</head>
<body>
    <h2>Welcome to the Dashboard Page, <?php echo $_SESSION['user_name'];?>!</h2>
    <h3>You are in level: <?php echo getCurrentUserLevel();?>.</h3>

    <?php if(!empty($_SESSION['user_level'])):?>
        <a href="admin_createuser.php">Create User</a>
    <?php endif;?>
    <a href="admin_logout.php">Log Out</a>

</body>
</html>