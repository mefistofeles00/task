<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;


class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Register/SubsReg');
    }
    public function storeSub(Request $request): RedirectResponse
    {
        $routeName = $request->route()->getName();
        $rolId = ($routeName == 'register.store') ? 2 : (($routeName == 'editor.register') ? 1 : null);
        if ($rolId) {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
                'password' => ['required', 'confirmed', Password::defaults()],
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            event(new Registered($user));

            Auth::login($user);
            $role = Role::find($rolId);
            if ($role) {
                $user->roles()->attach($role->id);
            }
        }

        return redirect(route('subs.dash'));
    }

    public function createEditor()
    {
        return Inertia::render('Register/EditorReg');
    }
    public function storeEditor(Request $request)
    {
        $routeName = $request->route()->getName();
        $rolId = ($routeName == 'register.store') ? 2 : (($routeName == 'editor.store') ? 1 : null);
        if ($rolId) {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
                'password' => ['required', 'confirmed', Password::defaults()],
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            event(new Registered($user));

            Auth::login($user);
            $role = Role::find($rolId);
            if ($role) {
                $user->roles()->attach($role->id);
            }
        }

        return redirect(route('editor.panel'));
    }
}
