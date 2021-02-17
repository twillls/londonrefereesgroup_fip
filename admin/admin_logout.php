<?php
require_once '../load.php';

// Check if logged in
// If someone is not logged in, they can't be logged out.
confirm_logged_in();

logout();