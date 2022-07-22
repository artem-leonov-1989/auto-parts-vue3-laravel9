<?php

namespace App\Http\Controllers;

use App\Http\Resources\PartResource;
use App\Models\Part;
use Illuminate\Http\Request;

class PartController extends Controller
{

    public function index()
    {
        return PartResource::collection(Part::all());
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        return new PartResource(Part::find($id));
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
