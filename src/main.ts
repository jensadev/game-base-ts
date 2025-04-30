import './style.css'
import { Game } from './Game.ts' // Importerar Game-klassen från game.js

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const game = new Game(canvas)
game.start()
