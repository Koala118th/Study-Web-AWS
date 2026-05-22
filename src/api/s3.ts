const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function getFile(key: string) {
    const res = await fetch(`${BASE_URL}/api/s3/getFile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
    });
    if (!res.ok) throw new Error("Failed to fetch file");
    return res.json();
}