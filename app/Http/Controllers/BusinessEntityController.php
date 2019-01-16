<?php

namespace App\Http\Controllers;

use App\BusinessEntity;
use Illuminate\Http\Request;

class BusinessEntityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(BusinessEntity::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
            ->search(request('search'))
            ->paginate());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search()
    {
        return response()->json(BusinessEntity::search(request('search'))->get());
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
            'details' => 'required',
        ]);
        $businessEntity = new BusinessEntity;
        $businessEntity->details = $input['details'];
        $businessEntity->save();
        return response()->json($businessEntity);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BusinessEntity  $businessEntity
     * @return \Illuminate\Http\Response
     */
    public function show(BusinessEntity $businessEntity)
    {
        return response()->json($businessEntity);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BusinessEntity  $businessEntity
     * @return \Illuminate\Http\Response
     */
    public function edit(BusinessEntity $businessEntity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BusinessEntity  $businessEntity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BusinessEntity $businessEntity)
    {
        $input = $request->validate([
            'details' => 'required',
        ]);
        $businessEntity->details = $input['details'];
        $businessEntity->save();
        return response()->json($businessEntity);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BusinessEntity  $businessEntity
     * @return \Illuminate\Http\Response
     */
    public function destroy(BusinessEntity $businessEntity)
    {
        return response()->json($businessEntity->delete());
    }
}
