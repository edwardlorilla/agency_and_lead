<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Nicolaslopezj\Searchable\SearchableTrait;
class User extends Authenticatable
{
    use Notifiable,HasApiTokens, SearchableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $searchable = [
        'columns' => [
            'users.name' => 1,
            'users.email' => 2,
        ]
    ];
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function customers(){
        return $this->morphedByMany(Customer::class, 'taggable');
    }
    public function employees(){
        return $this->morphedByMany(Employee::class, 'taggable');
    }


}
