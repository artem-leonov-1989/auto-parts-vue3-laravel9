<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SPAController extends Controller
{
    public function spa()
    {
        return view('welcome');
    }
}
