<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/offer/{id}', 'offer');
Route::view('/about', 'page');
Route::view('/contact', 'page');
Route::view('/{path?}', 'app');
