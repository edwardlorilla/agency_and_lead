<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
            ->search(request('search'))
//            ->where('id', '!=', auth()->id())
            ->paginate());
    }
    public function notification()
    {
        return response()->json(User::whereId(auth()->id())->with('notifications')->first());
    }
    public function notificationMarkAsRead($id)
    {
        return response()->json(User::whereId(auth()->id())->notifications()->whereId($id)->delete());
    }
    public function search()
    {
        return response()->json(User::search(request('search'))->get());
    }
    public function store(Request $request)
    {
        $input = $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => '',
            'password_confirmation' => 'same:password'
        ]);
        $user = new User;
        if (trim($request->password) == '') {
            $input = $request->except('password');
        } else {
            $input['password'] = bcrypt($request->password);
            $user->password = $input['password'];
        }
        $user->name = $input['name'];
        $user->email = $input['email'];
        $user->save();
        return response()->json($user, 201);
    }
    public function show(User $user)
    {
        return response()->json(User::whereId($user->id)->first());
    }
    public function customer(User $user){
        return response()->json(User::whereId($user->id)->with('customers.customer_contact.salutation_code', 'customers.user')->first());
    }
    public function employee(User $user){
        return response()->json(User::whereId($user->id)->with('employees.business_entity', 'employees.employee_category', 'employees.user')->first());
    }
    public function update(Request $request, User $user)
    {
        $input = $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => '',
            'password_confirmation' => 'same:password'
        ]);
        if (trim($request->password) == '') {
            $input = $request->except('password');
        } else {
            $input['password'] = bcrypt($request->password);
            $user->password = $input['password'];
        }
        $user->name = $input['name'];
        $user->email = $input['email'];
        $user->save();
        return response()->json($user, 201);
    }
    public function destroy(User $user)
    {
        return response()->json($user->delete());
    }
}
