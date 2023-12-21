<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Http\Controllers\Backend\Editor\ContentController;
use App\Http\Controllers\Backend\PostController;
use App\Http\Controllers\Frontend\FrontendController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FrontendController::class, 'index'])->name('home');

Route::get('/test', function () {
    dd(PHP_VERSION);
});




Route::middleware('checkUserRole:2')->group(function () {

Route::get('dashboard-subs', [\App\Http\Controllers\Backend\Subscriber\ContentController::class, 'index'])->name('subs.dash');
});

Route::middleware('checkUserRole:1')->group(function () {
    Route::get('editor-panel', [ContentController::class, 'index'])->name('editor.panel');
    Route::get('post-create', [PostController::class, 'index'])->name('post-create');
    Route::post('/post', [PostController::class, 'store'])->name('post.push');
    Route::delete('/post/{id}', [PostController::class, 'destroy'])->name('post.delete');
    Route::get('/post-edit/{id}', [PostController::class, 'edit'])->name('post.edit');
    Route::post('/post-update/{id}', [PostController::class, 'update'])->name('post.update');
});


Route::get('/posts/{post}', [PostController::class, 'show'])->name('post.show');
Route::get('/posts', [\App\Http\Controllers\Backend\PostController::class, 'index'])->name('post.index');
Route::get('/cikis', function (\Illuminate\Http\Request $request) {
    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return redirect('/');
})->name('log.out');


require __DIR__. '/auth.php';

