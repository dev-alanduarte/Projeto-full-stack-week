import React from 'react'
import { Trip } from '@prisma/client'
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

interface TripItemProps {
    trip: Trip;
}

const TripItem = (props: TripItemProps) => {
  const { trip } = props; // Extrair a propriedade 'trip' do objeto 'props'

  const pricePerdayString = trip.pricePerday.toString(); // Converter Decimal para string

  return (
    <div className='flex flex-col'>

        <div className="relative h-[280px] w-[280px]">
        <Image src={trip.coverImage} className='rounded-lg shadow-md' 
        style={{objectFit: 'cover'
        }}      
        fill alt={trip.name}/>
        </div>

        <h3 className='text-primaryDarker font-medium text-sm mt-2'>{trip.name}</h3>
        <div className="flex items-center gap-1 my-1">
            <ReactCountryFlag countryCode={trip.countryCode} svg/>
            <p className='text-xs text-grayPrimary'>{trip.location}</p>
            <p className='text-xs text-grayPrimary'>
            <span className='text-primary'>R${pricePerdayString}</span> por dia {/* Usar a string convertida */}
            </p>
        </div>
    </div>
  )
}

export default TripItem

