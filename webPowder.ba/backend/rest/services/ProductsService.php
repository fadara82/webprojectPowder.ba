<?php


require_once __DIR__ ."/../dao/ProductsDao.php";

class ProductsService{
    private $product_dao;

   public function __construct(){
    $this->product_dao= new ProductsDao();
   }

   public function add_products($product){
    return $this->product_dao->add_products($product);
   }



   public function get_products(){
        return $this->product_dao->get_products();
    }

    
   public function get_protein(){
        return $this->product_dao->get_protein();
    }


    public function get_vitamini(){
        return $this->product_dao->get_vitamini();
    }
   
     public function get_creatine(){
        return $this->product_dao->get_creatine();
    }

    public function get_healthybars(){
        return $this->product_dao->get_healthybars();
    }

    public function get_byid($id){
        return $this->product_dao->get_byid($id);

    }
}