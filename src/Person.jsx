import React from 'react';

function Person({
    setProceed,
    setShipName,
    setShipAddy,
    setShipRegion,
    setBillName,
    setBillAddy,
    setBillRegion,
    shipName,
    shipAddy,
    shipRegion,
    billName,
    billAddy,
    billRegion,
    setBillDate,
    setBillNumber,
    billDate,
    billNumber,
}) {
    return (
        <div className="w-screen h-screen flex flex-col items-center ">
            <h1 className="text-2xl">Billing Details</h1>

            <div className="flex flex-col items-center pt-16 space-y-8">
                <input
                    placeholder="Order Number (don't include the #)"
                    className="p-2 border border-black rounded-lg w-96"
                    onChange={(e) => setBillNumber(e.target.value)}
                    value={billNumber}
                />
                <input
                    placeholder="Order Date"
                    className="p-2 border border-black rounded-lg"
                    type={'date'}
                    onChange={(e) => setBillDate(e.target.value)}
                    value={billDate}
                />
            </div>

            <div className="flex flex-row w-full gap-[30%] justify-center px-[20%] pt-24">
                <div className="flex flex-col border border-black rounded-lg p-4 gap-y-8">
                    <h1 className="text-center text-2xl">Ship To</h1>
                    <input
                        placeholder="Name"
                        className="p-2 border border-black rounded-lg"
                        value={shipName}
                        onChange={(e) => {
                            setShipName(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Street Address"
                        className="p-2 border border-black rounded-lg"
                        value={shipAddy}
                        onChange={(e) => {
                            setShipAddy(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Region, State and Zip"
                        className="p-2 border border-black rounded-lg w-96"
                        value={shipRegion}
                        onChange={(e) => {
                            setShipRegion(e.target.value);
                        }}
                    />
                </div>

                <div className="flex flex-col border border-black rounded-lg p-4 gap-y-8">
                    <h1 className="text-center text-2xl">Bill To</h1>
                    <input
                        placeholder="Name"
                        className="p-2 border border-black rounded-lg"
                        value={billName}
                        onChange={(e) => {
                            setBillName(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Street Address"
                        className="p-2 border border-black rounded-lg"
                        value={billAddy}
                        onChange={(e) => {
                            setBillAddy(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Region, State and Zip"
                        className="p-2 border border-black rounded-lg w-96"
                        value={billRegion}
                        onChange={(e) => {
                            setBillRegion(e.target.value);
                        }}
                    />
                </div>
            </div>
            <button
                className="mt-48 p-2 px-8 bg-slate-700 rounded-lg text-white"
                onClick={() => setProceed(true)}
            >
                Next
            </button>
        </div>
    );
}

export default Person;
