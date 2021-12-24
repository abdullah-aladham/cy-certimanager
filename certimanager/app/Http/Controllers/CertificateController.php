<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Certificates;
use App\public\display;
use Carbon\Carbon;


class CertificateController extends Controller
{
    //

  public function  fetch_expired_certificates()
  {
    $certificate=Certificates::get()
    ->where('Not_After','>',Carbon::now());
    
    return view('display' , compact('certificate'));
  }


  function Fetch_New_Certificates()
  {
    $certificate=Certificates::paginate()
    ->where(Carbon::now()->subDays(7),'<','Not_Before','<',Carbon::now());
    
    return response()
            ->json(['name' => 'Abigail', 'state' => 'CA'])
            ->withCallback($certificate->input('callback'));
  }
  public function getAllCertificates()
  {
    $certificate=Certificates::get();
    return response()
    ->json([
      'id' => 'Abigail', 
      'Logged_At' => 'CA',
      'Common_Name'=>'',
      'Matching_Identities'=>'',
      'Issuer_Name'=>'',
      'serial_number'=>'',
      'Not_Before'=>'',
      'Not_After'=>'',
      'Issuer_id'=>''
      ])
    ->withCallback($certificate->input('callback'));
  }

  public function getCertificatseNum(){
  $certificate=Certificates::count();
  return $certificate;
  
  }
public function getexpiredNum(){
  $certificate=Certificates::count()
  ->where(Carbon::now(),'>','Not_After');
  return $certificate;
}
public function getnewcertNum(){
  $certificate=Certificates::count()
  ->where(Carbon::now()->subDays(7),'<','Not_Before','<',Carbon::now());
}
}
