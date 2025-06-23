import { Link } from 'react-router'

const Card = ({plant}) => {
  const {_id,name, quantity,category, price, image}=plant || {}
  return (
    <Link
      to={`/plant/${_id}`}
      className='col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'
    >
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={image}
            alt='Plant Image'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>{name}</div>
        <div className='font-semibold text-lg'>Category: {category}</div>
        <div className='font-semibold text-lg'>Quantity: {quantity}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'> Price: {price}$</div>
        </div>
      </div>
    </Link>
  )
}

export default Card
