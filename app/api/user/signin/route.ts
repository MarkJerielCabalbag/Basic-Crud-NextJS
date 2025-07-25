import { NextResponse } from "next/server";

//@DESC      sign in user
//@ROUTE     /api/user/signin
//@ACCESS    Public
export async function POST(req: Request) {
  const {} = await req.json();

  return NextResponse.json({ message: "Hello" });
}
