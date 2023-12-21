<?php

namespace App\Http\Controllers\Backend\Subscriber;

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
        $user = Auth::user();
        $lastLogin = $user->last_login;
        $posts = Post::with('users')->paginate(4);
        return Inertia::render('Subscriber/Home', [
            'posts' => $posts,
            'lastLogin' => $lastLogin
        ]);

    }
}
