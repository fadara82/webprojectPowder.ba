<?php

require_once __DIR__ . '/../dao/OrdersDao.php';

class OrderService {
    private $orders_dao;

    public function __construct() {
        $this->orders_dao = new OrdersDao();
    }


    public function add_orders($order){

        return $this->orders_dao->add_orders($order);
    }
    
    public function get_orders(){

        return $this->orders_dao->get_orders();
    }
 }
?>
