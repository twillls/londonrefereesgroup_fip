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

$getAnnouncements = getAllAnnouncements();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../public/css/main.css">

    <title>London Referees Group - Admin Dashboard</title>
</head>
<body>
<main id="app">
    <?php include "../public/templates/header.php"; ?>
    
    <section>
        <h1 class="hidden">Announcements</h1>
        <h2 class="admin-content-title">Announcements</h2>

        <?php foreach ($getAnnouncements as $announcement):?>
            <div class="announcement-wrapper">
                <h2><?php echo $announcement['announcement_title'];?></h2>
                <p>
                    <?php echo $announcement['announcement_body'];?>
                </p>
            </div>
        <?php endforeach;?>

        
    </section>
    </main>
    <script src="../public/js/main-admin.js"></script>

</body>
</html>