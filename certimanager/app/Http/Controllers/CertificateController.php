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
    $certificate=Certificates::paginate(2)
    ->where('Not_After','>',Carbon::now());
    
    return view('display' , compact('certificate'));
  }


  function Fetch_New_Certificates()
  {
    $certificate=Certificates::paginate()
    ->where(Carbon::now()->subDays(7),'<','Not_Before','<',Carbon::now());
    
    return view('display' , compact('certificate'));
  }
  public function getAllCertificates()
  {
    $certificate=Certificates::paginate();
    return view('display' , compact('certificate'));

  }
}
