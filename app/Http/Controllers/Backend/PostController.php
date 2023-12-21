<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Post;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PostController extends Controller
{
        public function index()
        {
            return Inertia::render('Posts/CreatePost');
        }

    public function store(Request $request)
    {
    $userId = Auth::id();
    $post = new Post;
    $post->user_id = $userId;
    $post->title = $request->input('title');
    $post->content = $request->input('content');
    $post->save();
    session()->flash('success', 'Post başarıyla oluşturuldu');
   return Inertia::location(route('editor.panel'));
    }

    public function show($post)
    {
        $post = Post::with('users')->find($post);

       // dd($post);
        if (!$post)
        {
            abort(404);
        }


        return Inertia::render('Posts/Show', [
            'post' => $post
        ]);

    }

    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return Inertia::render('Posts/Edit',
        [
            'post' => $post
        ]
        );
    }


    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        return \response()->json(['redirecTo' => route('editor.panel')], 200);
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['error', "post silinemedi"]);
        }

        $post->delete();

        return \response()->json(['success', 'post silindi']);
    }

}
