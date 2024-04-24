import type {Metadata} from "next";
import "bootstrap/dist/css/bootstrap.css";
import '@fontsource-variable/pixelify-sans';
import "./globals.css";
import LayoutContent from "@/components/LayoutContent";

export const metadata: Metadata = {
    title: "Codédex Personality Quiz",
    description: "Find your Codédex course type!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body>
        <LayoutContent>
            {children}
        </LayoutContent>
        </body>
        </html>
    );
}