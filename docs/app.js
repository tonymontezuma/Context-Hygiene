(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.documentElement;
  const english = root.lang === "en";
  const text = english
    ? {
        before: "before the audit",
        after: "after the audit",
        beforeLegend: "389 items in this metric",
        afterLegend: "49 of 389 items",
        paused: "Animations paused",
        pause: "Pause animations",
        copied: "Prompt copied. Paste it into your conversation.",
        selected: "Text selected. Use your browser’s Copy option.",
      }
    : {
        before: "antes da auditoria",
        after: "depois da auditoria",
        beforeLegend: "389 itens no indicador",
        afterLegend: "49 de 389 itens",
        paused: "Animações pausadas",
        pause: "Pausar animações",
        copied: "Prompt copiado. Cole na sua conversa.",
        selected: "Texto selecionado. Use a opção Copiar do navegador.",
      };
  document.querySelectorAll(".language-switch a").forEach((link) => {
    link.addEventListener("click", () => {
      link.hash = window.location.hash;
    });
  });
  const grid = document.getElementById("context-grid");
  const controls = document.querySelector(".segmented");
  const motionButton = document.getElementById("motion-toggle");
  const dots = [];
  let animationTimer;
  let motionPaused = reduceMotion.matches;

  for (let i = 0; i < 389; i++) {
    const dot = document.createElement("span");
    dot.className = "context-dot";
    dot.style.setProperty("--i", String(i));
    grid.appendChild(dot);
    dots.push(dot);
  }

  function setView(view) {
    clearTimeout(animationTimer);
    const after = view === "after";
    dots.forEach((dot, i) =>
      dot.classList.toggle("inactive", after && i % 8 !== 0),
    );
    document.getElementById("visual-count").textContent = after ? "49" : "389";
    document.getElementById("visual-state").textContent = after
      ? text.after
      : text.before;
    document.getElementById("visual-legend").textContent = after
      ? text.afterLegend
      : text.beforeLegend;
    controls
      .querySelectorAll("button")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.view === view),
        ),
      );
  }

  function updateMotion(paused) {
    motionPaused = paused;
    root.classList.toggle("motion-paused", paused);
    motionButton.setAttribute("aria-pressed", String(paused));
    motionButton.textContent = paused ? text.paused : text.pause;
    if (paused) {
      clearTimeout(animationTimer);
      setView("after");
    }
  }

  controls.hidden = false;
  controls
    .querySelectorAll("button")
    .forEach((button) =>
      button.addEventListener("click", () => setView(button.dataset.view)),
    );
  motionButton.hidden = false;
  motionButton.addEventListener("click", () => updateMotion(!motionPaused));
  reduceMotion.addEventListener("change", (event) =>
    updateMotion(event.matches),
  );
  updateMotion(motionPaused);
  if (!motionPaused) {
    setView("before");
    animationTimer = setTimeout(() => setView("after"), 1600);
  }

  const results = document.querySelector(".results");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          results.classList.add("seen");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(results);
  } else {
    results.classList.add("seen");
  }

  const copyButton = document.getElementById("copy-prompt");
  const status = document.getElementById("copy-status");
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const prompt = document.getElementById("starter-prompt");
    try {
      await navigator.clipboard.writeText(
        prompt.textContent.trim().replace(/\s+/g, " "),
      );
      status.textContent = text.copied;
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(prompt);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = text.selected;
    }
  });
})();
