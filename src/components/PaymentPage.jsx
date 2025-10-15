import React from 'react';
import { Building, CreditCard, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const bankDetails = {
    bankName: 'First Bank PLC',
    accountName: 'University Housing Account',
    accountNumber: '1234567890',
    reference: 'HST-2024-001',
  };
  // Test handler for selection
  const handleMethodSelect = (method) => {
    console.log('Selected method:', method);
    setPaymentMethod(method);
  };

  return (
    <div className='max-w-2xl mx-auto px-4 py-8'>
      <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold text-blue-900 mb-2'>
            Select Payment Method
          </h2>
          <p className='text-gray-600'>Choose how you would like to pay</p>
        </div>

        {/* Payment Options */}
        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          {/* Bank Transfer Option */}
          <div
            onClick={() => handleMethodSelect('bank')}
            className={`border-2 rounded-xl p-6 cursor-pointer transition-all 
              hover:shadow-lg ${
                paymentMethod === 'bank'
                  ? 'border-cyan-500 bg-cyan-50/80'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
          >
            <div className='flex items-center gap-3 mb-3'>
              <Building className='w-7 h-7 text-cyan-600' />
              <h3 className='font-bold text-lg text-blue-900'>Bank Transfer</h3>
            </div>
            <p className='text-sm text-gray-600'>
              Transfer directly to our bank account
            </p>
          </div>

          {/* Card Payment Option */}
          <div
            onClick={() => handleMethodSelect('card')}
            className={`border-2 rounded-xl p-6 cursor-pointer transition-all 
              hover:shadow-lg ${
                paymentMethod === 'card'
                  ? 'border-cyan-500 bg-cyan-50/80'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
          >
            <div className='flex items-center gap-3 mb-3'>
              <CreditCard className='w-7 h-7 text-cyan-600' />
              <h3 className='font-bold text-lg text-blue-900'>Card Payment</h3>
            </div>
            <p className='text-sm text-gray-600'>
              Pay with your debit or credit card
            </p>
          </div>
        </div>

        {/* Payment Details Section */}
        {paymentMethod === 'bank' && (
          <div className='bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8'>
            <h3 className='font-bold text-lg text-blue-900 mb-4'>
              Bank Transfer Details
            </h3>
            <div className='space-y-4'>
              {Object.entries(bankDetails).map(([key, value]) => (
                <div key={key}>
                  <p className='text-sm text-gray-600 mb-1'>
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </p>
                  <p
                    className={`font-semibold text-blue-900 ${
                      key === 'accountNumber' ? 'text-xl' : ''
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ))}

              <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6'>
                <div className='flex gap-2 items-center text-yellow-800'>
                  <AlertCircle className='w-5 h-5 shrink-0' />
                  <p className='text-sm'>
                    <strong>Important:</strong> Please use the payment reference
                    above when making your transfer
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'card' && (
          <div className='bg-gray-50 border-2 border-gray-200 rounded-xl p-8 mb-8 text-center'>
            <CreditCard className='w-16 h-16 text-gray-400 mx-auto mb-4' />
            <h3 className='font-bold text-xl text-gray-700 mb-2'>
              Currently Not Available
            </h3>
            <p className='text-gray-600'>Coming Soon</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex justify-between gap-4'>
          <Link to={'/rooms/:id'}>
            <button
              onClick={() => console.log('calma')}
              className='flex-1 px-10 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold 
              hover:bg-gray-300 transition-all active:scale-98'
            >
              Back
            </button>
          </Link>

          <Link to={'/rooms/:id/payment/success'}>
            <button
              onClick={console.log('calma')}
              disabled={paymentMethod === 'card'}
              className={`flex-1 px-4 py-4 rounded-xl font-semibold transition-all 
              shadow-lg active:scale-98 ${
                paymentMethod === 'card'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
              }`}
            >
              {paymentMethod === 'card'
                ? 'Not Available'
                : 'I Have Made Payment'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
