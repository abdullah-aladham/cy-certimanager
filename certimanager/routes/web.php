<?php

use Illuminate\Support\Facades\Route;


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

Route::get('/', function () {
    return view('welcome');
});
Route::get('display-certificates','App\Http\Controllers\CertificateController@getAllCertificates');
Route::get('display-expired','App\Http\Controllers\CertificateController@fetch_expired_certificates');
Route::get('display-new-certificates','App\Http\Controllers\CertificateController@Fetch_New_Certificates');


