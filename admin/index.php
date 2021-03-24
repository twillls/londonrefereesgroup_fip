<?php
require_once '../load.php';
confirm_logged_in(); // Ensures only logged in users can access dashboard page

$id = $_SESSION['user_id'];
$current_user = getSingleUser($id);

if(empty($current_user)){
    $message = 'Failed to get user info';
}

// Double check here that user level editor cannot UPgrade their own user level
// They should only be able to downgrade
if(isset($_POST['submit'])){
    $data = array(
        'fname'=>trim($_POST['fname']),
        'username'=>trim($_POST['username']),
        'password'=>trim($_POST['password']),
        'email'=>trim($_POST['email']),
        'user_level'=>isCurrentUserAdminAbove()?trim($_POST['user_level']):'0',
        'id'=>$id,
    );

    $message = editUser($data);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../public/css/main.css">

    <title>London Referees Group - Admin Dashboard</title>
</head>
<body class="admin-dashboard">

    <header class="admin-dash-header">
        <button class="admin-dropdown">admin</button>

        <nav class="admin-drop-nav hidden">
            <ul>
                <li><?php if(isCurrentUserAdminAbove()):?>
                    <a href="admin_createuser.php">Create User</a>
                    <a href="admin_editallusers.php">Edit All Users</a>    
                    <a href="admin_deleteuser.php">Delete User</a>

                    <?php endif;?></li>
                <!-- <li><a href="admin_edituser.php">Edit User</a></li> --> <!-- Edit User page is not needed as account details are to be updated on index -->
            </ul>
        </nav>        

        <div class="logo-container">
            <a href="index.php"><img class="admin-logo" src="../public/images/logo.png" alt="London Referees Group"></a>
        </div>


        <button class="admin-nav-logout">
            <a href="admin_logout.php">logout</a>
        </button>
    </header>

    <h2>Admin Dashboard - <?php echo $_SESSION['user_name'];?></h2>
    <h3>You are a: <?php echo getCurrentUserLevel();?>.</h3>

    <section>
        <h1 class="hidden">Account Information - Update</h1>
        <h2>Account Info</h2>

        <?php if (!empty($current_user)): ?>

            <form action="index.php" method="POST">
            <!-- Use POST - do not show sensitive information in URL -->
            <?php while($user_info = $current_user->fetch(PDO::FETCH_ASSOC)):?>
                <label for="first_name">First Name</label> 
                <input id="first_name" type="text" name="fname" value="<?php echo $user_info['user_fname']; ?>">

                <br><br>

                <label for="username">Username</label> 
                <input id="username" type="text" name="username" value="<?php echo $user_info['user_name']; ?>">
                <br><br>

                <label for="password">Password</label> 
                <input id="password" type="text" name="password" value="<?php echo $user_info['user_pass']; ?>">
                <!-- change type="text" to type="password" for production to hide password when typed - better UX -->
                <br><br>

                <label for="email">Email</label> 
                <input id="email" type="email" name="email" value="<?php echo $user_info['user_email']; ?>">
                <br><br>

                <!-- This dropdown should only be available for user level admin -->
                <?php if(isCurrentUserAdminAbove()):?>
                    <label for="user_level">User Level</label>
                    <select name="user_level" id="user_level"> 

                    <?php $user_level_map = getUserLevelMap();
                        foreach($user_level_map as $val => $label):?>
                        <option value="<?php echo $val; ?>" <?php echo $val===(int)$user_info['user_level']?'selected':'';?> ><?php echo $label;?>
                        </option>
                    <?php endforeach;?>

                    </select>

                <?php endif;?>

                <br><br>
                
                <button type="submit" name="submit">Update User</button>
            
            <?php endwhile;?>
    
        </form>
        <?php endif;?>
    </section>

    <script src="../public/js/main.js"></script>

</body>
</html>