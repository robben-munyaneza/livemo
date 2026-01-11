<?php

use App\Http\Controllers\Api\AlertController;
use App\Http\Controllers\Api\AnimalController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FarmController;
use App\Http\Controllers\Api\HealthController;
use App\Http\Controllers\Api\SensorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::prefix('v1')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

// Protected routes
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    // Authentication
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/refresh', [AuthController::class, 'refresh']);

    // Farms
    Route::apiResource('farms', FarmController::class);
    Route::get('/farms/{farm}/animals', [FarmController::class, 'animals']);
    Route::get('/farms/{farm}/dashboard', [FarmController::class, 'dashboard']);

    // Animals
    Route::apiResource('animals', AnimalController::class);
    Route::get('/animals/{animal}/health', [AnimalController::class, 'health']);
    Route::get('/animals/{animal}/timeline', [AnimalController::class, 'timeline']);

    // Health Records
    Route::apiResource('health-records', HealthController::class);
    Route::get('/health/analytics', [HealthController::class, 'analytics']);

    // Sensors
    Route::apiResource('sensors', SensorController::class);
    Route::post('/sensors/{sensor}/data', [SensorController::class, 'data']);

    // Alerts
    Route::get('/alerts', [AlertController::class, 'index']);
    Route::get('/alerts/{alert}', [AlertController::class, 'show']);
    Route::put('/alerts/{alert}/acknowledge', [AlertController::class, 'acknowledge']);
    Route::put('/alerts/{alert}/resolve', [AlertController::class, 'resolve']);
    Route::get('/alerts/stats', [AlertController::class, 'stats']);
});
