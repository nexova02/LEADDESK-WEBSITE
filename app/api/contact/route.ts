import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "enquiries.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    let currentData = [];
    try {
      const fileContent = await fs.readFile(DATA_FILE, "utf-8");
      currentData = JSON.parse(fileContent);
    } catch (error) {
      // Ignore if file missing or empty
    }

    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...body
    };

    currentData.push(newEntry);
    await fs.writeFile(DATA_FILE, JSON.stringify(currentData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving request:", error);
    return NextResponse.json({ success: false, error: "Failed to save request" }, { status: 500 });
  }
}
