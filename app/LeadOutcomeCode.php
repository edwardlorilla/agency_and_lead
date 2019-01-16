<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class LeadOutcomeCode extends Model
{
    use SearchableTrait;
    protected $fillable = ['description'];
    protected $searchable = [
        'columns' => [
            'lead_outcome_codes.description' => 1
        ]
    ];
}
