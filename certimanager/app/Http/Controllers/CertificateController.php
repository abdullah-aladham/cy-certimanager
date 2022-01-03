<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Certificates;
use App\public\display;
use Carbon\Carbon;


class CertificateController extends Controller
{
    //
  public function display(){
    return view('display');
  }
  public function  fetch_expired_certificates()
  {
    $certificate=Certificates::get()
    ->where('Not_After','>',Carbon::now());
    
    return $certificate->toJson();
  }


  function Fetch_New_Certificates()
  {
    $certificate=Certificates::paginate()
    ->where(Carbon::now()->subDays(7),'<','Not_Before','<',Carbon::now());
    
    return $certificate->toJson();
  }
  public function getAllCertificates()
  {
    $certificate=Certificates::get();
    return $certificate->toJson();

   
  }

  public function getCertificatseNum(){
  $certificate=Certificates::count();
  return $certificate;
  
  }
public function getexpiredNum(){
  $certificate= Certificates::where('Not_After','>',Carbon::now());
  return $certificate->count();
}
public function getnewcertNum(){
  $certificate=Certificates::where(Carbon::now()->subDays(7),'<','Not_Before','<',Carbon::now());
  
  return $certificate->count();
}
}
