import { Crown } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg tracking-wider">
          <span className="text-4xl align-top">ER'</span>
          CHET GAIL
        </h1>
        <Crown className="absolute -top-8 right-4 w-12 h-12 text-yellow-300 animate-pulse" />
      </div>
      <h2 className="text-yellow-200 text-xl mt-2 font-light tracking-wide">
        A CHATGAIYA SLUR DICTIONARY
      </h2>
    </div>
  );
}