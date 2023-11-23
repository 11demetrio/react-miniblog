import React, { useState } from 'react';

const LogComponent = () => {
  const [showLogs, setShowLogs] = useState(false);

  const toggleLogs = () => {
    setShowLogs(!showLogs);
  };

  return (
    <div>
      <button onClick={toggleLogs}>Logs</button>
      {showLogs && (
        <div>
          <ul>
            <li>nome_do_usuario;email;hora_login;link_blog</li>
            <li>douglas_rocha;douglas@email.com;2023-11-22T10:30:00;http://localhost:3000/login</li>
            <li>andreeeteste;andre@email.com;2023-11-22T10:45:00;http://localhost:3000/login</li>
            <li>andre_teste;teste_andre@email.com;2023-11-22T11:00:00;http://localhost:3000/login</li>
            <li>ana_oliveira;ana@email.com;2023-11-22T11:15:00;http://localhost:3000/login</li>
            <li>pedro_rodrigues;pedro@email.com;2023-11-22T11:30:00;http://localhost:3000/login</li>
            <li>lucia_martins;lucia@email.com;2023-11-22T11:45:00;http://localhost:3000/login</li>
            <li>andre_souza;andre@email.com;2023-11-22T12:00:00;http://localhost:3000/login</li>
            <li>clara_lima;clara@email.com;2023-11-22T12:15:00;http://localhost:3000/login</li>
            <li>ricardo_fernandes;ricardo@email.com;2023-11-22T12:30:00;http://localhost:3000/login</li>
            <li>beatriz_almeida;beatriz@email.com;2023-11-22T12:45:00;http://localhost:3000/login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogComponent;
