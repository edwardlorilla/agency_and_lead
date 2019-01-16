<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class BusinessEntity extends Model
{
    use SearchableTrait;
    protected $fillable = ['details'];
    protected $searchable = [
        'columns' => [
            'business_entities.details' => 1,
        ]
    ];
}
