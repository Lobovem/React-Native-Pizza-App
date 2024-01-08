import { FC, useState } from 'react';
import HomeScreens from './src/screens/home/screens/HomeScreen';

const App: FC = () => {
  const [textInput, setTextInput] = useState('');

  return <HomeScreens textInput={textInput} setTextInput={setTextInput} />;
};

export default App;
