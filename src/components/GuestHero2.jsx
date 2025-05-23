import { BiStore } from "react-icons/bi"; 
import { FaShippingFast } from "react-icons/fa"; 
import { GiReturnArrow } from "react-icons/gi"; 
export default function GuestFeatures() {
  return (
    <section className="bg-white shadow-md grid grid-cols-1 md:grid-cols-3 text-center max-w-7xl mx-auto -mt-16 relative z-20 rounded-lg overflow-hidden">
      <div className="p-8">
        <center><GiReturnArrow /></center>
        <h3 className="font-bold text-lg">Return Policy</h3>
        <p className="text-gray-600">Money back guarantee</p>
      </div>
      <div className="p-8 border-l border-r border-gray-200">
        <center><FaShippingFast /></center>
        <h3 className="font-bold text-lg">Free Shipping</h3>
        <p className="text-gray-600">On all orders over $25.00</p>
      </div>
      <div className="p-8">
        <center><BiStore /></center>
        <h3 className="font-bold text-lg">Store Locator</h3>
        <p className="text-gray-600">Find your nearest store</p>
      </div>
    </section>
  );
}
