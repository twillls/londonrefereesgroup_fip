<?php
define('ABSPATH', __DIR__);
define('ADMIN_PATH', ABSPATH.'/admin');
define('ADMIN_SCRIPT_PATH', ADMIN_PATH.'/scripts');

# This is to display errors and is for debugging ONLY
# Turn off for production
ini_set('display_errors', 1);

# Start session
session_start();

# Scripts
require_once ABSPATH.'/config/database.php';
require_once ADMIN_SCRIPT_PATH.'/functions.php';
require_once ADMIN_SCRIPT_PATH.'/login.php';
require_once ADMIN_SCRIPT_PATH.'/user.php';
require_once ADMIN_SCRIPT_PATH.'/announcements.php';