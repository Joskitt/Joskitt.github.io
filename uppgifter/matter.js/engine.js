let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint
    Bodies = Matter.Bodies;

let engine = Engine.create();

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1920,
        height: 969
    }
});

let mouse = Mouse.create(render.canvas)
let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse 
})
render.mouse = mouse

let ground = Bodies.rectangle(960, 890, 1920, 60, {isStatic:true});
let boxA = Bodies.rectangle(400, 200, 60, 60,)
let circle1 = Bodies.circle(400,100, 60)

World.add(engine.world, [boxA, ground, circle1, mouseConstraint]);

Engine.run(engine);

Render.run(render);