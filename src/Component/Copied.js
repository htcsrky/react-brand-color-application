import { getConstrastIQ } from "../helper";

export default function Copied({ color }) {
  return (
    <div
      className="copied"
      style={{
        "--bgColor": `#${color}`,
        "--textColor": `${getConstrastIQ(color)}`,
      }}
    >
      Copied #{color} to Clipboard
    </div>
  );
}
