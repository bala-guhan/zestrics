import { ShimmerButton } from "./components/magicui/shimmer-button";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        🚀 Tailwind is Working!
      </h1>
      <ShimmerButton>
        Click me
      </ShimmerButton>
    </div>
  );
}
