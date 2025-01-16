export async function GET() {
  return new Response(
    JSON.stringify({
      name: "Learn Code With Avi",
    }),
    { status: 200 }
  );
}
