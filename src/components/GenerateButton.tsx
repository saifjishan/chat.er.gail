interface GenerateButtonProps {
  onClick: () => void;
}

export function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-12 py-3 text-xl font-bold bg-purple-900 text-yellow-200 
                rounded-full transform hover:scale-105 transition-transform
                shadow-lg hover:shadow-xl active:scale-95"
    >
      GENERATE
    </button>
  );
}