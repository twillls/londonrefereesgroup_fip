<header class="admin-dash-header">
    <?php if(isCurrentUserAdminAbove()):?>
        <!-- if user isn't admin, don't show admin dropdown -->
        <button class="admin-dropdown">admin</button>
    <?php endif;?>

    <nav class="admin-drop-nav hidden">
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="admin_addAnnouncement.php">Add Announcement</a></li>
            <li><a href="admin_createuser.php">Create User</a></li>
            <li><a href="admin_editallusers.php">Edit All Users</a></li>
            <li><a href="admin_deleteuser.php">Delete User</a></li>
            <li><a href="admin_edituser.php">Account Settings</a></li>

            <li><button class="admin-drop-close">close</button></li>
            <!-- <li><a href="admin_edituser.php">Edit User</a></li> --> <!-- Edit User page is not needed as account details are to be updated on index -->
        </ul>
    </nav>        

    <div class="logo-container">
        <a href="index.php">
            <img class="admin-logo" src="../images/logo.png" alt="London Referees Group">
        </a>
    </div>

    <button class="admin-nav-logout">
        <a href="admin_logout.php">logout</a>
    </button>
</header>