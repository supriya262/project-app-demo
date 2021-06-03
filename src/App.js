import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';

<script src="/assets/vendor/chart.js/dist/Chart.extension.js"></script>
function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Menu/>
      
      <Dashboard/>
      <Footer/>
      
    </div>
  );
}

export default App;
