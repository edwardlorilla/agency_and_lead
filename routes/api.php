<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function (){
    Route::get('/users/search', 'UserController@search');
    Route::get('/users/notification', 'UserController@notification');
    Route::get('/business_entities/search', 'BusinessEntityController@search');
    Route::get('/customers/search', 'CustomerController@search');
    Route::get('/employees/search', 'EmployeeController@search');
    Route::get('/lead_status_codes/search', 'LeadStatusCodeController@search');
    Route::get('/lead_outcome_codes/search', 'LeadOutcomeCodeController@search');
    Route::get('/employee_categories/search', 'EmployeeCategoryController@search');
    Route::get('/salutation_codes/search', 'SalutationCodeController@search');
    Route::get('/users/{user}/customer', 'UserController@customer');
    Route::get('/users/{user}/employee', 'UserController@employee');
    Route::get('/user/notification/{id}', 'UserController@notificationMarkAsRead');
    Route::apiResources([
        '/users' => 'UserController',
        '/business_entities' => 'BusinessEntityController',
        '/employee_categories' => 'EmployeeCategoryController',
        '/employees' => 'EmployeeController',
        '/customers' => 'CustomerController',
        '/salutation_codes' => 'SalutationCodeController',
        '/lead_status_codes' => 'LeadStatusCodeController',
        '/lead_outcome_codes' => 'LeadOutcomeCodeController',
        '/customers_leads' => 'CustomerLeadController',
    ]);
});
