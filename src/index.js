import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import TurmasList from './components/Turmas/TumasList'
import TurmaDetails from './components/Turmas/TurmaDetails'
import GestoresDetails from './components/Gestores/GestoresDetails'
import GestoresList from './components/Gestores/GestoresList'
import EscolasList from './components/Escolas/EscolasList'
import EscolasDetails from './components/Escolas/EscolasDetails'
import AlunosDetails from './components/Alunos/AlunosDetails'
import AlunosList from './components/Alunos/AlunosList'
import Cadastros from './components/Cadastros/Cadastros';
import Gabarito from './components/Gabaritos/GabaritoMain';
import GabaritoNivel1 from './components/Gabaritos/GabaritoNivel1';
import GabaritoNivel2 from './components/Gabaritos/GabaritoNivel2';
import GabaritoNivel3 from './components/Gabaritos/GabaritoNivel3';
import GabaritoNivel4 from './components/Gabaritos/GabaritoNivel4';
import GabaritoNivel5 from './components/Gabaritos/GabaritoNivel5';
import GabaritoNivel6 from './components/Gabaritos/GabaritoNivel6';
import Suporte from './components/Suporte/Suporte';

import{ createBrowserRouter, RouterProvider } from 'react-router-dom'

import { DadosProvider } from './components/Context/DadosContext';
import './index.css';



const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> }, 
  { path: '/home', element: <Home /> },

  {path: '/api/aluno', element: <AlunosList />},
  {path: '/api/aluno/:id', element: <AlunosDetails />},


  { path: '/api/escola', element: <EscolasList /> },
  { path: '/api/escola:id', element: <EscolasDetails /> },

  { path: '/api/gestor', element: <GestoresList /> },
  { path: '/api/gestor:id', element: <GestoresDetails /> },

  { path: '/api/turma', element: <TurmasList /> },
  { path: '/api/turma:id', element: <TurmaDetails /> },

  { path: '/cadastros', element: <Cadastros />},
  { path: '/gabaritos', element: <Gabarito />},

  { path: '/suporte', element: <Suporte />},


  { path: '/gabaritoNivel1', element: <GabaritoNivel1 />},
  { path: '/gabaritoNivel2', element: <GabaritoNivel2 />},
  { path: '/gabaritoNivel3', element: <GabaritoNivel3 />},
  { path: '/gabaritoNivel4', element: <GabaritoNivel4 />},
  { path: '/gabaritoNivel5', element: <GabaritoNivel5 />},
  { path: '/gabaritoNivel6', element: <GabaritoNivel6 />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DadosProvider>
    <RouterProvider router={router}/>
    </DadosProvider>
  </React.StrictMode>
);

reportWebVitals();
