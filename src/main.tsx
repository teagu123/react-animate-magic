import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SlideMotion } from './lib'
import React from 'react'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SlideMotion />
	</StrictMode>,
)
