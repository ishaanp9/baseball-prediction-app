import React from 'react'
import { useParams } from 'react-router-dom';

function PlayerPage() {

  let { playerName } = useParams();

  return (
    <div>PlayerPage</div>
  )
}

export default PlayerPage