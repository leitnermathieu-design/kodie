<div class="kodie-container">
  <div class="kodie">
    <div class="cape"></div>
    
    <div class="legs">
      <div class="leg left"></div>
      <div class="leg right"></div>
    </div>
    <div class="torso">
      <div class="suit-white">
        <span class="logo-k">K</span>
      </div>
      <div class="belt"></div>
    </div>

    <div class="arm left-arm"></div>
    <div class="arm right-arm waving"></div>

    <div class="head-group">
      <div class="hood">
        <div class="face">
          <div class="eye left-eye"></div>
          <div class="eye right-eye"></div>
          <div class="smile"></div>
        </div>
      </div>
      <div class="hair"></div>
    </div>
  </div>
</div>

<style>
  :root {
  --teal: #2ca5b1;
  --orange: #f39221;
  --skin: #ffdbac;
  --white: #ffffff;
  --green: #4caf50;
}

.kodie-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.kodie {
  position: relative;
  width: 150px;
  height: 250px;
}

/* Head and Hood */
.hood {
  position: absolute;
  top: 10px;
  left: 25px;
  width: 100px;
  height: 100px;
  background: var(--teal);
  border-radius: 50%;
  z-index: 5;
}

.face {
  position: absolute;
  top: 15px;
  left: 10px;
  width: 80px;
  height: 80px;
  background: var(--skin);
  border-radius: 50%;
}

.eye {
  position: absolute;
  width: 10px;
  height: 12px;
  background: #333;
  border-radius: 50%;
  top: 32px;
}

.left-eye {
  left: 22px;
}

.right-eye {
  right: 22px;
}

.smile {
  position: absolute;
  width: 28px;
  height: 12px;
  border-bottom: 3px solid #333;
  border-radius: 0 0 28px 28px;
  top: 48px;
  left: 26px;
}

.hair {
  position: absolute;
  top: -5px;
  left: 45px;
  width: 60px;
  height: 40px;
  background: #634133;
  border-radius: 50% 50% 0 0;
  transform: rotate(10deg);
  z-index: 6;
}

/* Torso & Suit */
.torso {
  position: absolute;
  top: 100px;
  left: 35px;
  width: 80px;
  height: 90px;
  background: var(--teal);
  border-radius: 20px 20px 10px 10px;
  z-index: 4;
  overflow: hidden;
}

.suit-white {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 50px;
  height: 60px;
  background: var(--white);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-k {
  color: var(--orange);
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
}

.belt {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 12px;
  background: var(--orange);
}

/* Limbs */
.arm {
  position: absolute;
  width: 25px;
  height: 60px;
  background: var(--teal);
  z-index: 3;
}

.right-arm {
  top: 110px;
  right: 15px;
  border-radius: 20px;
  transform: rotate(-20deg);
}

.left-arm {
  top: 110px;
  left: 15px;
  border-radius: 20px;
  transform: rotate(20deg);
}

.legs {
  position: absolute;
  top: 185px;
  left: 35px;
  width: 80px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  z-index: 3;
}

.legs::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: var(--green);
  border-radius: 0 0 15px 15px;
}

.leg {
  width: 35px;
  height: 60px;
  background: var(--green);
  border-bottom: 20px solid var(--orange); /* Boots */
  border-radius: 8px;
}

/* Cape */
.cape {
  position: absolute;
  top: 110px;
  left: 10px;
  width: 130px;
  height: 100px;
  background: var(--orange);
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  z-index: 1;
}

/* Animation */
.waving {
  animation: wave 2s infinite ease-in-out;
}

/* @keyframes wave {
  0%, 100% { transform: rotate(40deg); }
  50% { transform: rotate(60deg); }
} */
</style> 