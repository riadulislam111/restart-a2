import React from 'react';
import { Calendar } from 'lucide-react';

const TicketCard = ({ ticket }) => {
  const isHigh = ticket.priority === 'HIGH PRIORITY';
  const isMedium = ticket.priority === 'MEDIUM PRIORITY';
  const isOpen = ticket.status === 'Open';
}

const TicketCard = () => {
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-[#1e293b] text-[14px] leading-tight max-w-[75%]">
          {ticket.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${isOpen ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
          <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
          {ticket.status}
        </span>
      </div>
      
      <p className="text-gray-500 text-[12px] mb-4 line-clamp-2">
        {ticket.description}
      </p>

      <div className="flex justify-between items-center text-[11px] font-semibold">
        <div className="flex gap-3">
          <span className="text-gray-400">{ticket.id}</span>
          <span className={isHigh ? 'text-red-500' : isMedium ? 'text-yellow-500' : 'text-green-500'}>
            {ticket.priority}
          </span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <span>{ticket.customer}</span>
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
    );
};

export default TicketCard;