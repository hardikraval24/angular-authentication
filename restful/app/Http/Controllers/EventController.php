<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use \App\Event;
class EventController extends Controller
{
    public function index()
    {
        try
        {
            $events = Event::all();
            return new JsonResponse([
                'status_code' => 200,
                'data' => [
                    'events' => $events,
                ]
            ]);
        }
        catch (ValidationException $e)
        {
            return $e->getResponse();
        }
    }
}
