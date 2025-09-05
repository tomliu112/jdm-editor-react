import React, { useState } from 'react'
import { DecisionGraph, JdmConfigProvider } from '@gorules/jdm-editor'
import '@gorules/jdm-editor/dist/style.css'

export default function App() {
  const [graph, setGraph] = useState({
    nodes: [],
    edges: []
  })

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <JdmConfigProvider>
        <DecisionGraph
          value={graph}
          onChange={(val) => setGraph(val)}
        />
      </JdmConfigProvider>
    </div>
  )
}