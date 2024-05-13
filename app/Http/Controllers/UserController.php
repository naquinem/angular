<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\SignInRequest;
use App\Http\Requests\SignUpRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(SignUpRequest $request)
    {
        $data = $request->validated();
        if($data){
            $user = User::create([
                'fullname' => $data['fullname'],
                'id_number' => $data['id_number'],
                'email' => $data['email'],
                'password' => Hash::make($data['password'])
            ]);
            $token = $user->createToken('token')->accessToken;
            return response()->json([
                'user' => new UserResource($user)
            ]);
        } else {
            return response()->json([
                'message'=> 'Please provide a valid credentials'
            ]);
        }
    }
    public function login(SignInRequest $request)
    {
        $data = $request->validated();
        if($data){
            $user = User::where('email', $data['email'])->first();
            if(!$user || !Hash::check($data['password'], $user->password)){
                return response()->json([
                    'message' => 'Email or password is incorrect!'
                ], 401);
            }
            $token = $user->createToken('token')->accessToken;
            return response()->json([
                'user' => new UserResource($user),
                'token' => $token,
            ]);
        }
    }
    public function user(Request $request)
    {
        $user = User::all();
        return response()->json([
            'user' => new UserResource($user)
        ]);
    }
    public function logout()
    {
        $users = auth()->user()->token()->revoke();
        if($users){
            return response()->json([
                'status' => 200,
                'message' => 'Successfully logout',
            ], 200);
        } else {
            return response()->json([
                'message' => 'User not found',
            ]);
        }
    }
}
