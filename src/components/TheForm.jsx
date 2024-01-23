import React  from 'react'
import './TheForm.css'

function TheForm() {

    const [meme, setMeme] = React.useState({ 
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemesImages] = React.useState([]) 
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json()) 
        .then(memeData => setAllMemesImages(memeData.data.memes))  
    }, [] ) 
        
    function getMeme() {
        const randomNum = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNum].url 
        
        setMeme(prevState => ({ 
            ...prevState,
            randomImage: url
        }))
    }

    function handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
    <>
    <main>
        <form id="form" >
            <div className='form-inputs'>
                <label htmlFor="top-text">Top Text</label>
                <input 
                    id="top-text" 
                    type='text' 
                    placeholder='Shut up'
                    name="topText"
                    value={meme.topText} 
                    onChange={handleChange}
                />
            </div>
            <div className='form-inputs'>
                <label htmlFor="bottom-text">Bottom text</label>
                <input 
                    id="bottom-text" 
                    type='text' 
                    placeholder='And take my money'
                    name="bottomText" 
                    value={meme.bottomText} 
                    onChange={handleChange}
                />
            </div>
            <button type="button" onClick={getMeme}>Get a new meme image</button>
        </form>
        <div className='img-container'> 
            <img className='meme-img' src={meme.randomImage} />
            <p className='top'>{meme.topText}</p>
            <p className='bottom'>{meme.bottomText}</p>
        </div>
    </main>
    </>
    )
}

export default TheForm