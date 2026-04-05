/* DN1010 Experimental Interaction, Ashley Hi 2026
 * Week 4 - Generative Drawing
 * p5 Tweets Example
 */

// run one tweet at a time by uncommenting it
// comment it again before running the next one

// Fredrik Oloffson's Tweets

// --002
//i=0;function setup(){createCanvas(1200,900)}function draw(){for(j=0;j<99;)rect(i++%(1199-j++),int(i/99)%(999-j),i%12,j%16)}

// --0004
//s=900,i=j=0;function setup(){createCanvas(s,s);stroke(255,9);fill(9,3)}function draw(){quad(i++,j++,j,i,s-i,i-50,s-j,j);i=(i<<j%4)%1200;j=j%s}

// --0010
//i=0,k=450;function setup(){createCanvas(900,900);textSize(k)}function draw(){translate(k,k);fill(i%1*k/2,60);rotate(i+=+.01);text("@",99,0)}

// --0015
//i=0,s=900;function setup(){createCanvas(s,s);stroke(255,25)}function draw(){fill(i++%89,0,0,127);rect(i%90*9,i%91*9,i*i%92,i*i%93)}

// --0016
i=0,s=900,t=1200;function setup(){createCanvas(t,s);noStroke()}function draw(){fill(i++%256,25);quad(i%t,i/3%s,i/4%t,i%s,i/5%t,i/4%s,i/3%t,i/2%s)}

// --0017
//t=0;function setup(){createCanvas(900,900);background(0);stroke(255,4)}function draw(){translate(450,450);line(sin(t)*421,cos(t++)*400,t%9,t%9)}

// --0022
//j=0;function setup(){createCanvas(1024,768)}function draw(){translate(512,384);i=frameCount;while(i-->1){rect(j++%i,j%i,3,i/9%9);rotate(0.009)}}
