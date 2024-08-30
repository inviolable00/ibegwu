import IgalaHistory from "../components/history";
import { SpeedDiall } from "../components/speeddial";

export default function History() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0bg-opacity-50"></div>
        <IgalaHistory />
        <SpeedDiall/>
      </div>
    </>
  );
}
