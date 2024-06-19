import Image from "next/image";
import styles from "./page.module.css";
import { Container, Grid, Typography } from "@mui/material";
import Quoter from "@/components/quoter";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/cargo_crm");
}
