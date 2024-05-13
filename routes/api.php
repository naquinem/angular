<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LogisticsController;
use App\Http\Controllers\VisualInspectionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/sign-in', [UserController::class, 'login']);
Route::post('/sign-up', [UserController::class, 'register']);


Route::middleware('auth:api')->group(function () {
    Route::post('/sign-out', [UserController::class, 'logout']);
    Route::get('/user', [UserController::class, 'user']);
    Route::post('/pre-inspection', [VisualInspectionController::class, 'store']);
    Route::post('/logistics', [LogisticsController::class, 'store']);
    Route::put('/logistics/edit/{id}', [LogisticsController::class, 'edit']);
    Route::get('/transaction', [LogisticsController::class, 'index']);
    Route::delete('/transaction/delete/{id}', [LogisticsController::class, 'destroy']);
});
