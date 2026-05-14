import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    const db = await getDatabase();
    const user = await db.collection("users").findOne({ _id: new ObjectId(session.userId) });

    if (!user) {
       return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json(
      {
        authenticated: true,
        user: {
          userId: session.userId,
          email: session.email,
          username: session.username,
          isPremium: user.isPremium || false,
          trialEndsAt: user.trialEndsAt,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Session check error:", error);
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}
