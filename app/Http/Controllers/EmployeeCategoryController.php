<?php

namespace App\Http\Controllers;

use App\EmployeeCategory;
use Illuminate\Http\Request;

class EmployeeCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(EmployeeCategory::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
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
        return response()->json(EmployeeCategory::search(request('search'))->get());
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
        $employeeCategory = new EmployeeCategory;
        $employeeCategory->description = $input['description'];
        $employeeCategory->save();
        return response()->json($employeeCategory);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\EmployeeCategory  $employeeCategory
     * @return \Illuminate\Http\Response
     */
    public function show(EmployeeCategory $employeeCategory)
    {
        return response()->json($employeeCategory);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\EmployeeCategory  $employeeCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EmployeeCategory $employeeCategory)
    {
        $input = $request->validate([
            'description' => 'required',
        ]);
        $employeeCategory->description = $input['description'];
        $employeeCategory->save();
        return response()->json($employeeCategory);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\EmployeeCategory  $employeeCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmployeeCategory $employeeCategory)
    {
        return response()->json($employeeCategory->delete());
    }
}
