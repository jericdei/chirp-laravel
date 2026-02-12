<?php

use App\Http\Controllers\Auth\LoginUserController;
use App\Http\Controllers\Auth\LogoutUserController;
use App\Http\Controllers\Auth\RegisterUserController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => inertia('index'))->name('home');

Route::prefix('auth')->as('auth.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('login', fn () => inertia('auth/login'))->name('login');
        Route::post('login', LoginUserController::class)->name('login.store');
        Route::get('register', fn () => inertia('auth/register'))->name('register');
        Route::post('register', RegisterUserController::class)->name('register.store');
    });

    Route::middleware('auth')->group(function () {
        Route::post('logout', LogoutUserController::class)->name('logout.store');
    });
});
