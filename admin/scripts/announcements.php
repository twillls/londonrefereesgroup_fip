<?php
function addAnnouncement($announcement)
{
    ## DEBUGGING ONLY
    ##return 'You are about to add an announcement'.PHP_EOL.var_export($announcement,true);
    ## END DEBUGGING

    try{
        # 1. Connect to Database
        $pdo = Database::getInstance()->getConnection();

        ## No Validation for file type, no files being uploaded. 
        ## Input is text only

        # 2. Insert into Database (tbl_announcements)
        $insert_announcement_query = 'INSERT INTO tbl_announcements(announcement_title, announcement_body)';
        $insert_announcement_query .= ' VALUES(:title, :body)';
        $insert_announcement = $pdo->prepare($insert_announcement_query);
        $insert_announcement_result = $insert_announcement->execute(
            array(
                ':title'=>$announcement['title'],
                ':body'=>$announcement['body'],
            )
        );

        ## Only one table to insert into, no linking tables

        # 3. Redirect to Dashboard
        redirect_to('index.php');

    } catch(Exception $e){
        # Return error message
        $error = $e->getMessage();
        return $error;
    }
}