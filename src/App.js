import QRCode from 'qrcode'
import {useState} from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
      <TextField 
        placeholder="e.g. https://google.com" id="filled-basic" 
        label="outlined" variant="outlined" 
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{margin:10,color:"wheat"}}
        />  
			<Button style={{margin:10}} variant="contained" onClick={GenerateQRCode}> Generate</Button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
	)
}

export default App