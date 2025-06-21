import './HomeStyle.css';
import { Link } from 'react-router-dom';
import SplitText from '../../components/SplitText/SplitText';

export default function Home() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className='home'>
      <span className='flex-row-center'>

        <h1>
          <SplitText
            text="Tes"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <h2>
            <SplitText
            text="ync"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            />
            </h2>
      </span>

      <div className='flex-row-center flex-evenly'>
        <Link to="/login">
          <button className='boton-n1'>
            Iniciar Sesión
          </button>
        </Link>
        <Link to="/register">
          <button className='boton-n1'>
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}