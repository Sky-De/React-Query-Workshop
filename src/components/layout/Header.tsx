import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className=" h-12 flex justify-between items-center px-4 bg-zinc-100">
      <h1>
        <Link to="/">RQ-WorkShop</Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li></li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ-Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-parallel">RQ-Parallel</Link>
          </li>
          <li>
            <Link to="/depended-queries">Depended-Queries</Link>
          </li>
          <li>
            <Link to="/paginated-colors">Paginated-Colors</Link>
          </li>
          <li>
            <Link to="/rq-infinite">RQ-Infinite-Q</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
