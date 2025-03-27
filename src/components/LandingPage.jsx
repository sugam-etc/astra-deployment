import { useState, useEffect, useRef } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Review from "./Review.jsx";
import Team from "./Team.jsx";

const LandingPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const toggleVideo = () => setIsVideoPlaying(!isVideoPlaying);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  // Video handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video
        .play()
        .then(() => {
          setIsVideoReady(true);
        })
        .catch((error) => {
          console.log("Video play failed:", error);
          setIsVideoReady(false);
        });
    };

    video.addEventListener("canplay", handleCanPlay);
    video.load(); // Explicitly load the video

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.weight = Math.random() * 2 + 1;
        this.directionX = Math.random() * 2 - 1;
        this.color = `hsla(${Math.random() * 60 + 200}, 100%, 50%, 0.7)`;
      }

      update() {
        if (this.y > canvas.height) {
          this.y = 0;
          this.weight = Math.random() * 2 + 1;
          this.x = Math.random() * canvas.width;
        }
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Initialize particles
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    // Mouse interaction
    let mouseX = null;
    let mouseY = null;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `hsla(210, 100%, 70%, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        if (mouseX && mouseY) {
          const dx = particles[i].x - mouseX;
          const dy = particles[i].y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `hsla(255, 255%, 100%, ${0.7 - distance / 200})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();

            if (distance < 100) {
              particles[i].x += dx * 0.03;
              particles[i].y += dy * 0.03;
            }
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="font-sans text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!isVideoReady && (
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <div className="animate-pulse">Loading...</div>
            </div>
          )}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover ${
              isVideoReady ? "opacity-100" : "opacity-0"
            }`}
            preload="auto"
          >
            <source src="/showreel.mp4" type="video/mp4" />
            <source src="/showreel.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Particle Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        ></canvas>

        {/* Hero content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-red-600">ASTRA</span> PRODUCTION
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Cinematic production meets strategic digital marketing
          </p>
          <button
            onClick={toggleVideo}
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-bold flex items-center mx-auto transition-colors"
          >
            <FaPlay className="mr-2" /> Watch Showreel
          </button>
        </div>
      </section>

      {/* Page content */}
      <div className="relative z-10 bg-gray-900">
        <About />
        <Projects />
        <Review />
        <Team />
        <Contact />
        <Footer />
      </div>

      {/* Fullscreen Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <button
              onClick={toggleVideo}
              className="absolute -top-12 right-0 text-white hover:text-red-600 transition-colors text-2xl"
            >
              <FaTimes />
            </button>
            <video
              autoPlay
              controls
              className="w-full h-full object-contain"
              onEnded={() => setIsVideoPlaying(false)}
            >
              <source src="/showreel.mp4" type="video/mp4" />
              <source src="/showreel.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
