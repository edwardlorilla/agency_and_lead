<?php

namespace App\Http\Controllers;

use App\LeadOutcomeCode;
use Illuminate\Http\Request;

class LeadOutcomeCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(LeadOutcomeCode::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
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
        $leadOutcomeCode = new LeadOutcomeCode;
        $leadOutcomeCode->description = $input['description'];
        $leadOutcomeCode->save();
        return response()->json($leadOutcomeCode);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LeadOutcomeCode  $leadOutcomeCode
     * @return \Illuminate\Http\Response
     */
    public function show(LeadOutcomeCode $leadOutcomeCode)
    {
        return response()->json($leadOutcomeCode);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LeadOutcomeCode  $leadOutcomeCode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LeadOutcomeCode $leadOutcomeCode)
    {
        $input = $request->validate([
            'description' => 'required',
        ]);
        $leadOutcomeCode->description = $input['description'];
        $leadOutcomeCode->save();
        return response()->json($leadOutcomeCode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LeadOutcomeCode  $leadOutcomeCode
     * @return \Illuminate\Http\Response
     */
    public function destroy(LeadOutcomeCode $leadOutcomeCode)
    {
        return response()->json($leadOutcomeCode->delete());
    }
}
