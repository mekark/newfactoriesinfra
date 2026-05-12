const UPSTREAM_URL = "https://lgs-inbuilt.vercel.app/api/enquiry-form";
const UPSTREAM_ORIGIN = "https://inbuiltinfra.com";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid enquiry payload." }, { status: 400 });
  }

  try {
    const upstream = await fetch(UPSTREAM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: UPSTREAM_ORIGIN,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const body = await upstream.text();
    const contentType =
      upstream.headers.get("content-type") ?? "text/plain; charset=utf-8";

    return new Response(body, {
      status: upstream.status,
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch {
    return Response.json(
      { error: "Failed to reach enquiry service." },
      { status: 502 }
    );
  }
}
