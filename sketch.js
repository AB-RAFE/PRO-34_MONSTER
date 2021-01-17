const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var Monster1,Monster2,hero1,hero2,BG;
var monster,hero,fly,ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function preload() {
  //preload the images here
  Monster1 = loadImage("images/Monster-01.png");
  Monster2 = loadImage("images/Monster-02.png");
  // hero1 = loadImage("images/Superhero-01.png");
  // hero2 = loadImage("images/Superhero-02.png");
  BG = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(windowWidth, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,600,1000,20);
  hero = new Hero(300,400,100);
  monster = new Monster(800,500,100);
  fly = new Fly(hero.body,{x:300,y:100});

  box1 = new Block(500,570,60,60);
  box2 = new Block(500,540,60,60);
  box3 = new Block(500,510,60,60);
  box4 = new Block(500,480,60,60);
  box5 = new Block(500,450,60,60);
  box6 = new Block(500,420,60,60);
  box7 = new Block(560,570,60,60);
  box8 = new Block(560,540,60,60);
  box9 = new Block(560,510,60,60);
  box10 = new Block(560,480,60,60);
  box11 = new Block(560,450,60,60);
  box12 = new Block(560,420,60,60);
  box13 = new Block(620,570,60,60);
  box14 = new Block(620,540,60,60);
  box15 = new Block(620,510,60,60);
  box16 = new Block(620,480,60,60);
  box17 = new Block(620,450,60,60);
  box18 = new Block(620,420,60,60);
  box19 = new Block(560,390,60,60);
  box20 = new Block(560,360,60,60);
}

function draw() {
  background(BG);
  Engine.update(engine);

  hero.display();
  monster.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

