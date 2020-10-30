class Paddle{
    h = 70
    w = 15
    constructor(x)
    {
        this.pos =undefined
        this.speed = 7
        if (x==-1)
        {
            this.pos = createVector(this.w,height/2)
        }
        else{
            this.pos = createVector(width-this.w,height/2)
        }
    }
    show(){
        push()
        fill(255,10)
        stroke(255)
        strokeWeight(2)
        rectMode(CENTER)
        rect(this.pos.x,this.pos.y,this.w,this.h)
        pop()
    }
    light(){
        push()
        fill(255)
        stroke(255)
        rectMode(CENTER)
        rect(this.pos.x,this.pos.y,this.w,this.h)
        pop()
    }
    update(a,b,c){
        if(a==true){
        this.pos.y-=this.speed*(c==undefined?1:c)
        }
        else if(b == true){
        this.pos.y += this.speed*(c==undefined?1:c)
        }
        if (a instanceof Ball){
            let cm = map(constrain(abs(this.pos.y-a.pos.y),0,this.h/1.5),0,this.h/1.5,0,1)
            if (a.pos.y>this.pos.y){

                this.update(false,true,cm)
            }
            else if(a.pos.y<this.pos.y){
                this.update(true,false,cm)
            }
            else{
                push()
                fill(255,0,0)
                rectMode(CENTER)
                rect(this.pos.x,this.pos.y,this.w,this.h)
                pop()
            }
        }

        this.pos.y = constrain(this.pos.y,this.h/2+hei,height-this.h/2-hei)
    }

}
