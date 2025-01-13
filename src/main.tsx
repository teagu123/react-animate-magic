import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FadeIn } from './lib'
import React from 'react'

const appStyles = {
	width: '300px',
	height: '300px',
	background: 'blue',
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<FadeIn duration={2000}>
			<span style={appStyles}>dd</span>
		</FadeIn>
	</StrictMode>,
)
