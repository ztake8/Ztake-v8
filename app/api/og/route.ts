import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Ztake Payments";

  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#000",
          color: "white",
          padding: "40px",
          fontSize: 64,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
        children: title,
      },
    } as any,
    {
      width: 1200,
      height: 630,
    }
  );
}
