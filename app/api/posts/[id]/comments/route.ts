export async function GET({ params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    if (!response.ok) throw new Error("comments not found");
    const comments = await response.json();
    return Response.json(comments);
  } catch (e: Error) {
    return Response.json({ error: e.message });
  }
}
