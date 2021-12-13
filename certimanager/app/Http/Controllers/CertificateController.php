<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Certificates;
use App\public\display;
class CertificateController extends Controller
{
    //

  public function  fetch_expired_certificates()
  {
    $certificate=Certificates::paginate(2);
    return view('display' , compact('certificate'));
  }


  function near_Expire_Certificates()
  {

  }
  public function getAllCertificates()
  {
    $certificate=Certificates::paginate(2);
    return view('display' , compact('certificate'));

  }
}
