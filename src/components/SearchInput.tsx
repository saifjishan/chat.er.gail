interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="w-full max-w-xl relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Enter a name like "Hosni"'
        className="w-full px-6 py-4 text-lg rounded-full border-4 border-white bg-white/90 
                 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30
                 shadow-lg"
      />
    </div>
  );
}