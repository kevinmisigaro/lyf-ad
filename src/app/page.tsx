export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#23a455]">
      <div className="text-center">
        <img src="https://lyfplus.com/assets/img/logos/logo_light.png" className="w-[20vw] mb-20" />
        <a href="/home" className="bg-white text-[#23a455] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
          Login
        </a>
      </div>
    </div>
  );
}
