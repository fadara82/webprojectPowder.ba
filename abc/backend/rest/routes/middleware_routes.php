<?php

use Firebase\JWT\JWT;
use Firebase\JWT\key;

Flight::route('/*',function() {
    if(strpos(Flight::request()->url,'auth/login')===0 ||
       strpos(Flight::request()->url,'auth/register')===0)
       {
        return TRUE;
       } else {
   try {
            $token = Flight::request()->getHeader("Authentication");
            if(!$token)
                Flight::halt(401, "Missing authentication header");

            $decoded_token = JWT::decode($token, new Key(JWT_SECRET, 'HS256'));

            Flight::set('user',$decoded_token);
            Flight::set('jwt_token',$token);

            Flight::json([
                'jwt_decoded' => $decoded_token,
                'user' => $decoded_token->user
            ]);
        } catch (\Exception $e) {
            Flight::halt(401, $e->getMessage());
        }
       }
 
    });
