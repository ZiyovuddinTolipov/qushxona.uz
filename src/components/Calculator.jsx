import  { useState } from 'react';

const Calculator = () => {
    const [weight, setWeight] = useState('35');
    const [price, setPrice] = useState('3815000.00');

    const pricePerKg = 130000; // 1 kilogramm uchun narx (masalan, 10,000 so'm)

    const calculatePrice = (kg) => {
        const numericKg = parseFloat(kg);
        if (!isNaN(numericKg)) {
            setPrice((numericKg * pricePerKg).toFixed(2));
        } else {
            setPrice('');
        }
    };

    return (
        <div className="bg-secondary text-center py-6">
            <div className="p-5 mb-6 rounded flex justify-center">
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => {
                        setWeight(e.target.value);
                        calculatePrice(e.target.value);
                    }}
                    placeholder="Go'shtning kilosini kiriting"
                    className="px-5 py-3 w-full border rounded max-w-sm bg-background text-text"
                    min="0"
                />

                <input
                    type="text"
                    value={price + " so'm"}
                    readOnly
                    placeholder="Narxini ko'rsating"
                    className="px-5 py-3 w-full border rounded bg-background text-text max-w-sm"
                    disabled
                />
            </div>
            <a href='#delivery' className='mt-3 bg-primary text-secondary text-xl px-6 py-3'>Buyurtma</a>
        </div>
    );
};

export default Calculator;
