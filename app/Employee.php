<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;
class Employee extends Model
{
    use SearchableTrait;
    protected $fillable = ['business_entity_id', 'employee_category_id', 'details'];
    protected $searchable = [
        'columns' => [
            'employees.details' => 1,
            'business_entities.details' => 2,
            'employee_categories.description' => 3
        ],
        'joins' =>[
            'business_entities' => ['employees.business_entity_id', 'business_entities.id'],
            'employee_categories' => ['employees.employee_category_id', 'employee_categories.id']
        ]
    ];
    public function business_entity()
    {
        return $this->belongsTo(BusinessEntity::class);
    }
    public function employee_category()
    {
        return $this->belongsTo(EmployeeCategory::class);
    }
    public function user()
    {
        return $this->morphToMany(User::class, 'taggable');
    }
}
