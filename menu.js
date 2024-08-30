document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-categories a');
    const menuContent = document.getElementById('menu-content');


    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('href').substring(1);
            loadMenuContent(category);
        });
    });

    // Cargar el contenido de "MENÚS" por defecto
    loadMenuContent('menus');
});

function loadMenuContent(category) {
    const categoryContent = {
        menus: `
            <div class="menu-individual">
                <h1 class="menu-title">MENÚ INDIVIDUAL</h1>
                <p class="menu-subtitle">disponible durante toda la semana (excepto festivos)</p>
                <div class="menu-price">
                    <span class="price-decoration">◆◆◆◆◆◆◆◆◆◆</span>
                    <span class="price">7,00€</span>
                    <span class="price-decoration">◆◆◆◆◆◆◆◆◆◆</span>
                </div>
                <p class="menu-instruction">A elegir:</p>
                <div class="menu-sections">
                    <div class="menu-section">
                        <h2>1 Entrantes: <span>(a elegir)</span></h2>
                        <ul>
                            <li>Rollo de primavera</li>
                            <li>Ensalada china</li>
                            <li>Sopa pollo champiñón</li>
                            <li>Sopa de aleta tiburón</li>
                            <li>Sopa agripicante</li>
                            <li>Sopa de marisco</li>
                            <li>Pan de gambas</li>
                        </ul>
                    </div>
                    <div class="menu-section">
                        <h2>2 Principal: <span>(a elegir)</span></h2>
                        <ul>
                            <li>Arroz frito 3 delicias</li>
                            <li>Arroz frito con ternera</li>
                            <li>Arroz frito especial</li>
                            <li>Pan chino</li>
                            <li>Wan tun frito</li>
                            <li>Tallarines con ternera</li>
                            <li>Fideos chinos con ternera</li>
                        </ul>
                    </div>
                    <div class="menu-section">
                        <h2>3 Acompañamiento: <span>(a elegir)</span></h2>
                        <ul>
                            <li>Pollo con almendras</li>
                            <li>Bolas de pollo fritas</li>
                            <li>Pollo o ternera con verduras</li>
                            <li>Pollo al limón</li>
                            <li>Ternera con salsa de ostras</li>
                            <li>Ternera con bambú y setas</li>
                            <li>Gambas con verduras</li>
                            <li>Cerdo agridulce</li>
                        </ul>
                    </div>
                    <div class="menu-section">
                        <h2>Bebidas: <span>(a elegir)</span></h2>
                        <p>Cerveza, copa de vino, agua o refrescos</p>
                    </div>
                    <div class="menu-section">
                        <h2>Postres: <span>(a elegir)</span></h2>
                        <p>Flan, helados, yogurts o café</p>
                    </div>
                </div>
            </div>

            <div class="menu-grupos">
                <h1 class="menu-title">MENÚS</h1>
                <p class="menu-note">No incluye bebidas ni postre</p>
                
                <div class="group-menus">
                    <div class="group-menu">
                        <h2>Menú para 2 personas <span class="price">15,95€</span></h2>
                        <p>Ensalada china · 2 Rollos de primavera · Pan de gambas · 
                        Arroz frito tres delicias · Bolas de pollo frito · Ternera con 
                        salsa de ostras</p>
                    </div>
                    
                    <div class="group-menu">
                        <h2>Menú para 3 personas <span class="price">22,45€</span></h2>
                        <p>Ensalada china · 3 Rollos de primavera · Pan de gambas · 
                        2 Arroz frito tres delicias · Ternera con salsa de ostras · Cerdo 
                        agridulce · Bolas de pollo frito</p>
                    </div>
                    
                    <div class="group-menu">
                        <h2>Menú para 4 personas <span class="price">31,95€</span></h2>
                        <p>2 Ensalada china · 4 Rollos de primavera · Pan de gambas · 
                        2 Arroz frito tres delicias · Familia feliz · Ternera con salsa de 
                        ostras · Bolas de pollo frito · Gambas fritas</p>
                    </div>
                    
                    <div class="group-menu">
                        <h2>Menú para 5 personas <span class="price">39,95€</span></h2>
                        <p>2 Ensalada china · 5 Rollos de primavera · Pan de gambas · 
                        2 Arroz frito tres delicias · Ternera con salsa de ostras · Pollo 
                        con almendras · Gambas a la plancha · Cerdo agridulce · Bolas 
                        de pollo frito</p>
                    </div>
                    
                    <div class="group-menu">
                        <h2>Menú para 6 personas <span class="price">47,95€</span></h2>
                        <p>3 Ensalada china · 6 Rollos de primavera · Pan de gambas · 
                        2 Arroz frito tres delicias · Ternera a la plancha · Pollo con 
                        almendras · Gambas a la plancha · Cerdo agridulce · Bolas de 
                        pollo frito</p>
                    </div>
                </div>
            </div>
        `,
        entrantes: `
        
            <div class="menu-section2">
    <h1>Entrantes</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Ensalada china</span>
            <span class="dish-icons">🥚 🌿</span>
            <span class="dish-price">2,50€</span>
        </li>
        <li>
            <span class="dish-name">Ensalada china con gambas</span>
            <span class="dish-icons">🦀 🥚 🌿</span>
            <span class="dish-price">3,50€</span>
        </li>
        <li>
            <span class="dish-name">Ensalada de brotes de soja con gambas</span>
            <span class="dish-icons">🦀</span>
            <span class="dish-price">3,80€</span>
        </li>
        <li>
            <span class="dish-name">Ensaladas de algas</span>
            <span class="dish-icons">🦀 🥚 🌿</span>
            <span class="dish-price">3,80€</span>
        </li>
        <li>
            <span class="dish-name">Ensalada especial</span>
            <span class="dish-icons">🦀 🥚 🌿</span>
            <span class="dish-price">4,10€</span>
        </li>
        <li>
            <span class="dish-name">Rollo de primavera con ensalada</span>
            <span class="dish-icons">🌾 🥚 🌿</span>
            <span class="dish-price">2,80€</span>
        </li>
        <li>
            <span class="dish-name">Pan de gambas</span>
            <span class="dish-icons">🦀</span>
            <span class="dish-price">2,00€</span>
        </li>
        <li>
            <span class="dish-name">Pan chino</span>
            <span class="dish-icons">🌾 🥛</span>
            <span class="dish-price">1,40€</span>
        </li>
        <li>
            <span class="dish-name">Rollo de primavera</span>
            <span class="dish-icons">🌾</span>
            <span class="dish-price">1,30€</span>
        </li>
        <li>
            <span class="dish-name">Rollo de primavera especial</span>
            <span class="dish-icons">🌾 🦀</span>
            <span class="dish-price">1,55€</span>
        </li>
        <li>
            <span class="dish-name">Rollo de triángulo 4pcs</span>
            <span class="dish-icons">🌾</span>
            <span class="dish-price">2,00€</span>
        </li>
        <li>
            <span class="dish-name">Won ton frito 10pcs</span>
            <span class="dish-icons">🌾</span>
            <span class="dish-price">2,20€</span>
        </li>
        <li>
            <span class="dish-name">Won ton frito de queso 8pcs</span>
            <span class="dish-icons">🌾 🥛</span>
            <span class="dish-price">3,80€</span>
        </li>
        <li>
            <span class="dish-name">Entremeses de la casa</span>
            <span class="dish-icons">🌾</span>
            <span class="dish-price">5,65€</span>
        </li>
        <li>
            <span class="dish-name">Entremeses de marisco</span>
            <span class="dish-icons">🌾 🦀 🥛</span>
            <span class="dish-price">6,35€</span>
        </li>
    </ul>
</div>
        `,
        // Añade más categorías aquí...
        sopas: `
            <div class="menu-section2">
    <h1>Sopas</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Sopa de aleta burón</span>
            <span class="dish-icons">⚪</span>
            <span class="dish-price">2,50€</span>
        </li>
        <li>
            <span class="dish-name">Sopa agripicante</span>
            <span class="dish-icons">🌶️ 🥚 ⚪</span>
            <span class="dish-price">2,40€</span>
        </li>
        <li>
            <span class="dish-name">Sopa de maíz con pollo</span>
            <span class="dish-icons">⚪</span>
            <span class="dish-price">2,70€</span>
        </li>
        <li>
            <span class="dish-name">Sopa de maíz con carne de cangrejo</span>
            <span class="dish-icons">🦀 ⚪</span>
            <span class="dish-price">2,90€</span>
        </li>
        <li>
            <span class="dish-name">Sopa de pollo y champiñón</span>
            <span class="dish-icons">⚪</span>
            <span class="dish-price">2,30€</span>
        </li>
        <li>
            <span class="dish-name">Sopa de marisco de la casa</span>
            <span class="dish-icons">🦀 ⚪</span>
            <span class="dish-price">2,90€</span>
        </li>
    </ul>
</div>
        <div class="menu-section2">
    <h1>Dim Sum</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Ravioles chinos “jiaozi” 4pcs</span>
            <span class="dish-icons">🌾</span>
            <span class="dish-price">3,60€</span>
        </li>
        <li>
            <span class="dish-name">Xiao long bao 4pcs</span>
            <span class="dish-icons">🌾</span>
            <span class="dish-price">3,40€</span>
        </li>
        <li>
            <span class="dish-name">Siu mai 4pcs</span>
            <span class="dish-icons">🌾</span>
            <span class="dish-price">3,80€</span>
        </li>
        <li>
            <span class="dish-name">Si xi jiao 4pcs</span>
            <span class="dish-icons">🌾</span>
            <span class="dish-price">3,80€</span>
        </li>
        <li>
            <span class="dish-name">Xia jiao 4pcs</span>
            <span class="dish-icons">🦀</span>
            <span class="dish-price">3,80€</span>
        </li>
    </ul>
</div>

        `,
        arroz:`
        <div class="menu-section2">
    <h1>Arroz</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Arroz frito tres delicias</span>
            <span class="dish-icons">🥚</span>
            <span class="dish-price">3,30€</span>
        </li>
        <li>
            <span class="dish-name">Arroz frito con gambas</span>
            <span class="dish-icons">🥚 🦀</span>
            <span class="dish-price">3,90€</span>
        </li>
        <li>
            <span class="dish-name">Arroz frito de la casa</span>
            <span class="dish-icons">🥚 🌿 🦀</span>
            <span class="dish-price">4,15€</span>
        </li>
        <li>
            <span class="dish-name">Arroz blanco</span>
            <span class="dish-icons">🍚</span>
            <span class="dish-price">1,50€</span>
        </li>
        <li>
            <span class="dish-name">Arroz frito especial</span>
            <span class="dish-icons">🥚 🌿 🦀</span>
            <span class="dish-price">4,15€</span>
        </li>
    </ul>
</div>

<div class="menu-section2">
    <h1>Tallarines</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Tallarines fritos tres delicias</span>
            <span class="dish-icons">🌾 🌿</span>
            <span class="dish-price">3,90€</span>
        </li>
        <li>
            <span class="dish-name">Tallarines fritos con gambas</span>
            <span class="dish-icons">🌾 🌿 🦀</span>
            <span class="dish-price">4,15€</span>
        </li>
        <li>
            <span class="dish-name">Tallarines fritos con cerdo</span>
            <span class="dish-icons">🌾 🌿</span>
            <span class="dish-price">3,75€</span>
        </li>
        <li>
            <span class="dish-name">Tallarines fritos con anacardo</span>
            <span class="dish-icons">🌾 🌿 🥜</span>
            <span class="dish-price">4,95€</span>
        </li>
        <li>
            <span class="dish-name">Tallarines a la plancha</span>
            <span class="dish-icons">🌾 🌿 🦀</span>
            <span class="dish-price">5,15€</span>
        </li>
    </ul>
</div>

<div class="menu-section2">
    <h1>Fideos Chinos</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Fideos chinos tres delicias</span>
            <span class="dish-icons">🌿 🦀</span>
            <span class="dish-price">4,55€</span>
        </li>
        <li>
            <span class="dish-name">Fideos chinos con ternera</span>
            <span class="dish-icons">🌿</span>
            <span class="dish-price">4,25€</span>
        </li>
    </ul>
</div>

        `,
        ternera: `
        <div class="menu-section2">
    <h1>Ternera</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Ternera con bambú y setas chinas</span>
            <span class="dish-icons">🌿 🦪</span>
            <span class="dish-price">5,15€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con salsa de ostra</span>
            <span class="dish-icons">🌿 🦪 🥬</span>
            <span class="dish-price">4,80€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con champiñón</span>
            <span class="dish-icons">🌿 🦪</span>
            <span class="dish-price">4,75€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con verduras</span>
            <span class="dish-icons">🌿 🦪</span>
            <span class="dish-price">4,70€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con cebolla</span>
            <span class="dish-icons">🌿 🦪</span>
            <span class="dish-price">4,60€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con kun bao</span>
            <span class="dish-icons">🌶️ 🥜 ⚪</span>
            <span class="dish-price">4,85€</span>
        </li>
        <li>
            <span class="dish-name">Ternera al curry</span>
            <span class="dish-icons">⚪</span>
            <span class="dish-price">4,70€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con pimientos verdes</span>
            <span class="dish-icons">🌿</span>
            <span class="dish-price">4,70€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con patatas</span>
            <span class="dish-icons">🦪</span>
            <span class="dish-price">4,70€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con tomate</span>
            <span class="dish-icons"> </span>
            <span class="dish-price">4,50€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con anacardo</span>
            <span class="dish-icons">🥜 ⚪</span>
            <span class="dish-price">5,85€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con curry rojo</span>
            <span class="dish-icons"></span>
            <span class="dish-price">4,95€</span>
        </li>
        <li>
            <span class="dish-name">Ternera “Singapur” dulce y picante</span>
            <span class="dish-icons">🌶️</span>
            <span class="dish-price">5,35€</span>
        </li>
    </ul>
</div>

<div class="menu-section2">
    <h1>Pollo</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Pollo con bambú y setas chinas</span>
            <span class="dish-icons">🌿 🦪</span>
            <span class="dish-price">4,85€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con salsa de ostras</span>
            <span class="dish-icons">🌿 🦪 🥬</span>
            <span class="dish-price">4,75€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con champiñón</span>
            <span class="dish-icons">🦪</span>
            <span class="dish-price">4,45€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con verduras</span>
            <span class="dish-icons">🦪</span>
            <span class="dish-price">4,40€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con almendras</span>
            <span class="dish-icons">🌿 🦪 🥬 🥜</span>
            <span class="dish-price">4,55€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con kun bao</span>
            <span class="dish-icons">🌶️ 🥜 ⚪</span>
            <span class="dish-price">4,55€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con salsa curry</span>
            <span class="dish-icons">⚪</span>
            <span class="dish-price">4,35€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con salsa limón</span>
            <span class="dish-icons">🌾 🥚 ⚪</span>
            <span class="dish-price">4,75€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con maíz, estilo chino</span>
            <span class="dish-icons"> </span>
            <span class="dish-price">4,55€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con piña</span>
            <span class="dish-icons"> </span>
            <span class="dish-price">4,90€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con anacardo</span>
            <span class="dish-icons">🥜 ⚪</span>
            <span class="dish-price">5,45€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con curry rojo</span>
            <span class="dish-icons"> </span>
            <span class="dish-price">4,85€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con chili limón</span>
            <span class="dish-icons"> </span>
            <span class="dish-price">4,85€</span>
        </li>
        <li>
            <span class="dish-name">Pollo con pimienta negra</span>
            <span class="dish-icons">🦪</span>
            <span class="dish-price">5,25€</span>
        </li>
        <li>
            <span class="dish-name">Pollo frito</span>
            <span class="dish-icons">🌾 🥚 ⚪</span>
            <span class="dish-price">4,50€</span>
        </li>
        <li>
            <span class="dish-name">Tiras de pollo frito</span>
            <span class="dish-icons">🌾 🥚</span>
            <span class="dish-price">4,40€</span>
        </li>
        <li>
            <span class="dish-name">Bolas de pollo frito</span>
            <span class="dish-icons">🌾 🥚</span>
            <span class="dish-price">4,50€</span>
        </li>
        <li>
            <span class="dish-name">Pollo “Singapur” con sésamo</span>
            <span class="dish-icons">🌶️ ⚪</span>
            <span class="dish-price">5,25€</span>
        </li>
    </ul>
</div>

        `,
        cerdo: `
        <div class="menu-section2">
    <h1>Cerdo</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Cerdo agridulce</span>
            <span class="dish-icons">🌾 🥚</span>
            <span class="dish-price">4,00€</span>
        </li>
        <li>
            <span class="dish-name">Cerdo con bambú y setas chinas</span>
            <span class="dish-icons">🌿 🦪</span>
            <span class="dish-price">4,65€</span>
        </li>
        <li>
            <span class="dish-name">Costillas agridulce</span>
            <span class="dish-icons">🌿</span>
            <span class="dish-price">4,65€</span>
        </li>
        <li>
            <span class="dish-name">Costillas con salsa de soja</span>
            <span class="dish-icons">🌿</span>
            <span class="dish-price">5,25€</span>
        </li>
        <li>
            <span class="dish-name">Costilla asada</span>
            <span class="dish-icons">🌿</span>
            <span class="dish-price">5,40€</span>
        </li>
        <li>
            <span class="dish-name">Cerdo asado con picante</span>
            <span class="dish-icons">🌶️ 🥜</span>
            <span class="dish-price">5,35€</span>
        </li>
        <li>
            <span class="dish-name">Cerdo con salsa chili limón</span>
            <span class="dish-icons">🌶️</span>
            <span class="dish-price">5,15€</span>
        </li>
    </ul>

    <h1>Pato</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Pato con bambú y setas chinas</span>
            <span class="dish-icons">🌿 🦪</span>
            <span class="dish-price">6,95€</span>
        </li>
        <li>
            <span class="dish-name">Pato a la naranja</span>
            <span class="dish-icons"> </span>
            <span class="dish-price">6,85€</span>
        </li>
        <li>
            <span class="dish-name">Pato con piña</span>
            <span class="dish-icons"> </span>
            <span class="dish-price">6,85€</span>
        </li>
        <li>
            <span class="dish-name">Pato asado estilo pekín</span>
            <span class="dish-icons">🥚</span>
            <span class="dish-price">8,80€</span>
        </li>
        <li>
            <span class="dish-name">Pato a la plancha</span>
            <span class="dish-icons">⚪</span>
            <span class="dish-price">7,25€</span>
        </li>
    </ul>
</div>

        `,
        platos: `
        <div class="menu-section2">
    <h1>Platos Variados</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Huevos revueltos con gambas</span>
            <span class="dish-icons">🥚 🦀</span>
            <span class="dish-price">3,95€</span>
        </li>
        <li>
            <span class="dish-name">Huevos revueltos con jamón york</span>
            <span class="dish-icons">🥚</span>
            <span class="dish-price">3,30€</span>
        </li>
        <li>
            <span class="dish-name">Tofu Ma-po con salsa de soja</span>
            <span class="dish-icons">🌿 🥬</span>
            <span class="dish-price">6,15€</span>
        </li>
        <li>
            <span class="dish-name">Berenjenas con picante</span>
            <span class="dish-icons">🌶️ 🌿</span>
            <span class="dish-price">4,65€</span>
        </li>
        <li>
            <span class="dish-name">Berenjenas fritas a la cazuela</span>
            <span class="dish-icons">🌿</span>
            <span class="dish-price">5,65€</span>
        </li>
        <li>
            <span class="dish-name">Verdura salteada</span>
            <span class="dish-icons">🌿</span>
            <span class="dish-price">3,75€</span>
        </li>
        <li>
            <span class="dish-name">Verdura china a la cazuela</span>
            <span class="dish-icons">🌿</span>
            <span class="dish-price">5,75€</span>
        </li>
        <li>
            <span class="dish-name">Verduras fritas con gambas</span>
            <span class="dish-icons">🌾 🥚 🦀</span>
            <span class="dish-price">5,75€</span>
        </li>
        <li>
            <span class="dish-name">Ancas de rana fritas</span>
            <span class="dish-icons">🌾 🥚</span>
            <span class="dish-price">5,05€</span>
        </li>
        <li>
            <span class="dish-name">Ancas de rana a la plancha</span>
            <span class="dish-icons">🌾 🥚 🌿 ⚪</span>
            <span class="dish-price">5,90€</span>
        </li>
        <li>
            <span class="dish-name">Bolas de carne fritas</span>
            <span class="dish-icons">🌾 🥚</span>
            <span class="dish-price">5,50€</span>
        </li>
        <li>
            <span class="dish-name">Bolas de carne fritas a la cazuela</span>
            <span class="dish-icons">🌾 🥚 🌿</span>
            <span class="dish-price">5,80€</span>
        </li>
        <li>
            <span class="dish-name">Familia feliz</span>
            <span class="dish-icons">🌿 🦀 🥬</span>
            <span class="dish-price">5,80€</span>
        </li>
        <li>
            <span class="dish-name">Ternera a la plancha</span>
            <span class="dish-icons">🌿 ⚪</span>
            <span class="dish-price">5,45€</span>
        </li>
        <li>
            <span class="dish-name">Pollo a la plancha</span>
            <span class="dish-icons">🌿 ⚪</span>
            <span class="dish-price">5,45€</span>
        </li>
        <li>
            <span class="dish-name">Gambas a la plancha</span>
            <span class="dish-icons">🌿 ⚪ 🦀</span>
            <span class="dish-price">6,75€</span>
        </li>
        <li>
            <span class="dish-name">Marisco a la plancha</span>
            <span class="dish-icons">🌿 ⚪ 🦀</span>
            <span class="dish-price">7,15€</span>
        </li>
        <li>
            <span class="dish-name">Ku Bac tres delicias</span>
            <span class="dish-icons">🌿 ⚪</span>
            <span class="dish-price">5,65€</span>
        </li>
        <li>
            <span class="dish-name">Ku Bac con gambas</span>
            <span class="dish-icons">🌿 ⚪ 🦀</span>
            <span class="dish-price">5,95€</span>
        </li>
        <li>
            <span class="dish-name">Pollo estilo Hong Kong</span>
            <span class="dish-icons">🥚</span>
            <span class="dish-price">5,55€</span>
        </li>
        <li>
            <span class="dish-name">Pollo frito con ajo especial</span>
            <span class="dish-icons">🌾 🥚 🌿 ⚪</span>
            <span class="dish-price">5,05€</span>
        </li>
        <li>
            <span class="dish-name">Hormiga sube al árbol</span>
            <span class="dish-icons">🌿 ⚪ 🦀</span>
            <span class="dish-price">5,90€</span>
        </li>
        <li>
            <span class="dish-name">Patatas fritas</span>
            <span class="dish-icons">🍟</span>
            <span class="dish-price">2,25€</span>
        </li>
        <li>
            <span class="dish-name">Gambas al ajillo</span>
            <span class="dish-icons">⚪ 🦀</span>
            <span class="dish-price">6,45€</span>
        </li>
        <li>
            <span class="dish-name">Ternera con mantequilla</span>
            <span class="dish-icons">⚪ 🥛</span>
            <span class="dish-price">5,75€</span>
        </li>
    </ul>
</div>

        `,
        postres: `
        <div class="menu-section2">
    <h1>Postres</h1>
    <ul class="dish-list">
        <li>
            <span class="dish-name">Helados</span>
            <div class="dish-details">Chocolate, Fresa, Nata, Vainilla</div>
            <span class="dish-price">1,10€</span>
        </li>
        <li>
            <span class="dish-name">Helado con nueces caramelizadas</span>
            <span class="dish-price">1,70€</span>
        </li>
        <li>
            <span class="dish-name">Helado frito</span>
            <div class="dish-details">Chocolate, Fresa, Nata, Vainilla</div>
            <span class="dish-price">2,25€</span>
        </li>
        <li>
            <span class="dish-name">Helado frito flambeado</span>
            <span class="dish-price">2,85€</span>
        </li>
        <li>
            <span class="dish-name">Contessa tarta nata chocolate</span>
            <span class="dish-price">1,80€</span>
        </li>
        <li>
            <span class="dish-name">Plátano frito con miel</span>
            <span class="dish-price">1,95€</span>
        </li>
        <li>
            <span class="dish-name">Plátano frito flambeado con miel</span>
            <span class="dish-price">2,25€</span>
        </li>
        <li>
            <span class="dish-name">Plátano frito con nata</span>
            <span class="dish-price">2,85€</span>
        </li>
        <li>
            <span class="dish-name">Plátano frito con nata y nueces</span>
            <span class="dish-price">3,40€</span>
        </li>
        <li>
            <span class="dish-name">Plátano frito con helado</span>
            <span class="dish-price">2,85€</span>
        </li>
        <li>
            <span class="dish-name">Flan sabor vainilla con caramelo</span>
            <span class="dish-price">1,30€</span>
        </li>
        <li>
            <span class="dish-name">Flan con nata montada</span>
            <span class="dish-price">1,95€</span>
        </li>
        <li>
            <span class="dish-name">Flan con nata montada y nueces</span>
            <span class="dish-price">2,85€</span>
        </li>
        <li>
            <span class="dish-name">Nata montada</span>
            <span class="dish-price">1,35€</span>
        </li>
        <li>
            <span class="dish-name">Nata montada con nueces</span>
            <span class="dish-price">2,30€</span>
        </li>
        <li>
            <span class="dish-name">Pijama</span>
            <div class="dish-details">Flan, helado, melocotón y piña en almíbar</div>
            <span class="dish-price">3,30€</span>
        </li>
        <li>
            <span class="dish-name">Barco chino</span>
            <div class="dish-details">Plátano, 2 helados, nata y nueces</div>
            <span class="dish-price">3,90€</span>
        </li>
        <li>
            <span class="dish-name">Postre de la casa</span>
            <div class="dish-details">Helado, flan, nata y nueces</div>
            <span class="dish-price">3,60€</span>
        </li>
        <li>
            <span class="dish-name">Café irlandés</span>
            <span class="dish-price">3,60€</span>
        </li>
        <li>
            <span class="dish-name">Macedonia</span>
            <span class="dish-price">1,65€</span>
        </li>
        <li>
            <span class="dish-name">Fruta del tiempo</span>
            <span class="dish-price">1,30€</span>
        </li>
    </ul>
</div>

        `,
            
    };

    const contentSection = document.getElementById('menu-content');
    contentSection.innerHTML = categoryContent[category] || '<p>Contenido no disponible</p>';
}
