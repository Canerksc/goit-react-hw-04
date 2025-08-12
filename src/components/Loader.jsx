import { MutatingDots} from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
      <MutatingDots height={80} width={80} color="#4d6aa9ff" visible={true} />
    </div>
  );
}
