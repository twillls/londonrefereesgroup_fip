<?php

// This is a helper function that creates an array  
// with keys and values associated with the user_level
function getUserLevelMap()
{
    return array(
        '0'=>'Web Editor',
        '1'=>'Web Admin',
        '2'=>'Super Admin',
    );
}

function getCurrentUserLevel() 
{
    $user_level_map = getUserLevelMap();

    if(isset($_SESSION['user_level']) && array_key_exists($_SESSION['user_level'], $user_level_map)){
        return $user_level_map[$_SESSION['user_level']];
    } else {
        return "Unrecognized";
    }
}

function createUser($user_data)
{
    ## TESTING ONLY
    ## return var_export($user_data, true);
    ## When function runs, check parameters

    // Validate that username does not exist
    if(empty($user_data['username'])||isUsernameExists($user_data['username'])){
        return 'Username is invalid or already in use.';
    }

    ## 1. Run the proper query to insert user
    $pdo = Database::getInstance()->getConnection();

    $create_user_query = 'INSERT INTO tbl_user(user_fname, user_name, user_pass, user_email, user_level)';
    $create_user_query .= ' VALUES(:fname, :username, :password, :email, :user_level)'; // This is not executable, so SQL injection cannot happen
    
    $create_user_set = $pdo->prepare($create_user_query); // Prepare all the values to be inputted to DB
    $create_user_result = $create_user_set->execute( // Execute data and tell it where the true values are
        array(
            ':fname'=>$user_data['fname'],
            ':username'=>$user_data['username'],
            ':password'=>$user_data['password'],
            ':email'=>$user_data['email'],
            ':user_level'=>$user_data['user_level'],
        )
    );

    ## 2. Redirect to index.php if create user successful
    if($create_user_result){
        redirect_to('index.php');
    } else {
        return 'The User Could Not Be Created';
    }
}

function getSingleUser($user_id)
{
    ## Testing Line
    echo 'You are trying to fetch user: '.$user_id;
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = 'SELECT * FROM tbl_user WHERE user_id = :id';
    $get_user_set = $pdo->prepare($get_user_query);
    $result = $get_user_set->execute(
        array(
            ':id'=>$user_id
        )
    );

    if($result && $get_user_set->rowCount()){
        return $get_user_set;
    } else {
        return false;
    }
}

function editUser($user_data)
{
    if(empty($user_data['username'])||isUsernameExists($user_data['username'])){
        return 'Username is invalid or already in use.';
    }

    $pdo = Database::getInstance()->getConnection();
    $update_user_query = 'UPDATE tbl_user SET user_fname = :fname, user_name = :username, user_pass = :password, user_email = :email, user_level = :user_level WHERE user_id = :id';
    $update_user_set = $pdo->prepare($update_user_query);
    $update_user_result = $update_user_set->execute(
        array(
            ':fname'=>$user_data['fname'],
            ':username'=>$user_data['username'],
            ':password'=>$user_data['password'],
            ':email'=>$user_data['email'],
            ':user_level'=>$user_data['user_level'],
            ':id' => $user_data['id'],
        )
    );

    // Output will show SQL query in browser as it would attempt to update DB
    // The first part isn't as helpful...
    // look for "SENT SQL" - this is what you're trying to pass through
    $update_user_set->debugDumpParams();
    exit;

    if($update_user_result){
        // Update or FLUSH the session after editing user
        $_SESSION['user_name'] = $user_data['fname'];
        $_SESSION['user_level'] = $user_data['user_level'];
        redirect_to('index.php');
    } else {
        return "Guess you got canned..";
    }
}

function isCurrentUserAdminAbove()
{
    return !empty($_SESSION['user_level']);
}

function isUsernameExists($username)
{
    $pdo = Database::getInstance()->getConnection();
    $user_exists_query = 'SELECT COUNT(*) FROM tbl_user WHERE user_name = :username';
    $user_exists_set = $pdo->prepare($user_exists_query);
    $user_exists_result = $user_exists_set->execute(
        array(
            ':username' => $username
        )
    );

    return !$create_user_result || $user_exists_set->fetchColumn()>0;
}