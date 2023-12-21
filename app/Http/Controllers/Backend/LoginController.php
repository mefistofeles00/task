<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Nette\Schema\ValidationException;

class LoginController extends Controller
{
    public function index()
    {
        if (Auth::check())
        {
            return redirect(route('home'));
        }
        return Inertia::render('Auth/Login');
    }

    public function store(Request $request)
    {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if (Auth::attempt($credentials)) {
          //  dd($request->user());
            $user = Auth::user();
            $role = $user->roles->first();
            DB::table('users')->where('id', $user->id)->update(['last_login' => now()]);
            if ($role) {
                switch ($role->id){
                    case 1:
                        return redirect()->route('editor.panel');
                    case 2:

                    return redirect()->route('subs.dash');
                }
            }
        }
        throw \Illuminate\Validation\ValidationException::withMessages([
            'email' => [trans('auth.failed')],
        ]);

    }


}
