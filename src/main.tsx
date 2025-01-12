import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SlideMotion } from './lib'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SlideMotion />
	</StrictMode>,
)
