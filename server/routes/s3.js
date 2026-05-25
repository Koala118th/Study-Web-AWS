import express from "express";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand, DeleteObjectCommand, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
import multer from "multer";
dotenv.config();

const router = express.Router();

let s3Config = {
    region: process.env.S3_BUCKET_REGION,
};

if (process.env.AWS_ACCESS_KEY_ID) {
    s3Config.credentials = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };
}

const s3 = new S3Client(s3Config);


const upload = multer({ storage: multer.memoryStorage() });
router.put("/file", upload.single("file"), async (req, res) => {
    const { key } = req.query;

    if (!key || typeof key !== "string") {
        return res.status(400).json({ error: "Missing or invalid file key" });
    }

    if (!req.file) {
        return res.status(400).json({ error: "No file provided" });
    }

    try {
        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: key,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        });

        await s3.send(command);
        res.json({ message: "File uploaded successfully" });

    } catch (error) {
        console.error("S3 put error:", error);
        res.status(500).json({ error: "Failed to upload file" });
    }
});

router.get("/file", async (req, res) => {
    const { key } = req.query;
    if (!key || typeof key !== "string") { return res.status(400).json({ error: "Missing or invalid file key" }); }

    try {
        await checkFileExists(key);

        const command = new GetObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: key,
        });
        const url = await getSignedUrl(s3, command, { expiresIn: 60 });
        res.json({ url });

    } catch (error) {
        console.error("S3 getFile error:", error);
        if (error.name === "NotFound") { return res.status(404).json({ error: "File not found" }); }
        res.status(500).json({ error: "Failed to generate file URL" });
    }
});

router.delete("/file", async (req, res) => {
    const { key } = req.query;
    if (!key || typeof key !== "string") { return res.status(400).json({ error: "Missing or invalid file key" }); }

    try {
        await checkFileExists(key);

        const command = new DeleteObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: key,
        });

        await s3.send(command);
        res.json({ message: "File deleted successfully" });

    } catch (error) {
        console.error("S3 delete error:", error);
        if (error.name === "NotFound") { return res.status(404).json({ error: "File not found" }); }
        res.status(500).json({ error: "Failed to delete file" });
    }
});

async function checkFileExists(key) {
    const command = new HeadObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
    });
    await s3.send(command);
}

export default router; 