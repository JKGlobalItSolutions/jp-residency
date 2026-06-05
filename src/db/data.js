// export const rooms = [
//   {
//     id: 'standard-room',
//     title: 'Standard Room',
//     description: 'A cozy room with all the basic amenities.',
//     price: 100,
//     size: '250 sq ft',
//     maxGuests: 2,
//     view: 'City View',
//     image: '../assets/standard-room.jpg',
//   },
//   {
//     id: 'deluxe-room',
//     title: 'Deluxe Room',
//     description: 'A more spacious room with a beautiful view.',
//     price: 150,
//     size: '350 sq ft',
//     maxGuests: 3,
//     view: 'Ocean View',
//     image: '/src/assets/deluxe-room.jpg',
//   },
//   {
//     id: 'suite-room',
//     title: 'Suite',
//     description: 'A luxurious suite with a separate living area.',
//     price: 250,
//     size: '500 sq ft',
//     maxGuests: 4,
//     view: 'Mountain View',
//     image: '/src/assets/suite-room.jpg',
//   },
// ];

export const pournamiCalendarData = {
  dates: [
    { date: "2026-06-29", label: "Pournami", note: "Girivalam night" },
    { date: "2026-07-29", label: "Pournami", note: "Full moon Girivalam" },
    { date: "2026-08-27", label: "Pournami", note: "Special pilgrimage day" },
    { date: "2026-09-26", label: "Pournami", note: "Full moon Girivalam" },
    { date: "2026-10-25", label: "Pournami", note: "Special pilgrimage day" },
    { date: "2026-11-24", label: "Pournami", note: "Full moon Girivalam" },
    { date: "2026-12-24", label: "Pournami", note: "Special pilgrimage day" },
    { date: "2027-01-22", label: "Pournami", note: "Full moon Girivalam" },
  ],
  specialDates: [
    { date: "2026-06-29", label: "Girivalam", badge: "Pilgrimage Night" },
    { date: "2026-07-29", label: "Pournami Girivalam", badge: "High Demand" },
    { date: "2026-08-27", label: "Pournami Girivalam", badge: "Limited Rooms" },
  ],
  bookingUrgency: {
    roomAvailability: "85% Booked",
    roomsLeft: 3,
    highDemand: "High Demand This Weekend",
    limitedPournami: "Limited Availability During Pournami",
  },
};

export const whatsAppAssistantData = {
  phoneNumber: "919688866684",
  options: [
    {
      id: "availability",
      icon: "bi-calendar-check",
      title: "Check Room Availability",
      message: "Hello JP Residency, I would like to check room availability.",
    },
    {
      id: "location",
      icon: "bi-geo-alt",
      title: "Get Location & Navigation",
      message: "Hello JP Residency, please share your exact location and directions.",
    },
    {
      id: "group-booking",
      icon: "bi-people",
      title: "Group Booking Enquiry",
      message: "Hello JP Residency, I would like information about group bookings.",
    },
    {
      id: "pricing",
      icon: "bi-currency-rupee",
      title: "Room Pricing Details",
      message: "Hello JP Residency, please share your latest room prices.",
    },
    {
      id: "reception",
      icon: "bi-headset",
      title: "Speak to Reception",
      message: "Hello JP Residency, I would like to speak with reception.",
    },
  ],
};
