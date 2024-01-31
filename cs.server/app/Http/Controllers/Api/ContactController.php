<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $contacts = Contact::all();

        return response()->json(['data' => $contacts], 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required|string|max:100',
            'company' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:100',
            'email' => 'nullable|email'
        ]);
        
        $contact = Contact::create($request->all());

        return response()->json(['data' => $contact], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
        return response()->json(['data' => $contact], 200);
    }

 

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //

        $request->validate([
            'name' => 'required|string|max:100',
            'company' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:100',
            'email' => 'nullable|email'
        ]);
        
        $contact -> update($request->all());

        return response()->json(['data' => $contact], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
        $contact->delete();

        return response()->json(['data' => $contact], 200);
    }
}
