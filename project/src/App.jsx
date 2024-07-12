import { useState, useEffect } from 'react';
import './App.css';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteSweep } from "react-icons/md";

function App() {

  const toggle = () => {
    setModal(!modal)
  }

  const [list, setList] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }, []);

  return (
    <>

      <header>
        <a href="/">
          LOGO
        </a>
        <button onClick={toggle}>
          Courses
        </button>
      </header>

      {modal && (
        <div className="Modal">
          <div className="overGround" onClick={toggle}></div>
          <div className="modal">
            <form>
              <input type='text' placeholder="Enter your title" required name='title' />
              <input type='text' placeholder="Enter your price" required name='price' />
              <input type='text' placeholder="Enter your author" required name='author' />
              <button>Submit</button>
            </form>
          </div>
        </div>
      )}

      <div className="container">
        <table>
          <tbody>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Author</th>
            <th>Edit </th>
            <th> Delete  </th>
          </tbody>

          {list.map((item, idx) => (
            <tr key={item.id}>
              <td>{idx + 1}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.author}</td>
              <td> <CiEdit /> </td>
              <td> <MdOutlineDeleteSweep /> </td>
            </tr>
          ))}


        </table>
      </div>

    </>
  )
}

export default App
