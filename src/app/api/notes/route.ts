import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/db";
import { createClient } from "@supabase/supabase-js";
import { PostgrestError } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function GET(request: NextRequest): Promise<NextResponse> {
  // Extract the name parameter from the query string
  const url = new URL(request.url);
  const name = url.searchParams.get("name"); // Assuming the name is passed as a query parameter

  if (!name) {
    return NextResponse.json(
      { error: "Name parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Query the table for the datasheet based on the name
    const { data, error } = await supabase
      .from("notes")
      .select("datasheet") // Selecting only the 'datasheet' column
      .eq("name", name) // Matching the name
      .single(); // Expecting a single result

    if (error) {
      throw error;
    }

    // Return the datasheet column as JSON, typed as DatasheetResponse
    if (data) {
      return NextResponse.json({
        datasheet: data.datasheet,
      });
    } else {
      return NextResponse.json(
        { error: "No data found for the given name" },
        { status: 404 }
      );
    }
  } catch (error: PostgrestError | unknown) {
    // Type guard for PostgrestError
    if ((error as PostgrestError).message) {
      return NextResponse.json(
        { error: (error as PostgrestError).message },
        { status: 500 }
      );
    }

    // Handle other unknown errors
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Password is required." },
        { status: 400 }
      );
    }

    const userPassword = authHeader.split(" ")[1];
    const storedPasswordHash = process.env.ADMIN_PASSWORD_HASH as string;
    console.log("Loaded Hash from ENV:", process.env.ADMIN_PASSWORD_HASH);
    console.log(storedPasswordHash);
    const match = await bcrypt.compare(userPassword, storedPasswordHash);

    if (!match) {
      return NextResponse.json(
        { message: "Incorrect password." },
        { status: 401 }
      );
    }

    const requestBody = await request.json();
    const { name, datasheet } = requestBody;

    // Validate input
    if (!name || !datasheet) {
      return NextResponse.json(
        { error: "Name and datasheet are required" },
        { status: 400 }
      );
    }

    // Upsert data (insert or update)
    const { data, error } = await supabaseAdmin
      .from("notes")
      .upsert(
        { name, datasheet },
        { onConflict: "name" } // Update if name exists
      )
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ datasheet: data.datasheet });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return errorResponse("An unexpected error occurred", 500);
  }
}

// Error Response Helper
function errorResponse(message: string, status: number): NextResponse {
  return NextResponse.json({ error: message }, { status });
}
