import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/db";
import { PostgrestError } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

// Define types for each category of data
interface ElementItem {
  element: string;
  attributes: string;
  desc: string;
}

interface HTMLGlobalAttributeItem {
  attribute: string;
  desc: string;
}

interface HTMLEntityItem {
  entity: string;
  unicode: string;
  htmlCode: string;
}

interface CssSelectorItem {
  selector: string;
  desc: string;
}

interface CssPropertiesItem {
  prop: string;
  desc: string;
  val: string;
}

interface CssDataTypeItem {
  datatype: string;
  def: string;
}

interface CssFunctionItem {
  func: string;
  desc: string;
  params: string;
}

interface CssAtRuleItem {
  atRule: string;
  desc: string;
}

interface CssKeywordItem {
  keyword: string;
  desc: string;
}

interface Https {
  http: string;
  desc: string;
}

interface GlobalPropertyItem {
  prop: string;
  desc: string;
}

interface PrimitiveDataTypeItem {
  identifier: string;
  literal: string;
  description: string;
}

interface BuiltInFunctionItem {
  method: string;
  desc: string;
}
interface BuiltInObjectItem {
  object: string;
  methodsValues: string;
}

interface DomBomAPIItem {
  interface: string;
  description: string;
  methods_properties: string;
}

interface NpmCommand {
  command: string;
  desc: string;
}

interface Commands {
  cmd: string;
  desc: string;
}

interface Skill {
  skill: string;
  proficiency: string;
}

interface Certificate {
  certificate: string;
  date: string;
}

type DatasheetItem =
  | ElementItem
  | HTMLGlobalAttributeItem
  | HTMLEntityItem
  | CssSelectorItem
  | CssPropertiesItem
  | CssDataTypeItem
  | CssFunctionItem
  | CssAtRuleItem
  | CssKeywordItem
  | Https
  | GlobalPropertyItem
  | PrimitiveDataTypeItem
  | BuiltInFunctionItem
  | BuiltInObjectItem
  | DomBomAPIItem
  | NpmCommand
  | Commands
  | Skill
  | Certificate;

interface DatasheetResponse {
  datasheet: DatasheetItem[];
}

interface Data {
  name: string;
  datasheet: DatasheetItem[];
}

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
      .from("devnotes")
      .select("datasheet") // Selecting only the 'datasheet' column
      .eq("name", name) // Matching the name
      .single(); // Expecting a single result

    if (error) {
      throw error;
    }

    // Return the datasheet column as JSON, typed as DatasheetResponse
    if (data) {
      return NextResponse.json<DatasheetResponse>({
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
    // Get the Authorization header
    const authHeader = request.headers.get("Authorization");

    // Ensure the header contains the password
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Password is required." },
        { status: 400 }
      );
    }

    const userPassword = authHeader.split(" ")[1]; // Extract password from "Bearer <password>"
    const storedPasswordHash = process.env.ADMIN_PASSWORD_HASH as string;
    const match = await bcrypt.compare(userPassword, storedPasswordHash);

    // Compare the provided password with the one stored in the environment variable
    if (!match) {
      return NextResponse.json(
        { message: "Incorrect password." },
        { status: 401 }
      );
    }

    // Parse the request body to get the new datasheet data
    const requestBody: Data = await request.json();
    const { name, datasheet } = requestBody;

    // Ensure the datasheet is an array
    if (!Array.isArray(datasheet)) {
      return NextResponse.json(
        { error: "The datasheet must be an array" },
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json(
        { error: "Name parameter is required" },
        { status: 400 }
      );
    }

    // Fetch the current datasheet based on the name
    const { data: existingData, error: fetchError } = await supabase
      .from("devnotes")
      .select("datasheet")
      .eq("name", name)
      .single(); // Expecting a single result

    if (fetchError) {
      throw fetchError;
    }

    // If no data found, return a 404 response
    if (!existingData) {
      return NextResponse.json(
        { error: "No data found for the given name" },
        { status: 404 }
      );
    }

    // Replace the datasheet with the new one
    const { data, error: updateError } = await supabase
      .from("devnotes")
      .update({ datasheet }) // Update the 'datasheet' column
      .eq("name", name)
      .select("datasheet")
      .single<Data>();

    if (updateError) {
      throw updateError;
    }

    // Return the updated datasheet
    if (data) {
      return NextResponse.json({ datasheet: data.datasheet });
    } else {
      return NextResponse.json(
        { error: "Failed to update datasheet for the given name" },
        { status: 500 }
      );
    }
  } catch (error) {
    // Handle errors and log them appropriately

    // Specific handling for PostgrestError from Supabase
    if (error instanceof PostgrestError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Catching any other unknown errors
    console.error("Unexpected error:", error); // Log error for debugging purposes
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
