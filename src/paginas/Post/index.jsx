import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css';
import NaoEncontrada from 'paginas/Inicio/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';

const Post = () => {

    const parametros = useParams();
    //console.log(parametros);

    const post = posts.find((post) =>{
        return post.id === Number(parametros.id);
    })

    if(!post){
        return <NaoEncontrada />
    }


  return (
    <Routes>
        <Route path="*" element={<PaginaPadrao />}>
            <Route index element={
                <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
                </PostModelo>
            } />

        </Route>
        
    </Routes>
    
  )
}

export default Post