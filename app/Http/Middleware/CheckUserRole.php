<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class CheckUserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $roleId): Response
    {
        $user = $request->user();

        Log::info('User ID: ' . optional($user)->id);
        Log::info('Role ID to Check: ' . $roleId);

        // ... Diğer loglar

        if ($user) {
            $role = Role::whereHas('users', function ($query) use ($user) {
                $query->where('users.id', $user->id);
            })->find($roleId);

            Log::info('Role Found: ' . optional($role)->id);

            if (!$role) {
                return redirect()->route('login.index');
            }
        } else {
            return redirect()->route('login.index');
        }

        return $next($request);
    }
}
