import React from 'react';
import {
  User,
  Home,
  Users,
  BedDouble,
  Building2,
  AlertCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoomSelectionPage = () => {
  const navigate = useNavigate();

  const studentInfo = {
    name: 'Mr. Patrick',
    appId: 'STD001',
    program: 'Cyber Security',
    level: 'Advanced Level',
    gender: 'Male',
  };

  const availableRooms = [
    {
      id: 'Room 101',
      block: 'Block A',
      capacity: 2,
      occupied: 1,
      price: '40k/Month',
      gender: 'Male',
    },
    {
      id: 'Room 502',
      block: 'Block E',
      capacity: 2,
      occupied: 1,
      price: '40k/Month',
      gender: 'Male',
    },

    {
      id: 'Room 302',
      block: 'Block E',
      capacity: 2,
      occupied: 1,
      price: '40k/Month',
      gender: 'Female',
    },
    {
      id: 'Room 202',
      block: 'Block E',
      capacity: 1,
      occupied: 0,
      price: '40k/Month',
      gender: 'Female',
    },
    // Add more rooms as needed
  ];
  const filteredRooms = availableRooms.filter(
    (room) =>
      room.gender === studentInfo.gender && room.occupied < room.capacity
  );

  return (
    <div className='max-w-6xl w-full mx-auto px-4 pt-20 pb-10'>
      {/* Student Info Card */}
      <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
          <div className='w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shrink-0'>
            <User className='w-7 h-7 text-green-600' />
          </div>
          <div className='space-y-1'>
            <h3 className='font-bold text-xl text-blue-900'>
              {studentInfo.name}
            </h3>
            <div className='flex flex-wrap gap-2'>
              <span className='text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full'>
                {studentInfo.appId}
              </span>
              <span className='text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full'>
                {studentInfo.program}
              </span>
              <span className='text-sm px-3 py-1 bg-amber-100 text-amber-700 rounded-full'>
                Level {studentInfo.level}
              </span>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  studentInfo.gender === 'Male'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-pink-100 text-pink-700'
                }`}
              >
                {studentInfo.gender}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className='flex items-center gap-3 mb-6'>
        <Building2 className='w-8 h-8 text-cyan-400' />
        <h2 className='text-2xl font-bold text-white'>Available Rooms</h2>
      </div>

      {/* No Rooms Message */}
      {filteredRooms.length === 0 && (
        <div className='bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center'>
          <AlertCircle className='w-12 h-12 text-amber-500 mx-auto mb-4' />
          <h3 className='text-xl font-bold text-blue-900 mb-2'>
            No Rooms Available
          </h3>
          <p className='text-gray-600'>
            There are currently no available rooms matching your gender (
            {studentInfo.gender}). Please check back later or contact the
            housing office for assistance.
          </p>
        </div>
      )}

      {/* Rooms Grid */}
      {filteredRooms.length > 0 && (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => navigate('/rooms/:id')}
              className='group bg-white/90 backdrop-blur-sm rounded-xl p-6 cursor-pointer 
                hover:shadow-xl transition-all hover:scale-102 border-2 border-transparent 
                hover:border-cyan-500'
            >
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3
                    className='text-xl font-bold text-blue-900 group-hover:text-cyan-600 
                    transition-colors'
                  >
                    {room.id}
                  </h3>
                  <p className='text-sm text-gray-600'>{room.block}</p>
                </div>
                <Home
                  className='w-6 h-6 text-cyan-500 group-hover:scale-110 
                  transition-transform'
                />
              </div>

              <div className='space-y-3 mb-4'>
                <div className='flex items-center gap-2 text-sm'>
                  <BedDouble className='w-4 h-4 text-gray-500' />
                  <span className='text-gray-700'>
                    {room.capacity} Bed Room
                  </span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <Users className='w-4 h-4 text-gray-500' />
                  <span className='text-gray-700'>
                    {room.capacity - room.occupied} Space
                    {room.capacity - room.occupied > 1 ? 's' : ''} Available
                  </span>
                </div>
              </div>

              <div className='flex justify-between items-center pt-4 border-t border-gray-100'>
                <span className='text-lg font-bold text-blue-900'>
                  {room.price}
                </span>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium
                  ${
                    room.gender === 'Male'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-pink-100 text-pink-700'
                  }`}
                >
                  {room.gender}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomSelectionPage;
