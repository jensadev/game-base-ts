export class Game {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    lastTime: number | null = null
    
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.canvas.width = 854
        this.canvas.height = 480
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    }

    update(deltaTime: number) {
        // Update game state

    }
    draw() {
        // Draw game state
    }

    start(timeStamp: number = 0) {
        const deltaTime = timeStamp - (this.lastTime || 0)
        this.lastTime = timeStamp
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.update(deltaTime)
        this.draw()
        requestAnimationFrame((timeStamp) => this.start(timeStamp))
    }
}