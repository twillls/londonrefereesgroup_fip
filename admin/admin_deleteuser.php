<?php
require_once '../load.php';
confirm_logged_in(true);

if(isset($_GET['id'])){
    $delete_user_id = $_GET['id'];

    $delete_result = deleteUser($delete_user_id);

    if(!$delete_result){
        $message = 'Failed to delete user';
    }
}

// Run a function to get all users and store it in a variable $users
$users = getAllUsers();

// If there are no users, set $message (displayed in browser)
// to an error message.
if(!$users){
    $message = 'Failed to get user list.';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete User</title>
</head>
<body>
    <h2>Delete User</h2>

    <?php echo !empty($message)?$message:'';?>

    <a href="index.php">Back to Dashboard</a>

    <table>
        <thead>
            <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>
            <?php while($user = $users->fetch(PDO::FETCH_ASSOC)): ?>
                <tr>
                    <td><?php echo $user['user_id'];?></td>
                    <td><?php echo $user['user_name'];?></td>
                    <td><?php echo $user['user_email'];?></td>
                    <td>
                        <a href="admin_deleteuser.php?id=<?php echo $user['user_id'];?>">Delete</a>
                    </td>

                </tr>
            <?php endwhile;?>
        </tbody>
    </table>


</body>
</html>
