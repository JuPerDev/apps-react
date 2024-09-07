import { palabras } from "../helpers/data.json";
import { useState, useEffect } from "react";
import "./Scramble.css";
import pokeball from "../assets/pokeball.svg";

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
  const [isDisabled, setIsDisabled] = useState(false);
  const images = import.meta.glob("../assets/img/*.png", { eager: true });

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
      setIsDisabled(true);
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
    setIsDisabled(false);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  if (palabraOculta === null) return null;
  const pokemonImage =
    palabraOculta !== null &&
    images[`../assets/img/${palabras[palabraOculta].img}`];

  return (
    <>
      <div className='container-md mt-4 bg-light rounded d-flex flex-column align-items-center justify-content-center p-2'>
        <div className='d-flex align-items-center justify-content-center gap-2'>
          <h1 className='mb-0'>SCRAMBLE!</h1>
          <img src={pokeball} alt='pokeball' width='30px' />
        </div>
        {pokemonImage ? (
          <img
            src={pokemonImage.default}
            alt='Imagen pokemon correspondiente'
            width='100px'
            className={isImageVisible ? "color" : "grayscale"}
          />
        ) : (
          <p>Imagen no disponible</p>
        )}
        <h3 className='bg-danger text-light p-2 rounded'>
          {palabras[palabraOculta].incorrecta}
        </h3>
        <p>Pista: {palabras[palabraOculta].pista}</p>
        <form
          onSubmit={comprobar}
          onKeyDown={handleKeyDown}
          className=' d-flex flex-column align-items-center justify-content-center'
        >
          <input
            type='text'
            placeholder='respuesta'
            value={inputValue}
            onChange={handleInputValue}
            className='text-uppercase text-center'
            disabled={isDisabled}
          />
          <div>
            <button
              type='submit'
              className={`btn btn-warning ${isDisabled ? "disabled" : ""}`}
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
