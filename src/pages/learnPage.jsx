import LearnIgala from "../components/learn";
import { SpeedDiall } from "../components/speeddial";

export default function LearnPage() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <LearnIgala />
        <SpeedDiall />
      </div>
    </>
  );
}
