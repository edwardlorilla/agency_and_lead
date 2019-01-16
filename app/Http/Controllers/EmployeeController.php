<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Employee::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
            ->with('business_entity', 'employee_category', 'user')
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
        return response()->json(Employee::search(request('search'))->with('user')->get());
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
            'business_entity_id' => 'required',
            'employee_category_id' => 'required',
            'details' => 'required',
            'user_id' => 'required'
        ]);
        $employee = new Employee;
        $employee->business_entity_id = $input['business_entity_id'];
        $employee->employee_category_id = $input['employee_category_id'];
        $employee->details = $input['details'];
        $user = \App\User::whereId($input['user_id'])->first();
        $user->employees()->save($employee);
        return response()->json($employee);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        return response()->json(Employee::whereId($employee->id)->with('business_entity', 'employee_category', 'user')->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        $input = $request->validate([
            'business_entity_id' => 'required',
            'employee_category_id' => 'required',
            'details' => 'required',
        ]);
        $employee->business_entity_id = $input['business_entity_id'];
        $employee->employee_category_id = $input['employee_category_id'];
        $employee->details = $input['details'];
        $employee->save();
        return response()->json($employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        $employee->user()->detach();
        return response()->json($employee->delete());
    }
}
