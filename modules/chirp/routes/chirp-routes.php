<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Modules\Chirp\Http\Controllers\ChirpController;

Route::middleware(['web', 'auth'])->group(function (): void {
    Route::get('/chirps', ChirpController::class)->name('chirps.index');
});
