import "./App.css";
import Currencyconverter from "./Components/Currencyconverter";

function App() {
  const imageAdd = 'https://images.pexels.com/photos/18332437/pexels-photo-18332437/free-photo-of-forest-trees-around-stream.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';

  return (
    <div 
      className="w-full h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${imageAdd}')`,
      backgroundSize: 'cover', // or 'contain'
      backgroundPosition: 'center' }}// centers the image 
    >
      <div className="min-h-screen bg-white bg-opacity-10 flex flex-col items-center justify-center">
        <div className="container">
          <Currencyconverter />
        </div>
      </div>
    </div>
  );
}



export default App;