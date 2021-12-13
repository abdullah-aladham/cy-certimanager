<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CertificateController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/getCertificates',[CertificateController::class,'getAllCertificates']);
Route::get('/get-expired',[CertificateController::class,'fetch_expired_certificates']);

/*@AUTHOR:ABDULLAH ALADHAM
LINKEDIN:https://www.linkedin.com/in/abdullah-aladham/
freelancer:https://www.freelancer.com/u/Abdullahadham
*/
?>