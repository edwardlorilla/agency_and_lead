<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class LeadStatusCode extends Model
{
    use SearchableTrait;
    protected $fillable = ['description'];
    protected $searchable = [
        'columns' => [
            'lead_status_codes.description' => 1
        ]
    ];
}
