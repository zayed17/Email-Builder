import { Request, Response } from "express";
import fs from "fs";
import path from "path";

/**
 * @description Handles fetching the email layout HTML file.
 * @route       GET /api/email/getEmailLayout
 * @access      Public
 */
export const getEmailLayout = async (req: Request, res: Response): Promise<void> => {
    try {
        const layoutFilePath = path.resolve(__dirname, "../views/layout.html");

        // Read email template asynchronously with error handling
        fs.readFile(layoutFilePath, "utf8", (err, data) => {
            if (err) {
                console.error(`[ERROR] Error reading file: ${err.message}`);
                res.status(500).json({ message: "Error reading the email template." });
                return;
            }

            res.status(200).json({ layout: data });
        });

    } catch (error) {
        console.error(`[ERROR] Unexpected error: ${(error as Error).message}`);
        res.status(500).json({ message: "Internal server error occurred." });
    }
};
