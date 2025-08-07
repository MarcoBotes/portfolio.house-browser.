import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const imagePath = path.join(process.cwd(), 'public', 'assets', `841_2160.jpg`);

  try {
    const imageBuffer = await readFile(imagePath);
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': imageBuffer.length.toString(),
      },
    });
  } catch (err) {
    return new NextResponse('Image not found', { status: 404 });
  }
}
