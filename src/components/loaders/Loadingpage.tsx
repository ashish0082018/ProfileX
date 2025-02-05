export default function Loadingpage() {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-zinc-900 text-white">
        <h2 className="text-xl font-semibold mb-4">Loading...</h2>
        <div className="w-60 h-1 bg-zinc-700 relative overflow-hidden rounded-full">
          <div className="h-full w-1/3 bg-white animate-slide"></div>
        </div>
      </div>
    );
  }
  