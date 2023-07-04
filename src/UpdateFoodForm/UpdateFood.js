import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function UpdateFood() {
  const { id } = useParams();
  const redirect = useRef();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchDataId(id);
  }, [id]);

  const fetchDataId = async (id) => {
    try {
      const response = await fetch(`https://backend-phase-2-project.onrender.com/foods/${id}`);
      const jsonData = await response.json();

      setName(jsonData.name);
      setImage(jsonData.image);
      setDescription(jsonData.description);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://backend-phase-2-project.onrender.com/foods/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          image,
          description,
        }),
      });

      if (response.ok) {
        setName('');
        setImage('');
        setDescription('');
        redirect.current.click();
      } else {
        console.error('Failed to update food');
      }
    } catch (error) {
      console.error('Error updating food:', error);
    }
  };

  return (
    <div>
      <h2 className="container-form">Update Food {name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
      <Link to="/" className='none' ref={redirect}/>
    </div>
  );
}
