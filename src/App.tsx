import { useState } from 'react';
import { Background } from './components/Background';
import { Logo } from './components/Logo';
import { SearchInput } from './components/SearchInput';
import { GenerateButton } from './components/GenerateButton';

function App() {
  const [name, setName] = useState('');

  const handleGenerate = () => {
    // TODO: Implement generation logic
    console.log('Generating for:', name);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 px-4">
      <Background />
      
      <Logo />
      
      <div className="w-full max-w-xl flex flex-col items-center gap-4">
        <SearchInput value={name} onChange={setName} />
        <GenerateButton onClick={handleGenerate} />
      </div>
    </div>
  );
}

export default App;