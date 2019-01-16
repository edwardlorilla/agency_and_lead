<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class EmployeeCategory extends Model
{
    use SearchableTrait;
    protected $fillable = ['description'];
    protected $searchable = [
        'columns' => [
            'employee_categories.description' => 1
        ]
    ];
}
