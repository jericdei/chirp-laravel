<?php

use Illuminate\Support\Facades\Route;
use Modules\Chirp\Http\Controllers\ChirpController;

Route::middleware(['web', 'auth'])->group(function () {
    Route::get('/chirps', ChirpController::class)->name('chirps.index');
});
