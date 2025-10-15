import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConfirmationPage = ({
  // Providing default props to ensure component always renders
  studentInfo = {
    name: 'John Doe',
    appId: 'STD001',
    program: 'Computer Science',
    level: '300',
  },
  selectedRoom = {
    id: 'Room 502',
    block: 'Block E',
    capacity: 2,
    gender: 'Male',
    price: '40k/month',
  },

  handleConfirmRoom = () => {},
}) => {
  return (
    <div className='max-w-2xl w-full mx-auto px-4 py-8'>
      <div className='bg-white/90  backdrop-blur-sm rounded-xl shadow-xl p-8'>
        <div className='text-center mb-8'>
          <div className='w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <CheckCircle className='w-10 h-10 text-cyan-600' />
          </div>
          <h2 className='text-2xl font-bold text-blue-900 mb-2'>
            Confirm Selection
          </h2>
          <p className='text-gray-600'>Please review your room selection</p>
        </div>

        {/* Details Section */}
        <div className='space-y-4 mb-8'>
          <div className='bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors'>
            <p className='text-sm text-gray-600 mb-1'>Student Name</p>
            <p className='font-semibold text-blue-900'>{studentInfo.name}</p>
          </div>

          <div className='bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors'>
            <p className='text-sm text-gray-600 mb-1'>Selected Room</p>
            <p className='font-semibold text-blue-900'>
              {selectedRoom.id} - {selectedRoom.block}
            </p>
          </div>

          <div className='bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors'>
            <p className='text-sm text-gray-600 mb-1'>Room Type</p>
            <p className='font-semibold text-blue-900'>
              {selectedRoom.capacity} Bed Room ({selectedRoom.gender})
            </p>
          </div>

          <div className='bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors'>
            <p className='text-sm text-gray-600 mb-1'>Accommodation Fee</p>
            <p className='font-bold text-xl text-blue-900'>
              {selectedRoom.price}
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className='flex gap-4 justify-between'>
          <Link to={'/rooms'}>
            <button
              className='flex-1 px-10 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold
              hover:bg-gray-300 transition-all active:scale-98'
            >
              Back
            </button>
          </Link>

          <Link to={'/rooms/:id/payment'}>
            <button
              onClick={handleConfirmRoom}
              className='flex-2 px-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white 
              py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 
              transition-all shadow-lg active:scale-98'
            >
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
