import { FC, ReactNode } from "react";

interface ICardsGrid {
  children?: ReactNode;
}

const CardsGrid: FC<ICardsGrid> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">{children}</div>
);

export default CardsGrid;
