<?php

use Illuminate\Support\Facades\Route;
use Modules\Chirp\Http\Controllers\ChirpController;

Route::get('/chirp', ChirpController::class)->name('chirps.index');
