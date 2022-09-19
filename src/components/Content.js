import React from 'react';
import { useSelector } from 'react-redux';



function Content() {
  const data = useSelector((state) => state.items);
  return (
    <div>
        {
            data.items.map(item => {
                return <div key={item.id}><img className='img' alt='logo'  src={item.img} /></div>
            })
        }
    </div>
  )
}

export default Content
