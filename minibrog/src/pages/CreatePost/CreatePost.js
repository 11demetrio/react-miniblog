import style from './CreatePost.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValueFac } from "../../context/AuthContextFaculdade";

const CreatePost = () => {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [corpo, setCorpo] = useState("");
  const [tagPost, setTagPost] = useState([]);
  const [errorForm, setErrorForm] = useState("");
  const navigate = useNavigate();
  const { user } = useAuthValueFac();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sua lógica de envio de formulário aqui
  }

  return (
    <div>
      <h1>Criar Post</h1>
      <p>Escreva sobre o que você quiser e compartilhe o seu conhecimento</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label htmlFor="imagem">URL da Imagem:</label>
        <input
          type="text"
          id="imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <label htmlFor="corpo">Corpo do Post:</label>
        <textarea
          id="corpo"
          value={corpo}
          onChange={(e) => setCorpo(e.target.value)}
        />

        <label htmlFor="tagPost">Tags (separadas por vírgula):</label>
        <input
          type="text"
          id="tagPost"
          value={tagPost}
          onChange={(e) => setTagPost(e.target.value.split(','))}
        />

        {errorForm && <p>{errorForm}</p>}

        <button className='botao' type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CreatePost;