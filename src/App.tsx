import { ShimmerButton } from "./components/magicui/shimmer-button";
import { ChevronDown } from "lucide-react";
export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black-600 mb-2">
        Zestrics
      </h1>
      <p className="text-gray-500 mb-5">Turning Data into Business Value</p>
      <ShimmerButton>
        Learn more <ChevronDown />
      </ShimmerButton>
    </div>
  );
}
