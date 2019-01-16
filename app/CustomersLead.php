<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class CustomersLead extends Model
{
    use SearchableTrait;
    protected $fillable = ['customer_id', 'employee_id', 'lead_outcome_code_id', 'lead_status_code_id',  'customer_contact_yn', 'date_of_lead'];
    protected $searchable = [
        'columns' => [
            'customers_leads.customer_contact_yn' => 1,
            'customers_leads.date_of_lead' => 2
        ],
        'joins' =>[
            'customers' => ['customers_leads.customer_id', 'customers.id'],
            'employees' => ['customers_leads.employee_id', 'employees.id'],
            'lead_outcome_codes' => ['customers_leads.lead_outcome_code_id', 'lead_outcome_codes.id'],
            'lead_status_codes' => ['customers_leads.lead_status_code_id', 'lead_status_codes.id']
        ]
    ];
    public function customer(){
        return $this->belongsTo(Customer::class);
    }
    public function employee(){
        return $this->belongsTo(Employee::class);
    }
    public function lead_outcome_code(){
        return $this->belongsTo(LeadOutcomeCome::class);
    }
    public function lead_status_code(){
        return $this->belongsTo(LeadStatusCome::class);
    }
}
