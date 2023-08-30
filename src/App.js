import React, { useEffect, useState } from 'react';
import { Route,BrowserRouter,Routes, createBrowserRouter, RouterProvider,createHashRouter } from 'react-router-dom'
import CardList from './Components/CardList/CardList';
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios';

export default function App() {
  let [dataApi,setDataApi]=useState([]);
  const [pageCount,setPageCount]=useState(0);
  const getPage=async(pageNum)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${pageNum}`)
    setDataApi(res.data.results)
    setPageCount(res.data.total_pages)
  }
  let router=createHashRouter([
    {path:'/',element:<CardList dataApi={dataApi} getPage={getPage} pageCount={pageCount}/>},
    {path:'/movie/:id',element:<MovieDetails />}
  ])
  async function  getAllMovies(){
    let res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar');
    console.log(res.data.results);
    setDataApi(res.data.results);
    setPageCount(res.data.total_pages)
  }
  useEffect(()=>{
    getAllMovies()
  },[])
  const searchByQuery=async(word)=>{
    if(word==""){
      getAllMovies()
    }else{
      let res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      console.log(res);
      setDataApi(res.data.results);
      setPageCount(res.data.total_pages)
    }
    
  }
 
  return (
    <>
    <Navbar searchByQuery={searchByQuery}/>
    <RouterProvider router={router}/>
    </>
    

  )
}
