<?php

namespace Modules\Chirp\Http\Controllers;

use App\Http\Controllers\Controller;

class ChirpController extends Controller
{
    public function __invoke()
    {
        return inertia('chirp::index');
    }
}
