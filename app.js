// ===================================
// GUÍA ADMINISTRACIÓN EDIFICIOS - APP
// ===================================

class GuiaApp {
    constructor() {
        this.sections = [];
        this.currentSectionIndex = null;
        this.progress = this.loadProgress();
        
        // Referencias a gráficos Chart.js
        this.currentSectionChart = null;
        this.globalProgressChart = null;
        this.globalStatsChart = null;
        this.sectionsComparisonChart = null;
        
        this.init();
    }

    async init() {
        await this.loadSections();
        this.renderSidebarSections();
        this.updateGlobalProgress();
        
        // Mostrar welcome screen por defecto
        this.showWelcome();
    }

    // ===================================
    // CARGA DE SECCIONES
    // ===================================
    async loadSections() {
        // Intentar cargar secciones 0-11
        const totalSections = 12;
        
        for (let i = 0; i < totalSections; i++) {
            try {
                const module = await import(`./sections/seccion-${i}.js`);
                const sectionKey = `seccion${i}`;
                
                if (module[sectionKey]) {
                    this.sections.push(module[sectionKey]);
                }
            } catch (error) {
                // Sección no disponible aún, continuar
                console.log(`Sección ${i} no disponible aún`);
            }
        }

        console.log(`${this.sections.length} secciones cargadas`);
    }

    // ===================================
    // RENDERIZADO DE UI
    // ===================================
    renderSidebarSections() {
        const container = document.getElementById('sectionsList');
        
        this.sections.forEach((section, index) => {
            const progress = this.calculateSectionProgress(section.id);
            
            const item = document.createElement('div');
            item.className = 'section-item';
            item.setAttribute('data-section-index', index);
            item.onclick = () => this.showSection(index);
            
            item.innerHTML = `
                <div class="section-item-title">
                    ${section.number}. ${section.title}
                </div>
                <div class="section-item-progress">
                    ${progress}% completado
                </div>
            `;
            
            container.appendChild(item);
        });
    }

    showWelcome() {
        document.getElementById('welcomeScreen').style.display = 'block';
        document.getElementById('sectionContent').style.display = 'none';
        
        // Remover active de sidebar
        document.querySelectorAll('.section-item').forEach(item => {
            item.classList.remove('active');
        });
        
        this.currentSectionIndex = null;
        
        // Renderizar gráficos globales
        setTimeout(() => this.renderGlobalCharts(), 100);
    }

    showSection(index) {
        if (index < 0 || index >= this.sections.length) return;
        
        this.currentSectionIndex = index;
        const section = this.sections[index];
        
        // Ocultar welcome, mostrar contenido
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('sectionContent').style.display = 'block';
        
        // Actualizar sidebar active
        document.querySelectorAll('.section-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // Renderizar contenido
        this.renderSectionContent(section);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderSectionContent(section) {
        // Header
        document.getElementById('sectionNumber').textContent = section.number;
        document.getElementById('sectionTitle').textContent = section.title;
        document.getElementById('sectionSubtitle').textContent = section.subtitle;
        
        // Content blocks
        document.getElementById('whyImportant').innerHTML = section.whyImportant;
        document.getElementById('keyConcepts').innerHTML = section.keyConcepts;
        document.getElementById('examples').innerHTML = section.examples;
        
        // Questions
        const questionsList = document.getElementById('questions');
        questionsList.innerHTML = '';
        section.questions.forEach(q => {
            const li = document.createElement('li');
            li.textContent = q;
            questionsList.appendChild(li);
        });
        
        // Checklist
        this.renderChecklist(section);
        
        // Section progress
        this.updateSectionProgress(section.id);
        
        // Section chart
        setTimeout(() => this.renderSectionChart(section.id), 100);
        
        // Navigation buttons
        document.getElementById('prevBtn').disabled = this.currentSectionIndex === 0;
        document.getElementById('nextBtn').disabled = this.currentSectionIndex === this.sections.length - 1;
    }

    renderChecklist(section) {
        const container = document.getElementById('checklist');
        container.innerHTML = '';
        
        section.checklist.forEach(item => {
            const estado = this.progress[item.id] || 'no-atendido';
            
            const div = document.createElement('div');
            div.className = `checklist-item estado-${estado}`;
            
            div.innerHTML = `
                <div class="checklist-item-header">
                    <div class="checklist-item-text">${item.text}</div>
                    <div class="checklist-item-status">
                        <select class="status-select" data-item-id="${item.id}" onchange="app.updateChecklistItem('${item.id}', this.value)">
                            <option value="no-atendido" ${estado === 'no-atendido' ? 'selected' : ''}>No atendido</option>
                            <option value="atendiendo" ${estado === 'atendiendo' ? 'selected' : ''}>Atendiendo</option>
                            <option value="atendido" ${estado === 'atendido' ? 'selected' : ''}>Atendido</option>
                            <option value="descartado" ${estado === 'descartado' ? 'selected' : ''}>Descartado</option>
                        </select>
                    </div>
                </div>
            `;
            
            container.appendChild(div);
        });
    }

    // ===================================
    // PROGRESO Y ESTADO
    // ===================================
    updateChecklistItem(itemId, estado) {
        this.progress[itemId] = estado;
        this.saveProgress();
        
        // Actualizar clase visual
        const select = document.querySelector(`[data-item-id="${itemId}"]`);
        const checklistItem = select.closest('.checklist-item');
        checklistItem.className = `checklist-item estado-${estado}`;
        
        // Actualizar progreso de la sección actual
        const section = this.sections[this.currentSectionIndex];
        this.updateSectionProgress(section.id);
        this.updateGlobalProgress();
        this.updateSidebarProgress();
        
        // Re-renderizar gráfico de la sección
        this.renderSectionChart(section.id);
    }

    calculateSectionProgress(sectionId) {
        const section = this.sections.find(s => s.id === sectionId);
        if (!section) return 0;
        
        // Filtrar ítems que NO están descartados
        const activeItems = section.checklist.filter(item => {
            const estado = this.progress[item.id];
            return estado !== 'descartado';
        });
        
        const totalActiveItems = activeItems.length;
        if (totalActiveItems === 0) return 0;
        
        // Contar solo los "atendidos" entre los ítems activos
        const completedItems = activeItems.filter(item => {
            const estado = this.progress[item.id];
            return estado === 'atendido';
        }).length;
        
        return Math.round((completedItems / totalActiveItems) * 100);
    }

    updateSectionProgress(sectionId) {
        const progress = this.calculateSectionProgress(sectionId);
        document.getElementById('sectionProgress').textContent = `${progress}%`;
        document.getElementById('sectionProgressBar').style.width = `${progress}%`;
    }

    updateGlobalProgress() {
        if (this.sections.length === 0) return;
        
        let totalProgress = 0;
        this.sections.forEach(section => {
            totalProgress += this.calculateSectionProgress(section.id);
        });
        
        const avgProgress = Math.round(totalProgress / this.sections.length);
        document.getElementById('globalProgress').textContent = `${avgProgress}%`;
        document.getElementById('globalProgressBar').style.width = `${avgProgress}%`;
    }

    updateSidebarProgress() {
        this.sections.forEach((section, index) => {
            const progress = this.calculateSectionProgress(section.id);
            const item = document.querySelector(`[data-section-index="${index}"] .section-item-progress`);
            if (item) {
                item.textContent = `${progress}% completado`;
            }
        });
    }

    // ===================================
    // ESTADÍSTICAS Y GRÁFICOS
    // ===================================
    getSectionStats(sectionId) {
        const section = this.sections.find(s => s.id === sectionId);
        if (!section) return null;
        
        const stats = {
            'no-atendido': 0,
            'atendiendo': 0,
            'atendido': 0,
            'descartado': 0
        };
        
        section.checklist.forEach(item => {
            const estado = this.progress[item.id] || 'no-atendido';
            stats[estado]++;
        });
        
        return stats;
    }

    getGlobalStats() {
        const globalStats = {
            'no-atendido': 0,
            'atendiendo': 0,
            'atendido': 0,
            'descartado': 0
        };
        
        this.sections.forEach(section => {
            const stats = this.getSectionStats(section.id);
            Object.keys(stats).forEach(key => {
                globalStats[key] += stats[key];
            });
        });
        
        return globalStats;
    }

    renderSectionChart(sectionId) {
        const stats = this.getSectionStats(sectionId);
        if (!stats) return;
        
        const ctx = document.getElementById('sectionStatsChart');
        if (!ctx) return;
        
        // Destruir gráfico anterior si existe
        if (this.currentSectionChart) {
            this.currentSectionChart.destroy();
        }
        
        this.currentSectionChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['No atendido', 'Atendiendo', 'Atendido', 'Descartado'],
                datasets: [{
                    data: [
                        stats['no-atendido'],
                        stats['atendiendo'],
                        stats['atendido'],
                        stats['descartado']
                    ],
                    backgroundColor: [
                        '#95a5a6',  // gris
                        '#f39c12',  // naranja
                        '#27ae60',  // verde
                        '#e74c3c'   // rojo
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    renderGlobalCharts() {
        const globalStats = this.getGlobalStats();
        
        // Gráfico 1: Progreso global (circular)
        const ctx1 = document.getElementById('globalProgressChart');
        if (ctx1) {
            if (this.globalProgressChart) {
                this.globalProgressChart.destroy();
            }
            
            const totalItems = Object.values(globalStats).reduce((a, b) => a + b, 0);
            const activeItems = totalItems - globalStats['descartado'];
            const completedItems = globalStats['atendido'];
            const progressPercent = activeItems > 0 ? Math.round((completedItems / activeItems) * 100) : 0;
            
            this.globalProgressChart = new Chart(ctx1, {
                type: 'doughnut',
                data: {
                    labels: ['Completado', 'Pendiente'],
                    datasets: [{
                        data: [completedItems, activeItems - completedItems],
                        backgroundColor: ['#27ae60', '#ecf0f1'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    cutout: '70%'
                },
                plugins: [{
                    id: 'centerText',
                    afterDraw: (chart) => {
                        const ctx = chart.ctx;
                        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
                        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
                        
                        ctx.save();
                        ctx.font = 'bold 32px sans-serif';
                        ctx.fillStyle = '#2c3e50';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(`${progressPercent}%`, centerX, centerY);
                        ctx.restore();
                    }
                }]
            });
        }
        
        // Gráfico 2: Estadísticas por estado
        const ctx2 = document.getElementById('globalStatsChart');
        if (ctx2) {
            if (this.globalStatsChart) {
                this.globalStatsChart.destroy();
            }
            
            this.globalStatsChart = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['No atendido', 'Atendiendo', 'Atendido', 'Descartado'],
                    datasets: [{
                        label: 'Cantidad de ítems',
                        data: [
                            globalStats['no-atendido'],
                            globalStats['atendiendo'],
                            globalStats['atendido'],
                            globalStats['descartado']
                        ],
                        backgroundColor: [
                            '#95a5a6',
                            '#f39c12',
                            '#27ae60',
                            '#e74c3c'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                precision: 0
                            }
                        }
                    }
                }
            });
        }
        
        // Gráfico 3: Comparación por sección
        const ctx3 = document.getElementById('sectionsComparisonChart');
        if (ctx3) {
            if (this.sectionsComparisonChart) {
                this.sectionsComparisonChart.destroy();
            }
            
            const sectionLabels = this.sections.map(s => `${s.number}. ${s.title}`);
            const sectionProgress = this.sections.map(s => this.calculateSectionProgress(s.id));
            
            this.sectionsComparisonChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: sectionLabels,
                    datasets: [{
                        label: 'Progreso (%)',
                        data: sectionProgress,
                        backgroundColor: sectionProgress.map(p => {
                            if (p >= 80) return '#27ae60';
                            if (p >= 50) return '#f39c12';
                            return '#3498db';
                        })
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `Progreso: ${context.parsed.x}%`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        }
    }

    // ===================================
    // NAVEGACIÓN
    // ===================================
    navigatePrev() {
        if (this.currentSectionIndex > 0) {
            this.showSection(this.currentSectionIndex - 1);
        }
    }

    navigateNext() {
        if (this.currentSectionIndex < this.sections.length - 1) {
            this.showSection(this.currentSectionIndex + 1);
        }
    }

    // ===================================
    // PERSISTENCIA
    // ===================================
    loadProgress() {
        try {
            const saved = localStorage.getItem('guia-admin-progress');
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.error('Error loading progress:', error);
            return {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('guia-admin-progress', JSON.stringify(this.progress));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }

    exportProgress() {
        const data = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            progress: this.progress
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `guia-admin-progress-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importProgress() {
        document.getElementById('importFile').click();
    }

    handleImport(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (data.progress) {
                    this.progress = data.progress;
                    this.saveProgress();
                    
                    // Recargar vista actual
                    if (this.currentSectionIndex !== null) {
                        this.showSection(this.currentSectionIndex);
                    } else {
                        this.renderGlobalCharts();
                    }
                    
                    this.updateGlobalProgress();
                    this.updateSidebarProgress();
                    
                    alert('Progreso importado exitosamente');
                } else {
                    alert('Archivo de progreso inválido');
                }
            } catch (error) {
                console.error('Error importing progress:', error);
                alert('Error al importar el archivo');
            }
        };
        
        reader.readAsText(file);
        event.target.value = '';
    }
}

// Inicializar app
const app = new GuiaApp();

// Exponer globalmente para onclick handlers
window.app = app;
