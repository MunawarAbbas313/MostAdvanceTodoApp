import { store } from './Redux/Store';
import { Provider } from 'react-redux';
import './App.css';
import Todoinput from './Components/Todoinput';
import Todolist from './Components/Todolist';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <Provider store={store}>
      {/* For sticky footer use flex layout */}
      <div className="flex flex-col min-h-screen">
        <NavBar />

        {/* Main content takes all remaining space */}
        <main className="flex-grow">
          <Todoinput />
          <Todolist />
        </main>

        {/* Footer sticks at bottom */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
