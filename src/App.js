// imports
import Animal from './Animal'
import Human from './Human';
import Car from './Car';

function App() {
  return (
    <div>
      <h1>Title</h1>
      <Animal mammal="dog" name="Rocco"/>
      <Animal mammal="cat" name="Garfield"/>
      <Human name="Rome" location="Bay Area"/>
      <Car />
    </div>
  );
}

export default App;
