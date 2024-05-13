<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class VisualInspectionController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'pre_inspection_status' => 'required|string|max:255',
            'pre_inspection_details' => 'required|string|max:255',
        ]);
        if($data){
            $details = Transaction::update([
                'pre_inspection_status' => $data['pre_inspection_status'],
                'pre_inspection_details' => $data['pre_inspection_details'],
            ]);
            return response()->json([
                'details' => $details
            ]);
        }
        return response()->json([
            'message' => 'Please provide a valid details'
        ]);
    }
}
