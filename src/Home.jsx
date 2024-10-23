import { Link } from 'react-router-dom';
import backgroundImage from './assets/a plant image for a website background.png'; // Import the image

export default function Home() {
    return (
        <div> 
            <div className="min-h-screen  flex items-center justify-center bg-gray-300 pt-0"> {/* Add pt-16 for padding */}
                <div className="w-screen sm:text-black xs:text-white bg-cover bg-fixed h-screen bg-no-repeat flex flex-col justify-center items-center " style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <h2 className="ml-2 mr-2 text-4xl font-medium mb-4">Welcome to Houseplant Store</h2> {/* Use font-medium for lighter font */}
                    <p className="ml-2 mr-2 text-lg mb-6">Our company offers the best indoor plants for your home.</p>
                    <Link to="/products" className="ml-2 mr-2 bg-green-500 text-white py-2 px-4 rounded" >Get Started</Link>
                </div>
            </div>
        </div>
    );
}