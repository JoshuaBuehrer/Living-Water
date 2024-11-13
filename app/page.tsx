import { Map } from "../components/Map";

export default function Home() {
  return (
    <>
      <h1 style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: 1,
        color: "white",
      }}
        className="text-5xl font-thin">
        Living Water 2025
      </h1 >
      <Map />
    </>
  );
}
