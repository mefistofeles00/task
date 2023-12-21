<?php

namespace App\Http\Controllers\Backend\Editor;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ContentController extends Controller
{
    public function index()
    {

        if (Auth::check())
        {
            $userId = Auth::id();
            $user = User::withCount('posts')->find($userId);
           // dd($user);
            $userPosts = $user->posts;
            $lastLogin = $user->last_login;
            //dd($userPosts);
            return Inertia::render('Editor/Dashboard', [
                'userPosts' => $userPosts,
                'postCount' => $user->posts_count,
                'lastLogin' => $lastLogin
            ]);
        }
        else {
            return redirect(route('home'));
        }
    }

    public function show()
    {

    }
}
