<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class Customer extends Model
{
    use SearchableTrait;
    protected $fillable = ['details'];
    protected $searchable = [
        'columns' => [
            'customers.details' => 1,
        ]
    ];
    public function customer_contact()
    {
        return $this->hasOne(CustomerContact::class);
    }

    public function user()
    {
        return $this->morphToMany(User::class, 'taggable');
    }
}
