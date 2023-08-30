import React, { useEffect, useState } from 'react';
import CardMovie from '../CardMovie/CardMovie';
import Pagination from '../Pagination/Pagination';
export default function CardList({dataApi,getPage,pageCount}) {
  return (
    <div>
      <div className='container'>
        <div className="row my-4">
          {dataApi.length>1?(dataApi.map((ele,index)=><CardMovie key={index} ele={ele}/>)):<div>Not Data vailable</div>}
          {dataApi.length>1?<Pagination getPage={getPage} pageCount={pageCount} />:null}
        </div>

      </div>
    </div>
  )
}
