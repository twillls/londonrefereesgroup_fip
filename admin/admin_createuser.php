<?php
require_once '../load.php';
confirm_logged_in(true);


if(isset($_POST['submit'])){
    $data = array(
        'fname'=>trim($_POST['fname']),
        'username'=>trim($_POST['username']),
        'password'=>trim($_POST['password']),
        'email'=>trim($_POST['email']),
        'user_level'=>trim($_POST['user_level']),
    );

    $message = createUser($data);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../css/main.css">

    <title>Create A User</title>
</head>
<body>
    <main>
        <?php include "../templates/header.php"; ?>

        <h2 class="admin-content-title">Create A User</h2>


        <?php echo !empty($message)?$message:'';?>
        <form class="account-info-form" action="admin_createuser.php" method="POST">
        <!-- Use POST - do not show sensitive information in URL -->
            <label for="first_name">First Name</label> 
            <input id="first_name" type="text" name="fname" value="">

            <label for="username">Username</label> 
            <input id="username" type="text" name="username" value="">

            <label for="password">Password</label> 
            <input id="password" type="text" name="password" value="">
            <!-- change type="text" to type="password" for production to hide password when typed - better UX -->

            <label for="email">Email</label> 
            <input id="email" type="email" name="email" value="">


            <label for="user_level">User Level</label>
            <select name="user_level" id="user_level"> 

                <?php $user_level_map = getUserLevelMap();
                foreach($user_level_map as $val => $label):?>
                    <option value="<?php echo $val;?>"><?php echo $label;?></option>
                <?php endforeach;?>
                
            </select>

            <button type="submit" name="submit">Create User</button>
            <a class="dashboard-link" href="index.php">Back to Dashboard</a>

        </form>
        <?php include "../templates/footer.php"; ?>

    </main>
    <?php include "../templates/scripts.php"; ?>

</body>
</html>