<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

final class LoginUserController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'usernameOrEmail' => ['required', 'string'],
            'password' => ['required'],
        ]);

        $user = User::query()
            ->where('username', $validated['usernameOrEmail'])
            ->orWhere('email', $validated['usernameOrEmail'])->first();

        $attempt = Auth::attempt([
            'email' => $user->email,
            'password' => $validated['password'],
        ]);

        if (!$user || !$attempt) {
            return back()->withErrors([
                'usernameOrEmail' => 'The provided credentials do not match our records.',
            ])->onlyInput('usernameOrEmail');
        }

        return redirect()->route('home');
    }
}
