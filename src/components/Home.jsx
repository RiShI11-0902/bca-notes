import axios from 'axios';
import React, { useEffect, useState } from 'react'
// const dcnFiles = "https://bca-notes-codecollege.netlify.app/dcn.zip"
// const aspFiles = "https://bca-notes-codecollege.netlify.app/asp.zip"
// const cgFiles = "https://bca-notes-codecollege.netlify.app/cg.zip"
// const phpFiles = "https://bca-notes-codecollege.netlify.app/php.zip"
// const stFiles = "https://bca-notes-codecollege.netlify.app/st.zip"
// const javaFiles = "https://bca-notes-codecollege.netlify.app/java.zip"
const Home = () => {
  // const downloadFile = (url) => {
  //   const FileName = url.split("/").pop()
  //   const aTag = document.createElement('a')
  //   aTag.href = url
  //   aTag.setAttribute("download", FileName)
  //   document.body.appendChild(aTag)
  //   aTag.click()
  //   aTag.remove()
  // }
  return (
    <>

      <div className="title w-fit p-5">
        <h1 className='text-4xl font-medium'>BCA SEM 6 NOTES</h1>
        <span>By:- <a className='text-blue-400 font-extrabold underline' href='https://rishi-codes.netlify.app/'>@CodeCollege</a></span>
        <div className="font-semibold p-3 mt-5 underline">
          Note:- These are self made notes and does not gurantee full marks in exam. So, the creator is not  responsible for your result.
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 flex-wrap h-full mt-[2rem] w-fit mx-auto gap-5'>

        <a href="https://drive.google.com/drive/folders/1afx8cpGPF61_uAuv-154BOxknB7zsunD?usp=share_link" >
          <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            Download DCN
          </button>
        </a>

        <a href="https://drive.google.com/drive/folders/1aCR4rVNvNACy42sog43-e6xw94z_tavb?usp=share_link" >
          <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download CG</button>
        </a>
        <a href="https://drive.google.com/drive/folders/1MaZaKKKWvVeoF3eRLQBm_RWJfXoGgr_7?usp=share_link">
          <button type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download ASP</button>
        </a>
        <a href="https://drive.google.com/drive/folders/1K2L0UuUaK5sOj9rlGkJYEagKD6mEha9G?usp=share_link" >

          <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download JAVA</button>
        </a>

        <a href="https://drive.google.com/drive/folders/1l1tTEK-_3cpM1k69QOXJCP7AdeOtAKwU?usp=share_link" >
          <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download ST</button>
        </a>
        <a href="https://drive.google.com/drive/folders/13jF_7oS79PRc_jNWhQJCfuobPujwIUu_?usp=share_link" >
          <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download PHP</button>
        </a>

      </div>
    </>
  )
}

export default Home