<?php


require_once __DIR__ . "/BaseDao.php";

class UsersDao extends BaseDao{
    public function __construct()
    {
        parent :: __construct("users");
        }

        public function add_users($user){

            $sql="INSERT INTO users(first_name,last_name,email,mobile_number,password)
            VALUES(:first_name,:last_name,:email,:mobile_number,:password)";


            try{
                $statement=$this->connection->prepare($sql);
                $statement->bindValue(':first_name', $user['fname']);      
                $statement->bindValue(':last_name', $user['lname']);       
                $statement->bindValue(':email', $user['email']);                
                $statement->bindValue(':mobile_number', $user['mobilenumber']);
                $statement->bindValue(':password', $user['password']);

                $statement->execute();
                return $user;



            }
            catch (PDOException $e) {
            error_log('Error adding order: ' . $e->getMessage());
            throw new Exception('Failed to add order');
        }



        }


         public function get_users(){
    $sql = "SELECT * FROM users";
    try {
        $statement = $this->connection->prepare($sql);
        
        $statement->execute();
        
        $users = $statement->fetchAll(PDO::FETCH_ASSOC);
        
        return $users;
    } catch (PDOException $e) {
        error_log('Error getting orders: ' . $e->getMessage());
        throw new Exception('Failed to get orders');
    }
}

        
}
