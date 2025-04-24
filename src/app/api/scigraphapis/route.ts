// app/api/scigraphapis/route.ts
import { NextRequest } from "next/server";

const port = process.env.PORT;

export async function POST(request: NextRequest) {
  try {
    const route = request.url; // extract route from /api/scigraphapis${route}
    const response = await fetch(port + "/" + route, request);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response;
  } catch (err) {
    console.error("Error fetching PDF:", err);
  }
}
