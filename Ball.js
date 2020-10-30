class Ball {
    constructor() {
        this.reset()
        this.left = new Paddle(-1)
        this.right = new Paddle(1)
        this.score = [0,0]
        this.max = 9.5
      }
    reset(){
        this.pos = createVector(width / 2, height / 2)
        this.rad = 7.5
        this.vel = createVector(0, 0)
        this.dir = p5.Vector.fromAngle(PI/180*(random()>0.5?random(-45,45):random(135,90+135)))
        this.acc = createVector(0, 0)
        this.touch = false
    }
    show() {
        push()
        fill(255, 150)
        stroke(255)
        circle(this.pos.x, this.pos.y, this.rad * 2)
        pop()
        push()
        fill(255)
        stroke(255)
        textAlign(CENTER,TOP)
        textSize(50)
        text(this.score[1],width/3,height/10)
        text(this.score[0],2/3*width,height/10)
        pop()
        this.left.show()
        this.right.show()
    }
    Left(){
        if (this.pos.x-1-this.rad<this.left.pos.x+this.left.w/2){
            if (this.pos.y+this.rad>this.left.pos.y-this.left.h/2 && this.pos.y-this.rad<this.left.pos.y+this.left.h/2){
                this.vel.x*=-1
                this.dir.x*=-1
                this.left.light()
                let h = this.pos.y-this.left.pos.y
                let mag = this.vel.mag()
                let angle = map(h,-this.left.h/2,this.left.h/2,radians(-45),radians(45))
                this.dir = p5.Vector.fromAngle(angle)
                this.vel = this.dir.copy().setMag(mag)
            }

        }
    }
    Right(){
        {
            if (this.pos.x+1+this.rad>this.right.pos.x-this.right.w/2){
                if (this.pos.y+this.rad>this.right.pos.y-this.right.h/2 && this.pos.y-this.rad<this.right.pos.y+this.right.h/2){
                    this.vel.x*=-1
                    this.dir.x*=-1
                    this.right.light()
                    let h = this.pos.y-this.right.pos.y
                    if(h<0){
                        let mag = this.vel.mag()
                    let angle = map(h,-this.right.h/2,0,radians(-135),radians(-179))
                    this.dir = p5.Vector.fromAngle(angle)
                    this.vel = this.dir.copy().setMag(mag)
                    }
                    else{
                        let mag = this.vel.mag()
                    let angle = map(h,this.right.h/2,0,radians(135),radians(180))
                    this.dir = p5.Vector.fromAngle(angle)
                    this.vel = this.dir.copy().setMag(mag)
                    }
                }

            }
        }
    }
    update(a,b) {
        if (this.pos.x<width/2)
        this.left.update(this)
        if (this.pos.x>width/2)
        this.right.update(this)
        this.vel.add(this.dir.copy().setMag(2))
        this.vel.limit(this.max)
        this.pos.add(this.vel)
        this.Left()
        this.Right()
        if(this.pos.x < -this.rad){
            this.score[0]++
            this.reset()

        }
        if( this.pos.x > width+this.rad)
        {
            this.score[1]++
            this.reset()

        }

        if (this.pos.y < this.rad +hei|| this.pos.y > height - this.rad-hei) {
            this.vel.y = -this.vel.y
            this.dir.y = -this.dir.y
        }
    }
}
