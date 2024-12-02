import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("Something went wrong!");
    const post = await response.json();
    if (!post) NextResponse.json({ message: "Post not found." }, { status: 404 });
    return NextResponse.json(post, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = params;
    const { title, userId, body } = await request.json();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          title: title,
          body: body,
          userId: userId,
        }),
      }
    );
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error(response.statusText);
    return NextResponse.json({ message: "post deeleted" }, { status: 200 });
  } catch (e) {
    return NextResponse.json((e as Error).message, { status: 500 });
  }
}
