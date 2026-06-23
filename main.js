document.addEventListener("DOMContentLoaded", () => {
    
    // DOM CACHE DECLARATIONS
    const preloader = document.getElementById("preloader");
    const appContainer = document.getElementById("app-container");
    const radarGlow = document.getElementById("radarGlow");
    const terminalTime = document.getElementById("terminalTime");
    const skillButtons = document.querySelectorAll(".skill-btn");
    const terminalSkillName = document.getElementById("terminalSkillName");
    const terminalSkillDesc = document.getElementById("terminalSkillDesc");

    // MODAL CONTROL ELEMENTS
    const contactModal = document.getElementById("contactModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModal = document.getElementById("closeModal");

    // DATA STORAGE ARRAYS FOR INTERACTIVE INTERFACES
    const skillData = {
        fin: {
            name: "FINANCIAL ANALYSIS",
            desc: "Foundational framework interpretation, quantitative financial modelling vectors, structural cost tracking, and core liquidity matrix evaluation."
        },
        excel: {
            name: "MICROSOFT EXCEL (ADV)",
            desc: "Systemized data organization architectures utilizing VLOOKUP models, deep nesting algorithms, complex array equations, and responsive Pivot Table reporting interfaces."
        },
        data: {
            name: "DATA & VALUATION",
            desc: "Targeted analysis of complex client data assets, predictive asset trends mapping, data validation workflows, and real estate valuation computation."
        },
        solve: {
            name: "SOLUTION ARCHITECTURE",
            desc: "High-capacity problem mitigation framework execution. Designed to continuously trace and isolate operational system parameters to exploit transactional breakthroughs."
        }
    };

    // 1. HARDWARE ASYNCHRONOUS PRELOADER TRANSITION
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            appContainer.classList.remove("hidden");
        }, 1800);
    });

    // 2. INDUSTRIAL-GRADE AMBIENT MOUSE TRACKER ENGINE
    window.addEventListener("mousemove", (e) => {
        const xPct = (e.clientX / window.innerWidth) * 100;
        const yPct = (e.clientY / window.innerHeight) * 100;
        
        radarGlow.style.setProperty("--mouse-x", `${xPct}%`);
        radarGlow.style.setProperty("--mouse-y", `${yPct}%`);
    });

    // 3. SYS_TIME MATRIX CLOCK
    const updateTerminalClock = () => {
        const now = new Date();
        const hrs = String(now.getUTCHours()).padStart(2, '0');
        const mins = String(now.getUTCMinutes()).padStart(2, '0');
        const secs = String(now.getUTCSeconds()).padStart(2, '0');
        terminalTime.textContent = ` ${hrs}:${mins}:${secs} UTC`;
    };
    setInterval(updateTerminalClock, 1000);
    updateTerminalClock();

    // 4. DATA COMPONENT ROUTER EVENT LISTENERS
    skillButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            skillButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const targetKey = btn.getAttribute("data-skill");
            
            if (skillData[targetKey]) {
                terminalSkillName.textContent = skillData[targetKey].name;
                terminalSkillDesc.textContent = skillData[targetKey].desc;
            }
        });
    });

    // 5. INTERACTIVE MODAL ACTIONS
    const toggleModal = (show) => {
        if (show) {
            contactModal.classList.add("active");
        } else {
            contactModal.classList.remove("active");
        }
    };

    openModalBtn.addEventListener("click", () => toggleModal(true));
    closeModal.addEventListener("click", () => toggleModal(false));
    
    // Close modal if user clicks anywhere outside the visual frame
    contactModal.addEventListener("click", (e) => {
        if (e.target === contactModal) {
            toggleModal(false);
        }
    });
});