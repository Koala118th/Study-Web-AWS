const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function getFile(key: string) {
    const res = await fetch(`${BASE_URL}/api/s3/file?key=${encodeURIComponent(key)}`, {
        method: "GET",
    });

    if (!res.ok) throw new Error(`Failed to fetch file: ${res.status}`);
    return res.json();
}

export async function putFile(key: string, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${BASE_URL}/api/s3/file?key=${encodeURIComponent(key)}`, {
        method: "PUT",
        body: formData,
    });

    if (!res.ok) throw new Error(`Failed to upload file: ${res.status}`);
    return res.json();
}

export async function deleteFile(key: string) {
    const res = await fetch(`${BASE_URL}/api/s3/file?key=${encodeURIComponent(key)}`, {
        method: "DELETE",
    });

    if (!res.ok) throw new Error(`Failed to delete file: ${res.status}`);
    return res.json();
}