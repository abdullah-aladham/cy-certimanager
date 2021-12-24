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
Route::get('display-all','App\Http\Controllers\CertificateController@getAllCertificates');
Route::get('display-expired','App\Http\Controllers\CertificateController@fetch_expired_certificates');
Route::get('display-new-certificates','App\Http\Controllers\CertificateController@Fetch_New_Certificates');
Route::get('get-expired-num','App\Http\Controllers\CertificateController@getexpiredNum'); 
Route::get('get-new-num','App\Http\Controllers\CertificateController@getnewcertNum'); 
Route::get('get-all-num','App\Http\Controllers\CertificateController@getCertificatseNum');

/*@AUTHOR:ABDULLAH ALADHAM
LINKEDIN:https://www.linkedin.com/in/abdullah-aladham/
freelancer:https://www.freelancer.com/u/Abdullahadham
*/