'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const MiniCad = () => {




  return (
    <div className="mini_card">
      <div className="top">
        <div className="left_top">
          <p>1</p>
        </div>
        <div className="right_top">
          <h6>
            1- Must-Have gadgets for each and every tech </h6>

        </div>
      </div>
      <div className="bottom">
        <div>
          <ul>
            <li>2 min read</li>
            <li>2.3k views</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>shares 628</li>
          </ul>
        </div>

        <div className='d-flex justify-content-end'>
          <Link href="#" className='read_more' >Read More</Link>
        </div>

      </div>
    </div>
  )
}

export default MiniCad
