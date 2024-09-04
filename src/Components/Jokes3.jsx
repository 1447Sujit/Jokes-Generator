
import { useState, useEffect } from 'react';

const JokeItem = ({ joke }) => {
  return (
    <div className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
      <h2 className='text-xl font-bold'>{joke.value}</h2>
    </div>
  );
};

const Jokes3 = () => {
  const [joke, setJoke] = useState({ value: 'Why did the chicken cross the road?' });
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await res.json();
      setJoke(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className='container mx-auto max-w-4xl'>
      <JokeItem joke={joke} />
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? 'Loading...' : 'Generate Joke'}
      </button>
    </div>
  );
};

export default Jokes3;