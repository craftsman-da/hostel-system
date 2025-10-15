import React from 'react';
import { CheckCircle, Home, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessPage = ({
  selectedRoom = {
    id: 'Room 101',
    block: 'Block A',
    capacity: 4,
  },
  goHome = () => {},
}) => {
  return (
    <div className='max-w-md w-full mx-auto px-4 py-8'>
      <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center'>
        {/* Success Icon */}
        <div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <CheckCircle className='w-14 h-14 text-green-600' />
        </div>

        {/* Header */}
        <h2 className='text-3xl font-bold text-blue-900 mb-2'>
          Allocation Complete!
        </h2>
        <p className='text-gray-600 mb-8'>
          Your hostel room has been successfully allocated
        </p>

        {/* Room Details */}
        <div className='bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-8'>
          <div className='flex justify-center mb-2'>
            <Home className='w-6 h-6 text-blue-600' />
          </div>
          <p className='text-sm text-gray-600 mb-1'>Allocated Room</p>
          <p className='text-3xl font-bold text-blue-900 mb-4'>
            {selectedRoom.id}
          </p>
          <p className='text-sm text-gray-700'>
            {selectedRoom.block} • {selectedRoom.capacity} Bed Room
          </p>
        </div>

        {/* Payment Verification Notice */}
        <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8'>
          <div className='flex items-center gap-3 mb-3'>
            <Send className='w-5 h-5 text-yellow-600' />
            <p className='text-sm font-semibold text-yellow-800'>
              Payment Verification in Progress
            </p>
          </div>
          <p className='text-sm text-gray-700'>
            Your payment is being verified. You will receive a confirmation
            email once payment is confirmed. Please keep your payment receipt
            for reference and visit the facility with it.
          </p>
        </div>

        {/* Action Button */}
        <Link to={'/'}>
          <button
            onClick={goHome}
            className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white 
            py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 
            transition-all shadow-lg active:scale-98'
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
