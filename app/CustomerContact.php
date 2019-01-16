<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class CustomerContact extends Model
{
    use SearchableTrait;
    protected $fillable = ['customer_id', 'salutation_code_id'];
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
    public function salutation_code()
    {
        return $this->belongsTo(SalutationCode::class);
    }
}
