<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class SalutationCode extends Model
{
    use SearchableTrait;

    protected $fillable = ['description'];
    protected $searchable = [
        'columns' => [
            'salutation_codes.description' => 1
        ]
    ];
}
