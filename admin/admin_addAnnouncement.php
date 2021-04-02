<?php
require_once '../load.php';
confirm_logged_in();

if(isset($_POST['submit'])){
    $data = array(
        'title' => $_POST['title'],
        'body' => $_POST['body'],
    );

    $message = addAnnouncement($data);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../css/main.css">

    <title>Add Announcement</title>
</head>
<body>
    <main>
        <?php include "../templates/header.php"; ?>
        <h2 class="admin-content-title">Add Announcement</h2>

        <?php echo !empty($message)?$message:'';?>

        <form class="account-info-form" action="admin_addAnnouncement.php" method="POST">
            <label for="title">Title:</label>
            <input id="title" type="text" name="title" value="">

            <label for="body">Content:</label>
            <textarea name="body" id="body" cols="30" rows="10"></textarea>

            <button type="submit" name="submit">Submit</button>
            <a class="dashboard-link" href="index.php">Back to Dashboard</a>

        </form>
        <?php include "../templates/footer.php"; ?>

    </main>

    <?php include "../templates/scripts.php"; ?>

</body>
</html>