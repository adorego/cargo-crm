import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CrmCargoTheme from "@/components/theme/crm-cargo-theme";
import DatePickerCargo from "@/components/dateAdapter/date-picker";
import TopBar from "@/components/layout/topBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cargo-CRM",
  description: "CRM para Comercio Internacional",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
        <CrmCargoTheme>
          <DatePickerCargo>
            <body>{children}</body>
          </DatePickerCargo>
          
        </CrmCargoTheme>
      
    </html>
  );
}
