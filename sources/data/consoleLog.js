import * as THREE from 'three/webgpu'

const text = `
███╗   ██╗ █████╗ ██╗   ██╗███████╗███████╗███╗   ██╗██╗███████╗
████╗  ██║██╔══██╗██║   ██║██╔════╝██╔════╝████╗  ██║╚═╝██╔════╝
██╔██╗ ██║███████║██║   ██║█████╗  █████╗  ██╔██╗ ██║   ███████╗
██║╚██╗██║██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══╝  ██║╚██╗██║   ╚════██║
██║ ╚████║██║  ██║ ╚████╔╝ ███████╗███████╗██║ ╚████║   ███████║
╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═╝  ╚═══╝   ╚══════╝

██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝

╔═ Intro ═══════════════╗
║ Thank you for visiting my portfolio, you sneaky developer!
║ I'm Naveen Karasu - Software Engineer & Cybersecurity Specialist.
║ This portfolio is inspired by and adapted from Bruno Simon's amazing folio-2025.
╚═══════════════════════╝

╔═ Socials ═══════════════╗
║ Mail           ⇒ naveenajaykarasu+intern@my.unt.edu
║ GitHub         ⇒ https://github.com/naveenkarasu
║ LinkedIn       ⇒ https://www.linkedin.com/in/naveenkarasu
╚═══════════════════════╝

╔═ Credits ═══════════════╗
║ Original Portfolio by Bruno Simon
║ https://github.com/brunosimon/folio-2025
║ Licensed under MIT License
╚═══════════════════════╝

╔═ Debug ═══════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════╝

╔═ Three.js ════════════╗
║ Three.js is the library used to render this 3D world (release: ${THREE.REVISION})
║ https://threejs.org/
╚═══════════════════════╝

╔═ Musics ══════════════╗
║ The music was made by Kounine (CC0 license)
║ https://linktr.ee/Kounine
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]
