import React from "react";
import { useNavigate } from "react-router-dom";
import GoldBullion from "../components/GoldBullion";

export default function GoldBullionPage() {
  const navigate = useNavigate();

  return <GoldBullion onBack={() => navigate(-1)} />;
}
