<?php

namespace App\Http\Controllers;

use App\SalutationCode;
use Illuminate\Http\Request;

class SalutationCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(SalutationCode::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
            ->search(request('search'))
            ->paginate());
    }

    public function search()
    {
        return response()->json(SalutationCode::search(request('search'))->get());
    }
    public function store(Request $request)
    {
        $input = $request->validate([
            'description' => 'required',
        ]);
        $salutationCode = new SalutationCode;
        $salutationCode->description = $input['description'];
        $salutationCode->save();
        return response()->json($salutationCode);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SalutationCode  $salutationCode
     * @return \Illuminate\Http\Response
     */
    public function show(SalutationCode $salutationCode)
    {
        return response()->json($salutationCode);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SalutationCode  $salutationCode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SalutationCode $salutationCode)
    {
        $input = $request->validate([
            'description' => 'required',
        ]);
        $salutationCode->description = $input['description'];
        $salutationCode->save();
        return response()->json($salutationCode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SalutationCode  $salutationCode
     * @return \Illuminate\Http\Response
     */
    public function destroy(SalutationCode $salutationCode)
    {
        return response()->json($salutationCode->delete());
    }
}
