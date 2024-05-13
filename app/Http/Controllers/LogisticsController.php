<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class LogisticsController extends Controller
{

    public function index()
    {
        $data = Transaction::all();
        if($data->count() > 0){
            return response()->json([
                'status' => 200,
                'info' => $data
            ], 200);
        } else{
            return response()->json([
                'message' => 'No data found'
            ]);
        }
    }
    public function store(Request $request)
    {
        $data = $request->validate([
            'logistics' => 'required|string|max:255',
            'serial_number' => 'required|string|max:255',
            'control_number' => 'required|string|max:255',
            'ecn' => 'required|string|max:255',
        ]);
        if($data){
            $details = Transaction::create([
                'logistics' => $data['logistics'],
                'serial_number' => $data['serial_number'],
                'control_number' => $data['control_number'],
                'ecn' => $data['ecn'],
            ]);
            return response()->json([
                'status' => 200,
                'details' => $details
            ],200);
        } else {
            return response()->json([
                'message' => 'Please provide a valid details'
            ]);
        }
    }
    public function edit(Request $request, $id)
    {
        $data = $request->validate([
            'logistics' => 'required|string|max:255',
            'serial_number' => 'required|string|max:255',
            'control_number' => 'required|string|max:255',
            'ecn' => 'required|string|max:255',
        ]);
        $dataId = Transaction::find($id);
        if($data){
            $dataId->update([
                'logistics' => $data['logistics'],
                'serial_number' => $data['serial_number'],
                'control_number' => $data['control_number'],
                'ecn' => $data['ecn'],
            ]);
            return response()->json([
                'status', 200,
                'details' => $dataId
            ],200);
        } else {
            return response()->json([
                'message' => 'Please provide a valid details'
            ]);
        }
    }
    public function destroy($id)
    {
        $data = Transaction::find($id);
        if($data){
            $data->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Succsessfully deleted'
            ],200);
        } else {
            return response()->json([
                'message' => 'Failed to delete'
            ]);
        }
    }
}
