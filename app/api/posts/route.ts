import {NextResponse} from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok) {
      const data = await response.json();
      return Response.json(data, { status: 200 });
    }
    throw new Error("Something Went wrong");
  } catch (e: Error) {
     if (e instanceof Error) {
      return Response.json(e.message, { status: 500 });
     }
     return NextResponse.json("Something Went wrong", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, body, userId } = request.json();
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw Error("Something Went wrong");
    return Response.json(await response.json());
  } catch (e: Error) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
