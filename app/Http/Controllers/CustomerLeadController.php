<?php

namespace App\Http\Controllers;

use App\CustomersLead;
use Illuminate\Http\Request;

class CustomerLeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(CustomersLead::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
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
            'customer_id' => 'required',
            'employee_id' => 'required',
            'lead_outcome_code_id' => 'required',
            'customer_contact_yn' => 'required',
            'date_of_lead' => 'required',
            'description' => 'required',
        ]);
        $customersLead = new CustomersLead;
        $customersLead->customer_id = $input['customer_id'];
        $customersLead->employee_id = $input['employee_id'];
        $customersLead->lead_outcome_code_id = $input['lead_outcome_code_id'];
        $customersLead->customer_contact_yn = $input['customer_contact_yn'];
        $customersLead->date_of_lead = $input['date_of_lead'];
        $customersLead->description = $input['description'];
        $customersLead->save();
        return response()->json($customersLead);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CustomersLead  $customersLead
     * @return \Illuminate\Http\Response
     */
    public function show(CustomersLead $customersLead)
    {
        return response()->json(CustomersLead::whereId($customersLead->id)->with('customer', 'employee', 'lead_outcome_code')->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CustomersLead  $customersLead
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomersLead $customersLead)
    {
        $input = $request->validate([
            'customer_id' => 'required',
            'employee_id' => 'required',
            'lead_outcome_code_id' => 'required',
            'customer_contact_yn' => 'required',
            'date_of_lead' => 'required',
            'description' => 'required',
        ]);
        $customersLead->customer_id = $input['customer_id'];
        $customersLead->employee_id = $input['employee_id'];
        $customersLead->lead_outcome_code_id = $input['lead_outcome_code_id'];
        $customersLead->customer_contact_yn = $input['customer_contact_yn'];
        $customersLead->date_of_lead = $input['date_of_lead'];
        $customersLead->description = $input['description'];
        $customersLead->save();
        return response()->json($customersLead);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CustomersLead  $customersLead
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomersLead $customersLead)
    {
        return response()->json($customersLead->delete());
    }
}
