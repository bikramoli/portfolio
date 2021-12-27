import ParticlesBg from "particles-bg";

function Particles(){
    let config = {
        num: [4, 7],
        rps: 1,
        radius: [5, 100],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        // body: "./img/icon.png", // Whether to render pictures
        // rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "all",//{x:1100,y:1,width:100,height:100}, // all or center or {x:1,y:1,width:100,height:100}
        color: ["white"],//["random", "#000"],
        cross: "dead", // cross or bround
        random: 15,  // or null,
        g: 5,    // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
    };
    return(
        <>
        <ParticlesBg type="custom" config={config} bg={true} />
        </>
    )
}
export default Particles;