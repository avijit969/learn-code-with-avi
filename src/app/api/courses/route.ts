import { dbConnect } from "@/lib/db/db-connect";
import { Course } from "@/models/courses.model";
import { NextRequest } from "next/server";
dbConnect();
export async function GET() {
  return new Response(
    JSON.stringify({
      name: "Learn Code With Avi",
    }),
    { status: 200 }
  );
}

// create a new course
export async function POST(req: Request) {
  // const { name, description, instructor, duration } = await req.json();
  const formData = await req.formData();
  console.log(formData);

  return Response.json({ status: 200 });
}
