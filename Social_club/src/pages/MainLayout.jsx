// src/components/MainLayout.js (или где бы он ни находился)
import { NavLink, Outlet } from "react-router";
import '/src/index.css'; // Убедитесь, что путь к файлу стилей правильный

export default function MainLayout() {
    return (
        <div>
            <header>
                <NavLink to='/'>Home</NavLink>
                <div></div> {/* Пустой div для центрирования, если нужно что-то посередине */}
                <NavLink to="/cart">Cart</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                {/* Можно добавить футер */}
            </footer>
        </div>
    )
}