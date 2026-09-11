const roleDefs = {
  introvert: {
    name: "Introvert",
    range: 1,
    color: "#8ba3ff",
    blurb: "Whispers only to adjacent villagers."
  },
  farmer: {
    name: "Farmer",
    range: 2,
    color: "#79d890",
    blurb: "Trusted by nearby clusters."
  },
  postman: {
    name: "Postman",
    range: 3,
    color: "#ffd166",
    blurb: "Delivers rumors far across lanes."
  },
  storyteller: {
    name: "Storyteller",
    range: 4,
    color: "#ff9bb3",
    blurb: "Can influence almost the whole chowk."
  }
};

const levels = [
  {
    id: 1,
    name: "Level 1 — Chhoti Chingari",
    width: 6,
    height: 6,
    turnLimit: 9,
    startInfected: ["v1"],
    villagers: [
      { id: "v1", x: 0, y: 2, role: "introvert" },
      { id: "v2", x: 1, y: 2, role: "farmer" },
      { id: "v3", x: 2, y: 4, role: "introvert" },
      { id: "v4", x: 3, y: 2, role: "introvert" },
      { id: "v5", x: 4, y: 1, role: "postman" },
      { id: "v6", x: 4, y: 3, role: "farmer" },
      { id: "v7", x: 5, y: 2, role: "introvert" }
    ],
    guards: [
      {
        id: "g1",
        radius: 1,
        path: [
          [2, 0],
          [3, 0],
          [3, 1],
          [2, 1]
        ],
        pathIndex: 0
      }
    ]
  },
  {
    id: 2,
    name: "Level 2 — Bazaar Patrol",
    width: 7,
    height: 7,
    turnLimit: 12,
    startInfected: ["v1"],
    villagers: [
      { id: "v1", x: 1, y: 5, role: "farmer" },
      { id: "v2", x: 2, y: 5, role: "introvert" },
      { id: "v3", x: 3, y: 5, role: "postman" },
      { id: "v4", x: 4, y: 5, role: "introvert" },
      { id: "v5", x: 5, y: 4, role: "farmer" },
      { id: "v6", x: 5, y: 2, role: "postman" },
      { id: "v7", x: 4, y: 1, role: "introvert" },
      { id: "v8", x: 2, y: 1, role: "farmer" },
      { id: "v9", x: 1, y: 2, role: "introvert" },
      { id: "v10", x: 3, y: 3, role: "storyteller" }
    ],
    guards: [
      {
        id: "g1",
        radius: 1,
        path: [
          [3, 1],
          [4, 1],
          [4, 2],
          [3, 2],
          [2, 2],
          [2, 1]
        ],
        pathIndex: 0
      },
      {
        id: "g2",
        radius: 1,
        path: [
          [1, 4],
          [2, 4],
          [2, 5],
          [1, 5]
        ],
        pathIndex: 0
      }
    ]
  },
  {
    id: 3,
    name: "Level 3 — Temple Bell Trap",
    width: 8,
    height: 8,
    turnLimit: 15,
    startInfected: ["v1"],
    villagers: [
      { id: "v1", x: 0, y: 6, role: "introvert" },
      { id: "v2", x: 1, y: 6, role: "farmer" },
      { id: "v3", x: 2, y: 6, role: "postman" },
      { id: "v4", x: 3, y: 6, role: "introvert" },
      { id: "v5", x: 4, y: 5, role: "farmer" },
      { id: "v6", x: 5, y: 4, role: "introvert" },
      { id: "v7", x: 6, y: 3, role: "postman" },
      { id: "v8", x: 6, y: 1, role: "farmer" },
      { id: "v9", x: 4, y: 1, role: "introvert" },
      { id: "v10", x: 2, y: 1, role: "postman" },
      { id: "v11", x: 1, y: 2, role: "introvert" },
      { id: "v12", x: 3, y: 3, role: "storyteller" }
    ],
    guards: [
      {
        id: "g1",
        radius: 2,
        path: [
          [4, 3],
          [5, 3],
          [5, 4],
          [4, 4],
          [3, 4],
          [3, 3]
        ],
        pathIndex: 0
      },
      {
        id: "g2",
        radius: 1,
        path: [
          [1, 4],
          [2, 4],
          [2, 5],
          [1, 5]
        ],
        pathIndex: 0
      }
    ]
  },
  {
    id: 4,
    name: "Level 4 — Panchayat Lockdown",
    width: 9,
    height: 9,
    turnLimit: 20,
    startInfected: ["v1"],
    villagers: [
      { id: "v1", x: 0, y: 7, role: "farmer" },
      { id: "v2", x: 1, y: 7, role: "introvert" },
      { id: "v3", x: 2, y: 7, role: "postman" },
      { id: "v4", x: 3, y: 7, role: "introvert" },
      { id: "v5", x: 4, y: 7, role: "farmer" },
      { id: "v6", x: 5, y: 7, role: "introvert" },
      { id: "v7", x: 6, y: 6, role: "postman" },
      { id: "v8", x: 7, y: 5, role: "introvert" },
      { id: "v9", x: 7, y: 3, role: "farmer" },
      { id: "v10", x: 6, y: 2, role: "introvert" },
      { id: "v11", x: 5, y: 1, role: "postman" },
      { id: "v12", x: 4, y: 1, role: "introvert" },
      { id: "v13", x: 3, y: 1, role: "farmer" },
      { id: "v14", x: 2, y: 2, role: "introvert" },
      { id: "v15", x: 1, y: 3, role: "postman" },
      { id: "v16", x: 3, y: 4, role: "storyteller" }
    ],
    guards: [
      {
        id: "g1",
        radius: 2,
        path: [
          [4, 4],
          [5, 4],
          [5, 5],
          [4, 5],
          [3, 5],
          [3, 4],
          [3, 3],
          [4, 3]
        ],
        pathIndex: 0
      },
      {
        id: "g2",
        radius: 1,
        path: [
          [6, 4],
          [7, 4],
          [7, 5],
          [6, 5]
        ],
        pathIndex: 0
      },
      {
        id: "g3",
        radius: 1,
        path: [
          [1, 5],
          [2, 5],
          [2, 6],
          [1, 6]
        ],
        pathIndex: 0
      }
    ]
  }
];

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const ui = {
  levelName: document.getElementById("levelName"),
  objective: document.getElementById("objective"),
  turnInfo: document.getElementById("turnInfo"),
  infectedInfo: document.getElementById("infectedInfo"),
  message: document.getElementById("message"),
  restartBtn: document.getElementById("restartBtn"),
  waitBtn: document.getElementById("waitBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  roleLegend: document.getElementById("roleLegend")
};

const state = {
  levelIndex: 0,
  villagers: [],
  guards: [],
  infected: new Set(),
  selectedVillagerId: null,
  turn: 0,
  status: "playing",
  message: ""
};

function cloneLevel(level) {
  return {
    ...level,
    villagers: level.villagers.map((v) => ({ ...v })),
    guards: level.guards.map((g) => ({ ...g, path: g.path.map((tile) => [...tile]) }))
  };
}

function currentLevel() {
  return levels[state.levelIndex];
}

function loadLevel(index, keepMessage = false) {
  state.levelIndex = index;
  const level = cloneLevel(levels[index]);
  state.villagers = level.villagers;
  state.guards = level.guards;
  state.infected = new Set(level.startInfected);
  state.turn = 0;
  state.status = "playing";
  state.selectedVillagerId = level.startInfected[0] ?? null;
  state.message = keepMessage ? state.message : "Rumor seeded. Plan your spread.";
  renderRoleLegend();
  syncHud();
  draw();
}

function renderRoleLegend() {
  ui.roleLegend.innerHTML = "";
  Object.values(roleDefs).forEach((role) => {
    const card = document.createElement("div");
    card.className = "role-chip";
    card.innerHTML = `
      <div class="role-title">
        <span>${role.name}</span>
        <span>Range ${role.range}</span>
      </div>
      <div>${role.blurb}</div>
    `;
    ui.roleLegend.appendChild(card);
  });
}

function tileSize() {
  return canvas.width / Math.max(currentLevel().width, currentLevel().height);
}

function villagerById(id) {
  return state.villagers.find((villager) => villager.id === id) || null;
}

function manhattan(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function getGuardPosition(guard, stepOffset = 0) {
  const index = (guard.pathIndex + stepOffset + guard.path.length) % guard.path.length;
  const [x, y] = guard.path[index];
  return { x, y };
}

function isThreatenedAt(tile, stepOffset = 0) {
  return state.guards.some((guard) => {
    const gPos = getGuardPosition(guard, stepOffset);
    return Math.abs(gPos.x - tile.x) + Math.abs(gPos.y - tile.y) <= guard.radius;
  });
}

function legalTargetsFrom(villager) {
  if (!villager || !state.infected.has(villager.id)) {
    return new Set();
  }

  const role = roleDefs[villager.role];
  const targets = state.villagers.filter((candidate) => {
    if (state.infected.has(candidate.id)) {
      return false;
    }

    if (manhattan(villager, candidate) > role.range) {
      return false;
    }

    if (isThreatenedAt(villager) || isThreatenedAt(candidate)) {
      return false;
    }

    return true;
  });

  return new Set(targets.map((t) => t.id));
}

function syncHud() {
  const level = currentLevel();
  ui.levelName.textContent = `${level.name}`;
  ui.objective.textContent = `Objective: infect all ${state.villagers.length} villagers.`;
  ui.turnInfo.textContent = `Turns: ${state.turn} / ${level.turnLimit}`;
  ui.infectedInfo.textContent = `Infected: ${state.infected.size} / ${state.villagers.length}`;

  ui.message.textContent = state.message;
  ui.message.classList.remove("ok", "danger");
  if (state.status === "won") {
    ui.message.classList.add("ok");
  } else if (state.status === "lost") {
    ui.message.classList.add("danger");
  }

  ui.prevBtn.disabled = state.levelIndex === 0;
  ui.nextBtn.disabled = state.levelIndex === levels.length - 1;
}

function setMessage(text, type = "") {
  state.message = text;
  ui.message.textContent = text;
  ui.message.classList.remove("ok", "danger");
  if (type) {
    ui.message.classList.add(type);
  }
}

function advanceGuards() {
  state.guards.forEach((guard) => {
    guard.pathIndex = (guard.pathIndex + 1) % guard.path.length;
  });
}

function resolvePostTurn() {
  const level = currentLevel();

  if (state.infected.size === state.villagers.length) {
    state.status = "won";
    setMessage("Gaon bhar mein afwaah phail gayi. You win!", "ok");
    syncHud();
    draw();
    return;
  }

  if (state.turn >= level.turnLimit) {
    state.status = "lost";
    setMessage("Turn limit cross ho gaya. Guards ne rumor dabaa diya.", "danger");
    syncHud();
    draw();
    return;
  }

  setMessage("Guards moved. Find your next safe spread.");
  syncHud();
  draw();
}

function spreadRumor(targetVillager) {
  if (state.status !== "playing") {
    return;
  }

  const source = villagerById(state.selectedVillagerId);
  if (!source || !state.infected.has(source.id)) {
    setMessage("Pehle infected villager select karo.", "danger");
    return;
  }

  if (state.infected.has(targetVillager.id)) {
    state.selectedVillagerId = targetVillager.id;
    setMessage(`Switched source to ${roleDefs[targetVillager.role].name}.`);
    syncHud();
    draw();
    return;
  }

  const validTargets = legalTargetsFrom(source);
  if (!validTargets.has(targetVillager.id)) {
    setMessage("Invalid spread: range ya guard zone ka issue.", "danger");
    syncHud();
    draw();
    return;
  }

  state.infected.add(targetVillager.id);
  state.selectedVillagerId = targetVillager.id;
  state.turn += 1;
  advanceGuards();
  resolvePostTurn();
}

function passTurn() {
  if (state.status !== "playing") {
    return;
  }

  state.turn += 1;
  advanceGuards();
  setMessage("Turn passed. Patrol pattern shift hua.");
  resolvePostTurn();
}

function boardOffset(level) {
  const size = tileSize();
  return {
    x: (canvas.width - level.width * size) / 2,
    y: (canvas.height - level.height * size) / 2,
    size
  };
}

function drawGrid(level, offset) {
  const { x: offsetX, y: offsetY, size } = offset;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#11172e");
  gradient.addColorStop(1, "#0a0f20");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < level.height; y += 1) {
    for (let x = 0; x < level.width; x += 1) {
      const tile = { x, y };
      const drawX = offsetX + x * size;
      const drawY = offsetY + y * size;

      if (isThreatenedAt(tile, 0)) {
        ctx.fillStyle = "rgba(255, 76, 117, 0.24)";
        ctx.fillRect(drawX, drawY, size, size);
      }

      if (isThreatenedAt(tile, 1) && !isThreatenedAt(tile, 0)) {
        ctx.fillStyle = "rgba(255, 214, 102, 0.16)";
        ctx.fillRect(drawX, drawY, size, size);
      }

      ctx.strokeStyle = "rgba(139, 156, 255, 0.20)";
      ctx.lineWidth = 1;
      ctx.strokeRect(drawX, drawY, size, size);
    }
  }
}

function drawGuards(offset) {
  const { x: offsetX, y: offsetY, size } = offset;

  state.guards.forEach((guard) => {
    const pos = getGuardPosition(guard, 0);
    const centerX = offsetX + pos.x * size + size / 2;
    const centerY = offsetY + pos.y * size + size / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.24, 0, Math.PI * 2);
    ctx.fillStyle = "#ff4c75";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.13, 0, Math.PI * 2);
    ctx.fillStyle = "#ffd1dc";
    ctx.fill();

    const next = getGuardPosition(guard, 1);
    const nextX = offsetX + next.x * size + size / 2;
    const nextY = offsetY + next.y * size + size / 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(nextX, nextY);
    ctx.strokeStyle = "rgba(255, 128, 143, 0.9)";
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

function drawVillagers(offset) {
  const { x: offsetX, y: offsetY, size } = offset;
  const selected = villagerById(state.selectedVillagerId);
  const legalTargets = legalTargetsFrom(selected);

  state.villagers.forEach((villager) => {
    const centerX = offsetX + villager.x * size + size / 2;
    const centerY = offsetY + villager.y * size + size / 2;
    const role = roleDefs[villager.role];
    const infected = state.infected.has(villager.id);
    const threatened = isThreatenedAt(villager);

    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.27, 0, Math.PI * 2);
    ctx.fillStyle = infected ? "#9f7cff" : role.color;
    ctx.globalAlpha = threatened ? 0.72 : 1;
    ctx.fill();
    ctx.globalAlpha = 1;

    if (legalTargets.has(villager.id)) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.33, 0, Math.PI * 2);
      ctx.strokeStyle = "#4ce0a1";
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    if (state.selectedVillagerId === villager.id) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.38, 0, Math.PI * 2);
      ctx.strokeStyle = "#f2f4ff";
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    ctx.fillStyle = "#101426";
    ctx.font = `${Math.floor(size * 0.16)}px Inter, sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText(role.range.toString(), centerX, centerY + 5);
  });
}

function draw() {
  const level = currentLevel();
  const offset = boardOffset(level);

  drawGrid(level, offset);
  drawGuards(offset);
  drawVillagers(offset);
}

function canvasToTile(event) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const px = (event.clientX - rect.left) * scaleX;
  const py = (event.clientY - rect.top) * scaleY;

  const level = currentLevel();
  const offset = boardOffset(level);
  const x = Math.floor((px - offset.x) / offset.size);
  const y = Math.floor((py - offset.y) / offset.size);

  if (x < 0 || y < 0 || x >= level.width || y >= level.height) {
    return null;
  }

  return { x, y };
}

function villagerAt(tile) {
  return state.villagers.find((villager) => villager.x === tile.x && villager.y === tile.y) || null;
}

canvas.addEventListener("click", (event) => {
  const tile = canvasToTile(event);
  if (!tile) {
    return;
  }

  const villager = villagerAt(tile);
  if (!villager) {
    setMessage("Yahan koi villager nahi hai.", "danger");
    return;
  }

  if (state.infected.has(villager.id)) {
    state.selectedVillagerId = villager.id;
    setMessage(`Selected ${roleDefs[villager.role].name}.`);
    syncHud();
    draw();
    return;
  }

  spreadRumor(villager);
});

ui.restartBtn.addEventListener("click", () => loadLevel(state.levelIndex));
ui.waitBtn.addEventListener("click", passTurn);

ui.prevBtn.addEventListener("click", () => {
  if (state.levelIndex > 0) {
    loadLevel(state.levelIndex - 1, true);
  }
});

ui.nextBtn.addEventListener("click", () => {
  if (state.levelIndex < levels.length - 1) {
    loadLevel(state.levelIndex + 1, true);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "r") {
    loadLevel(state.levelIndex);
  }

  if (event.key === " ") {
    event.preventDefault();
    passTurn();
  }
});

loadLevel(0);
