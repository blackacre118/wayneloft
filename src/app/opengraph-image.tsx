import { ImageResponse } from "next/og";

export const alt = "WAYNE — 1200 Sixth Street, Corktown, Detroit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_PATH = "M1000.00 10.00 L999.75 113.25 L1000.50 114.25 L1097.25 114.25 L1099.00 113.50 L1117.75 94.75 L1118.25 93.25 L1029.50 93.00 L1028.75 92.25 L1028.75 72.50 L1029.50 71.75 L1087.25 71.50 L1089.00 70.75 L1106.50 53.25 L1030.25 53.00 L1028.75 51.50 L1028.75 32.00 L1030.50 30.50 L1101.00 30.75 L1103.00 29.75 L1122.00 10.00 Z M763.00 10.00 L763.25 114.00 L791.75 113.75 L791.75 52.50 L793.50 51.25 L870.00 113.75 L892.75 113.75 L892.25 9.75 L864.50 9.75 L863.75 10.50 L864.00 72.25 L862.75 74.00 L860.25 73.25 L783.50 10.00 Z M527.25 10.25 L581.00 64.00 L581.25 113.25 L582.25 114.00 L609.50 114.00 L610.50 113.25 L610.75 64.00 L664.25 10.25 L630.50 10.25 L596.00 44.50 L560.75 10.00 Z M303.00 32.50 L302.50 113.25 L303.25 114.00 L331.50 113.75 L331.75 84.00 L332.75 83.25 L399.50 83.25 L400.75 84.75 L400.75 113.50 L429.75 113.50 L429.75 33.25 L406.50 10.00 L326.00 10.00 Z M331.75 31.50 L333.25 30.50 L399.25 30.50 L400.75 32.25 L400.75 61.25 L399.25 63.00 L333.00 63.00 L331.50 61.25 Z M9.75 10.25 L65.50 113.25 L67.50 114.25 L94.25 113.75 L107.25 90.75 L108.75 91.00 L121.25 113.75 L149.75 113.75 L205.75 11.00 L205.25 9.75 L178.50 9.75 L176.50 10.50 L138.75 80.00 L136.25 83.50 L135.00 83.50 L122.75 61.25 L150.25 10.00 L121.25 10.00 L110.00 30.50 L108.25 32.75 L107.00 32.75 L94.00 10.00 L65.50 9.75 L65.25 11.00 L93.00 61.50 L82.00 82.25 L80.00 83.50 L78.00 81.50 L39.50 10.75 L37.25 9.75 Z";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#05070D",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <svg width="680" height="75" viewBox="0 0 1132 124">
          <path fill="#E9E5DD" fillRule="evenodd" d={LOGO_PATH} />
        </svg>
        <div style={{ marginTop: 48, color: "#8A93A6", fontSize: 22, letterSpacing: 8 }}>
          1200 SIXTH STREET · CORKTOWN · DETROIT
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "rgba(233,229,221,0.12)" }} />
        <div style={{ position: "absolute", left: 80, bottom: 0, width: 220, height: 2, background: "#FF5A1F" }} />
      </div>
    ),
    size,
  );
}
