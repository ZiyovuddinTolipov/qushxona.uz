import  { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Calculator = () => {
    const [weight, setWeight] = useState('10');
    const [price, setPrice] = useState('1300000');

    const pricePerKg = 130000; 

    const calculatePrice = (kg) => {
        const numericKg = parseFloat(kg);
        if (!isNaN(numericKg)) {
            setPrice((numericKg * pricePerKg).toFixed(2));
        } else {
            setPrice('');
        }
    };

    return (
        <div className="bg-secondary text-center py-8 px-6 rounded-lg shadow-md w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Go&apos;sht narxi kalkulyatori</h2>
            <div className="flex flex-col md:flex-row md:justify-center md:items-end space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col items-start">
                    <label htmlFor="weight" className="mb-2 text-lg font-medium text-text">
                        Go&apos;sht og&apos;irligi (kg):
                    </label>
                    <input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => {
                            setWeight(e.target.value);
                            calculatePrice(e.target.value);
                        }}
                        placeholder="Masalan: 5"
                        className="px-4 py-3 w-full md:w-64 border rounded bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                        min="0"
                        step="0.1"
                    />
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="price" className="mb-2 text-lg font-medium text-text">
                        Umumiy narx:
                    </label>
                    <input
                        id="price"
                        type="text"
                        value={`${Number(price).toLocaleString()} so'm`}
                        readOnly
                        className="px-4 py-3 w-full md:w-64 border rounded bg-background text-text font-semibold text-lg"
                        disabled
                    />
                </div>
            </div>
            <a 
                href='#delivery' 
                className='mt-8 inline-block bg-primary text-secondary text-xl px-8 py-4 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out flex items-center gap-2 max-w-sm mx-auto justify-center'
            >
                Buyurtma berish <FaArrowDown />
            </a>
        </div>
    );
};

export default Calculator;
