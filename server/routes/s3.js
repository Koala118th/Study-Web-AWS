import express from "express";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const s3 = new S3Client({
    region: process.env.S3_BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

router.post("/getFile", async (req, res) => {
    const { key } = req.body;

    try {
        const command = new GetObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: key,
        });

        console.log("Creating signed URL...");

        const url = await getSignedUrl(s3, command, {
            expiresIn: 60,
        });

        console.log("Signed URL generated successfully:");
        console.log(url);

        res.json({ url });

    } catch (error) {
        console.error("S3 ERROR:");
        console.error(error);

        res.status(500).json({
            error: error.message,
        });
    }
});

export default router; 