import React from 'react'

import { IoMdShare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

function MapData({data}) {
  return (
    <>
        <div className="container">
            {
                data.map((obj)=>{
                    return <div className="card">
                        {/* left */}
                        <div className="left">
                           <div className="top">
                                <img src={obj.poster} alt="" />
                                <div className="content">
                                    <h3>{obj.name}</h3>
                                    <p className='release-date'>{obj.release}</p>
                                    <p>
                                        <span className='duration'>{obj.duration}</span> <span>{obj.genre}</span>
                                    </p>
                                </div>
                           </div>
                           <div className="bottom">
                                <p>{obj.description}</p>
                                <div className="icons">
                                    <IoMdShare />
                                    <FaRegHeart />
                                    <FaRegCommentAlt />
                                </div>
                           </div>
                        </div>
                        {/* right */}
                        <div className="right">
                            <img src={obj.highlight} alt="" />
                        </div>
                    </div>
                })
            }
        </div>
    </>
  )
}

export default MapData