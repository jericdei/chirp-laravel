<?php

declare(strict_types=1);

namespace Modules\Chirp\Http\Controllers;

use App\Http\Controllers\Controller;

final class ChirpController extends Controller
{
    public function __invoke()
    {
        return inertia('chirp::index');
    }
}
