<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

    class CustomerController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            return response()->json(Customer::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
                ->search(request('search'))
                ->paginate());
        }
        public function search()
        {
            return response()->json(Customer::search(request('search'))->with('user')->get());
        }
        /**
         * Store a newly created resource in storage.
         *
         * @param  \Illuminate\Http\Request $request
         * @return \Illuminate\Http\Response
         */
        public function store(Request $request)
        {
            $input = $request->validate([
                'details' => 'required',
                'customer_contact.salutation_code_id' => 'required',
                'user_id' => "required",
            ]);
            $customer = new Customer;
            $customer->details = $input['details'];
            $user = \App\User::whereId($input['user_id'])->first();
            $user->customers()->save($customer);
            $customer->customer_contact()->save(new \App\CustomerContact(['salutation_code_id' => $input['customer_contact']['salutation_code_id']]));
            return response()->json($customer);
        }

        /**
         * Display the specified resource.
         *
         * @param  \App\Customer $customer
         * @return \Illuminate\Http\Response
         */
        public function show(Customer $customer)
        {
            return response()->json($customer);
        }

        /**
         * Update the specified resource in storage.
         *
         * @param  \Illuminate\Http\Request $request
         * @param  \App\Customer $customer
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request, Customer $customer)
        {
            $input = $request->validate([
                'details' => 'required',
                'customer_contact.salutation_code_id' => 'required',
                'user_id' => "required",
            ]);
            $customer->details = $input['details'];
            $customer->save();
            $customer->customer_contact()->update(['salutation_code_id' => $input['customer_contact']['salutation_code_id']]);
            return response()->json($customer);
        }

        /**
         * Remove the specified resource from storage.
         *
         * @param  \App\Customer $customer
         * @return \Illuminate\Http\Response
         */
        public function destroy(Customer $customer)
        {
            $customer->user()->detach();
            $customer->delete();
            return response()->json('', 204);
        }
    }
