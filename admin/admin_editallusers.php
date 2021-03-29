<?php
require_once '../load.php';
confirm_logged_in();

$getUsers = getAllUsers();

if(isset($_POST['submit'])){
    $data = array(
        'fname'=>trim($_POST['fname']),
        'username'=>trim($_POST['username']),
        'password'=>trim($_POST['password']),
        'email'=>trim($_POST['email']),
        'user_level'=>isCurrentUserAdminAbove()?trim($_POST['user_level']):'0',
        'id'=>trim($_POST['id'])
    );

    $message = editAllUsers($data);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../public/css/main.css">

    <title>Edit All Users</title>
</head>
<body>
    <main>
        <?php include "../public/templates/header.php"; ?>

        <h2 class="admin-content-title">Edit All Users</h2>
        <a id="edit-all-users-link" href="index.php">Back to Dashboard</a>
        <?php echo !empty($message)?$message:'';?>

        <!-- Query All Users and Show them Here -->
        <!-- Users will be shown in a list -->
        <!-- List will have button option to Edit User -->
        <!-- Which will redirect_to the edit user page -->
        <?php foreach ($getUsers as $user):?>
        <div>
            <form class="account-info-form" action="admin_editallusers.php" method="POST">
            <!-- Use POST - do not show sensitive information in URL -->
                <label for="id">ID</label> 
                <input id="id" type="text" name="id" value="<?php echo $user['user_id']; ?>">
                
                <label for="first_name">First Name</label> 
                <input id="first_name" type="text" name="fname" value="<?php echo $user['user_fname']; ?>">
                
                <label for="username">Username</label> 
                <input id="username" type="text" name="username" value="<?php echo $user['user_name']; ?>">
                
                <label for="password">Password</label> 
                <input id="password" type="text" name="password" value="<?php echo $user['user_pass']; ?>">
                <!-- change type="text" to type="password" for production to hide password when typed - better UX -->
                
                <label for="email">Email</label> 
                <input id="email" type="email" name="email" value="<?php echo $user['user_email']; ?>">
                
                <!-- Hide this from user level editor: they should not be able to self-promote -->
                
                <label for="user_level">User Level</label>
                    <select name="user_level" id="user_level"> 
                        <?php $user_level_map = getUserLevelMap();
                        foreach($user_level_map as $val => $label):?>
                            <option value="<?php echo $val;?>" <?php echo $val===(int)$user['user_level']?'selected':'';?> ><?php echo $label;?></option>
                        <?php endforeach;?>
                    </select>
                    
                
                <button type="submit" name="submit">Update User</button>

            </form>
        </div>

        <?php endforeach;?>
    </main>
    <script src="../public/js/main-admin.js"></script>

</body>
</html>