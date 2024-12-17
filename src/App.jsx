import { useState } from 'react'

function App() {
  

  return (
    <>
      <header>
        <h1></h1>
      </header>
      <main className='container mt-5'>
        <div className='row w-50'>
          <form >

            <label className='form-label' htmlFor="title">Titolo</label>
            <input className='form-control' type="text" id='title' />

          </form>
        </div>
      </main>
    </>
  )
}

export default App
