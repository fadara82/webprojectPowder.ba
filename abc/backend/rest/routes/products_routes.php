<?php

require_once __DIR__ . "/../services/ProductsService.php";

header("Access-Control-Allow-Origin: *");

Flight::set('products_service', new ProductsService());

Flight::route('POST /products', function () {
    $payload = Flight::request()->data;
  

    /**
     * @OA\Post(
     *      path="/products/",
     *      tags={"products"},
     *      summary="Add products data to the database",
     *      @OA\Response(
     *           response=200,
     *           description="Products Data"
     *      ),
     *      @OA\RequestBody(
     *          description="Products data payload",
     *          @OA\JsonContent(
     *              required={"productImg","productName","flavour","price","description"},
     *              @OA\Property(property="id", type="string", example="1", description="Product ID"),
     *              @OA\Property(property="productImg", type="string", example="https://ba.proteini.si/image/medium/9782", description="Product Img Link"),
     *              @OA\Property(property="productName", type="string", example="Battery Whey Protein",description="Name of Product"),
     *              @OA\Property(property="flavour", type="string", example="Vanilla",description="Flavour of Product"),
     *              @OA\Property(property="price", type="string", example="125",description="Price of Product"),
     *              @OA\Property(property="description", type="string", example="Jako odlican produkt",description="Description of Product"),
     *              @OA\Property(property="category", type="string", example="Protein",description="Category of Product"),

     *          )
     *      )
     * )
     */
       
   Flight::get("products_service")->add_products($payload);
});


Flight::route('GET /products/get', function () {
        /**
 * @OA\Get(
 *      path="/products/get",
 *      tags={"products"},
 *      summary="Get all products",
 *      @OA\Response(
 *           response=200,
 *           description="Array of all doctors in the databases"
 *      )
 * )
 */
    
        $data = Flight::get("products_service")->get_products();
        Flight::json($data, 200);
    
});

Flight::route('GET /products/get/protein', function () {


        /**
 * @OA\Get(
 *      path="/products/get/protein",
 *      tags={"products"},
 *      summary="Get products that are protein",
 *      @OA\Response(
 *           response=200,
 *           description="Array of all products that are Protein in the databases"
 *      )
 * )
 * */
        $data = Flight::get("products_service")->get_protein();
        Flight::json($data, 200);
    
});

Flight::route('GET /products/get/vitamini', function () {


        /**
 * @OA\Get(
 *      path="/products/get/vitamini",
 *      tags={"products"},
 *      summary="Get products that are Vitamins",
 *      @OA\Response(
 *           response=200,
 *           description="Array of all products that are Vitamins in the databases"
 *      )
 * )
 * */


        $data = Flight::get("products_service")->get_vitamini();
        Flight::json($data, 200);
    
});

Flight::route('GET /products/get/creatine', function () {


        /**
 * @OA\Get(
 *      path="/products/get/creatine",
 *      tags={"products"},
 *      summary="Get products that are Creatine",
 *      @OA\Response(
 *           response=200,
 *           description="Array of all products that are Creatine in the databases"
 *      )*
 * )
 * */


        $data = Flight::get("products_service")->get_creatine();
        Flight::json($data, 200);
    
});


Flight::route('GET /products/get/healthybar', function () {


        /**
 * @OA\Get(
 *      path="/products/get/healthybar",
 *      tags={"products"},
 *      summary="Get products that are Healthy Bars",
 *      @OA\Response(
 *           response=200,
 *           description="Array of all products that are Healthy Bars in the databases"
 *      )
 * )
 * */


        $data = Flight::get("products_service")->get_healthybars();
        Flight::json($data, 200);
    
});


Flight::route('GET /products/get/byid', function () {


   
 /**
     * @OA\Get(
     *      path="/products/get/byid",
     *      tags={"products"},
     *      summary="Get product by id",
     *      @OA\Response(
     *           response=200,
     *           description="Product data, or false if product does not exist"
     *      ),
     *      @OA\Parameter(@OA\Schema(type="number"), in="query", name="id", example="1", description="Product ID")
     * )
     */


    $payload = Flight::request()->query['id'];
    $data = Flight::get("products_service")->get_byid($payload);
        Flight::json($data, 200);
    
});


