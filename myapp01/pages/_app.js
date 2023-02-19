import Navbar from '../components/navbar';
import Navbar2 from '../components/navbar2';
import '../styles/globals.css';



function App({ Component, pageProps }) {
  return (
    <>
    {/*<Navbar />
    <Navbar2 />*/}

{/* <Navbar2 /> */}
<Navbar />
    
    <Component {...pageProps} />
    </>
    
    
  );
    
    
}
export default App;
