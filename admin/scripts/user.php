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

    ## TO DO:
    ## 1. Run proper SQL query to insert user information to DB
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

    ## 2. Redirect to index.php if create user successful, maybe with message ?

    if($create_user_result){
        redirect_to('index.php');
    } else {
        return 'The User Could Not Be Created';
    }
}