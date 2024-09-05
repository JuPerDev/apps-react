import { palabras } from "../helpers/data.json";
import { useState, useEffect } from "react";
import "./Scramble.css";

export const Scramble = () => {
  const [palabraOculta, setPalabraOculta] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [usedWords, setUsedWords] = useState([]);
  const [message, setMessage] = useState(
    <div className='text-light container-md mt-2 p-2 rounded bg-primary text-center'>
      Bienvenido, debes adivinar la mayor cantidad de pokemon que puedas!
    </div>
  );
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleInputValue = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const getRandomWord = () => {
    let newWord;
    if (usedWords.length >= palabras.length) {
      setMessage(
        <div className='text-light container-md mt-2 p-2 rounded bg-success text-center'>
          FELICITACIONES COMPLETASTE ES JUEGO :D!
        </div>
      );
      return null;
    }

    do {
      const randomIndex = Math.floor(Math.random() * palabras.length);
      newWord = randomIndex;
    } while (usedWords.includes(newWord) && usedWords.length < palabras.length);
    setUsedWords((prevUsedWords) => [...prevUsedWords, newWord]);
    setPalabraOculta(newWord);
    setIsImageVisible(false);
  };

  const validate = () => {
    if (palabras[palabraOculta].correcta === inputValue.toUpperCase()) {
      setScore(score + 10);
      setMessage(
        <div className='text-light container-md mt-2 p-2 rounded bg-success text-center'>
          Felicidades es Correcta!
        </div>
      );
      setIsImageVisible(true);
    } else {
      setInputValue("");
      setMessage(
        <div className='text-light container-md mt-2 p-2 rounded bg-danger text-center'>
          Es incorrecto, intentalo nuevamente!
        </div>
      );
      setScore(score - 5);
    }
  };

  const comprobar = (event) => {
    event.preventDefault();
    validate();
  };

  const next = () => {
    getRandomWord();
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  if (palabraOculta === null) return null;

  return (
    <>
      <div className='container-md mt-4 bg-light rounded d-flex flex-column align-items-center justify-content-center p-2'>
        <h1>SCRAMBLE!</h1>
        <img
          src={palabras[palabraOculta].img}
          alt='Imagen pokemon correspondiente'
          width='100px'
          className={isImageVisible ? "color" : "grayscale"}
        />
        <h3 className='bg-danger text-light p-2 rounded'>
          {palabras[palabraOculta].incorrecta}
        </h3>
        <p>Pista: {palabras[palabraOculta].pista}</p>
        <form
          onSubmit={comprobar}
          className=' d-flex flex-column align-items-center justify-content-center'
        >
          <input
            type='text'
            placeholder='Palabra correcta!'
            value={inputValue}
            onChange={handleInputValue}
            className='text-uppercase'
          />
          <div>
            <button
              type='submit'
              className='btn btn-warning'
              onClick={comprobar}
            >
              COMPROBAR
            </button>
            <button type='button' className='btn btn-success' onClick={next}>
              SIGUIENTE
            </button>
          </div>
        </form>
        <h3>Puntaje: {score}</h3>
        {message}
      </div>
    </>
  );
};
