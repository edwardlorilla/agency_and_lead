<?php

namespace App\Http\Controllers;

use App\LeadStatusCode;
use Illuminate\Http\Request;

class LeadStatusCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(LeadStatusCode::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
            ->search(request('search'))
            ->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->validate([
            'description' => 'required',
        ]);
        $leadStatusCode = new LeadStatusCode;
        $leadStatusCode->description = $input['description'];
        $leadStatusCode->save();
        return response()->json($leadStatusCode);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LeadStatusCode  $leadStatusCode
     * @return \Illuminate\Http\Response
     */
    public function show(LeadStatusCode $leadStatusCode)
    {
        return response()->json($leadStatusCode);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LeadStatusCode  $leadStatusCode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LeadStatusCode $leadStatusCode)
    {
        $input = $request->validate([
            'description' => 'required',
        ]);
        $leadStatusCode->description = $input['description'];
        $leadStatusCode->save();
        return response()->json($leadStatusCode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LeadStatusCode  $leadStatusCode
     * @return \Illuminate\Http\Response
     */
    public function destroy(LeadStatusCode $leadStatusCode)
    {
        return response()->json($leadStatusCode->delete());
    }
}
