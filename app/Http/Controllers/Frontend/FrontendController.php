<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {



        $posts = Post::with('users')->paginate(5);
        $isLoggedIn = Auth::check();
        $userRole = $isLoggedIn ? Auth::user()->roles->first()->id : null;
        $last = Post::with('users')->orderBy('id', 'desc')->first();

        return Inertia::render('Welcome')->with([
            'isLoggedIn' => $isLoggedIn,
            'userName' => \Illuminate\Support\Facades\Auth::user()->name ?? null,
            'userRole' => $userRole,
            'posts' => $posts,
            'lastPost' => $last
        ]);

    }


}
