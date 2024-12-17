import { useState } from 'react'

function App() {
  // Definisce uno stato chiamato 'title' 
 const [title, setTitle ] = useState("");

 // Funzione per gestire il cambiamento del valore dell'input
 const handleChange = (event) => { 
  const newValue = event.target.value;
  console.log(newValue);
  
  setTitle(newValue);
 };

 // Funzione per gestire l'invio del form
 const handleSubmit = (event) => {
  event.preventDefault();
  
};

  return (
    <>
      <header>
        <h1></h1>
      </header>
      <main className='container mt-5'>
        <div className='row w-50'>
          <form onSubmit={handleSubmit} >
            <div className='mb-3'>
              <label className='form-label' htmlFor="title">Titolo</label>
              <input
               className='form-control' 
               type="text" id='title'
               // Imposta il valore dell'input come 'title'
               value = {title}
               // Chiama handleChange quando il valore dell'input cambia
               onChange={handleChange}
               />
            </div>
            <button type="submit">Invia</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
